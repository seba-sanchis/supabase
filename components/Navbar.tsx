import { navigation } from "@/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex gap-4 p-4 max-w-screen-lg w-full">
        {navigation.map((item, index) => (
          <li key={index} className="group hover:text-[--accent-1]">
            <span>{item.menu}</span>
            {item.submenu && (
              <ul className="absolute hidden group-hover:flex flex-col gap-4 text-[--foreground-1]">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.url} className="p-4">
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
