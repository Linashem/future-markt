import { FC } from "react";
import style from "./Button.module.scss";

type PropsType = {
  text: string;
  textMobile: string;
  isColor: boolean;
  onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
};

export const Button: FC<PropsType> = ({
  text,
  textMobile,
  isColor,
  onclick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`${style.btn}  ${
        isColor ? style.btn_color : style.btn_transparent
      }
      ${disabled && style.btn_disabled}`}
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      <div className={style.btn_text}>{text}</div>
      <div className={style.btn_text_mobile}>{textMobile}</div>

      <div className={style.btn_square}>
        <svg
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 4.29346V20.952H4.37326M20.9618 21L1 1'
            stroke='white'
            stroke-width='2'
          />
        </svg>
      </div>
    </button>
  );
};
