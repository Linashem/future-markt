import { useState } from "react";
import { AuthForm } from "../AuthForm/AuthForm";
import { Button } from "../Button/Button";
import style from "./Benefits.module.scss";

export const Benefits = () => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);

  const isAuthHandler = () => setIsOpenAuth((prev) => !prev);

  return (
    <div className={style.benefits}>
      <h1 className={style.benefits_title}>Создаю условия для вашего успеха</h1>
      <p className={`${style.benefits_desc}  ${style.benefits_desc_desktop}`}>
        Когда ваше время и энергия лучше сфокусированы, стремление к новым
        возможностям становится реальностью, ваш успех зависит от ваших действий
      </p>
      <p className={`${style.benefits_desc}  ${style.benefits_desc_mobile}`}>
        Ваш успех зависит от ваших действий
      </p>

      <div className={style.benefits_btns}>
        <Button
          type='button'
          isColor={true}
          text={"Записаться на консультацию"}
          textMobile={"Записаться"}
        />
        <Button
          type='button'
          onclick={isAuthHandler}
          isColor={false}
          text={"Бесплатная консультация"}
          textMobile={"Заказать звонок"}
        />
      </div>

      <AuthForm isOpen={isOpenAuth} onclick={isAuthHandler} />
    </div>
  );
};
