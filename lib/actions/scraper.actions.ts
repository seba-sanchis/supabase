"use server";

import { load } from "cheerio";

export async function scraper(url) {
  // Fetch the HTML from the provided URL
  const response = await fetch(url);
  const html = await response.text();

  // Load the HTML into Cheerio
  const $ = load(html);
  const items = [];

  // Traverse the HTML to extract NPC data
  $(".w-full").each((_, element) => {
    const item = {};

    // Extract the item name
    item.name = $(element).find("span.text-yellow-ao20").text().trim();

    // Extract the invocation
    item.invocation = $(element).find("span.text-teal-300").text().trim();

    // Extract the description
    item.description = $(element).find("span.text-gray-600").text().trim();

    // Extract stats like minHit, maxHit, magic, mana, stamina, etc.
    $(element)
      .find(".block-info span[title]")
      .each((_, statElement) => {
        const title = $(statElement).attr("title");
        const value = $(statElement).text().trim();

        switch (title) {
          case "Golpe Mínimo":
            item.minHit = value;
            break;
          case "Golpe Máximo":
            item.maxHit = value;
            break;
          case "Skills en Magia":
            item.magic = value;
            break;
          case "Mana Requerido":
            item.mana = value;
            break;
          case "Stamina Requerido":
            item.stamina = value;
            break;
          default:
            break;
        }
      });

    // Extract the value (gold price)
    item.value = $(element).find('span[title="Valor en oro"]').text().trim();

    // Extract the allowed classes (inside the last .block-info span)
    const classesText = $(element).find(".block-info").last().find("span").last().text().trim();
    
    // Correctly parse the classes from the text
    try {
      // Convert the string to an array
      item.classes = JSON.parse(classesText);
    } catch (error) {
      // If parsing fails, set classes to an empty array
      item.classes = [];
    }

    // Add the item to the array if it has a name
    if (item.name) {
      items.push(item);
    }
  });

  return items;
}
