import { useState } from "react";
import { headerMenu } from "../../helper/constants/header";
import { Logo } from "../Logo/Logo";
import style from "./Header.module.scss";

export const Header = () => {
  const [open, setOpen] = useState<boolean>();
  const openHandler = () => setOpen((prev) => !prev);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.header_logo}>
          <Logo />
        </div>
        <button className={style.header_burger} onClick={() => openHandler()}>
          <img src='imges/svg/burger.svg' alt='menu' />
        </button>
        <ul className={style.header_menu_list}>
          {headerMenu.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <ul
          className={`${style.header_menu_list}  ${
            open ? style.list : style.list_hidden
          } `}
        >
          {headerMenu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className={style.header_phon_link}>
          <a href='tel:8-345-123-34-45'>
            <img src='imges/svg/phone.svg' alt='✆' />
          </a>
          <a
            className={style.header_phon_link_desktop}
            href='tel:8-345-123-34-45'
          >
            8-345-123-34-45
          </a>
        </div>
      </nav>
    </header>
  );
};
