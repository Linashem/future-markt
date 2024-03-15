import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href='/' className={style.logo}>
      <img src='imges/svg/logo.svg' alt='Alex. Shevtsov' />
    </a>
  );
};
