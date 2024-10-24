import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import { navigation } from "@/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center px-4 border-b border-[--border-1] backdrop-blur-sm bg-[rgba(18,18,18,0.95)]">
      <div className="flex items-center gap-8 max-w-screen-lg w-full">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="ao book's logo"
            width={48}
            height={48}
          />
        </Link>
        <ul className="flex gap-4">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="relative group/menu flex items-center hover:text-[--accent-1] h-16"
            >
              <button className="flex items-center gap-1 font-medium text-sm p-1.5">
                {item.menu}
                <FaChevronDown
                  size={12}
                  className="group-hover/menu:rotate-180 transition duration-200"
                />
              </button>
              {item.submenu && (
                <div className="absolute top-full hidden group-hover/menu:flex">
                  <ul className="flex flex-col gap-4 p-6 mt-1.5 text-[--foreground-1] border border-[--border-1] rounded-lg bg-[--background-1] transition delay-200">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.url}
                          className="group/submenu flex gap-3 p-2 text-sm"
                        >
                          <div className="flex items-center justify-center size-10 text-[--foreground-2] group-hover/submenu:text-[--foreground-1] rounded-lg bg-[--background-3]">
                            {subItem.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              {subItem.name}
                              <FaChevronRight
                                size={12}
                                className="opacity-0 group-hover/submenu:opacity-100 transition -translate-x-1 group-hover/submenu:translate-x-0"
                              />
                            </div>
                            <div className="text-[--foreground-3] group-hover/submenu:text-[--foreground-2] truncate">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
