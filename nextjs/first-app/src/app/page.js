"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Home() {
  const NavLink = [
    { name: "products", href: "products" },
    { name: "blog", href: "/blog" },
    { name: "about", href: "/about" },
    { name: "Read in english", herf: "/article/news?lang=en" },
    { name: "Read in french", herf: "/article/news?lang=fr" },
    {name:"Order Page", href:"/orderpage"}
  ];
  const pathname = usePathname();
  return (
    <>
      <h1>hello</h1>
      {NavLink.map((curr,i) => {
        // const isActive = pathname === curr.href || curr.href !== "/";
        return <Link key={i} href={`${curr.href}`}>{curr.name}</Link>;
      })}
    </>
  );
}
