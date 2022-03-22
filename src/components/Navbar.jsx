import { Link, Route, Routes } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/products",
    id: "header-link-movies",
  }
  //   add the other link as well
];
export const Navbar = () => {
  return <nav>
    {
      links.map((item) => <Link key={item.id} to={item.link}>{item.title}</Link>)
    }
  </nav >




};
