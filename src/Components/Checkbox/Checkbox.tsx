import { FC } from "react";
import style from "./Checkbox.module.scss";

type PropsType = {
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Checkbox: FC<PropsType> = ({ isChecked, onChange }) => {
  return (
    <label className={style.checkbox_wrapper}>
      <input
        checked={isChecked}
        onChange={onChange}
        type='checkbox'
        className={style.checkbox_element}
      />
      <p>Согласен на сохранение и обработку персональных данных</p>
    </label>
  );
};
