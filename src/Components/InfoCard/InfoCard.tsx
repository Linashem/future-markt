import { FC } from "react";
import style from "./InfoCard.module.scss";

type PropsType = {
  title: string | number;
  text: string;
  textMobile: string;
};

export const InfoCard: FC<PropsType> = ({ text, textMobile, title }) => {
  return (
    <div className={style.info_card}>
      <div className={style.info_card_title}>{title}</div>
      <p className={`${style.info_card_desc}  ${style.info_card_desc_desktop}`}>
        {text}
      </p>
      <p className={`${style.info_card_desc}  ${style.info_card_desc_mobile}`}>
        {textMobile}
      </p>
    </div>
  );
};
