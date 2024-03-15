import { FC, useEffect, useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import style from "./AuthForm.module.scss";

type PropsType = {
  isOpen: boolean;
  onclick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export const AuthForm: FC<PropsType> = ({ isOpen, onclick }) => {
  const [userName, setUserName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [userNameDirty, setUserNameDirty] = useState<boolean>(false);
  const [phoneDirty, setPhoneDirty] = useState<boolean>(false);
  const [userNameError, setUserNameError] = useState<string>(
    "Поле не может быть пустым"
  );
  const [phoneError, setPhoneError] = useState<string>(
    "Поле не может быть пустым"
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (userNameError || phoneError || !isChecked) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError, phoneError, isChecked]);

  const isCheckedHandler = () => setIsChecked((prev) => !prev);

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    const re = /^[a-zA-Zа-яА-Я]+$/;
    !re.test(String(e.target.value))
      ? setUserNameError("Некорректное имя")
      : setUserNameError("");
  };

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneError("");
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  const isSubmitHandler = () => {
    setIsSubmit((prev) => !prev);
    localStorage.setItem("userName", JSON.stringify(userName));
    localStorage.setItem("phone", JSON.stringify(phone));
  };

  return (
    <div className={`${isOpen && style.auth}`} onClick={onclick}>
      <div
        className={`${style.auth_wrapper}  ${isOpen && style.auth_active} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.auth_close} onClick={onclick}>
          <img src='imges/svg/close.svg' alt='x' />
        </div>
        {!isSubmit ? (
          <form className={style.auth_form} action='submit'>
            <h2 className={style.auth_form_title}>Закажите обратный звонок</h2>
            <input
              className={style.auth_form_input}
              onChange={(e) => userNameHandler(e)}
              value={userName}
              onBlur={(e) => blurHandler(e)}
              name='userName'
              type='text'
              placeholder='ИМЯ'
            />
            {userNameDirty && userNameError && <div>{userNameError}</div>}

            <input
              className={style.auth_form_input}
              onChange={(e) => phoneHandler(e)}
              value={phone}
              onBlur={(e) => blurHandler(e)}
              name='phone'
              type='tel'
              placeholder='ТЕЛЕФОН'
            />
            {phoneDirty && phoneError && <div>{phoneError}</div>}

            <Checkbox isChecked={isChecked} onChange={isCheckedHandler} />
            <div className={style.auth_btn}>
              <Button
                onclick={isSubmitHandler}
                disabled={!formValid}
                type='submit'
                isColor={false}
                text={"Заказать обратный звонок"}
                textMobile={"Заказать звонок"}
              />
            </div>
          </form>
        ) : (
          <div className={`${style.auth_form} ${style.auth_thank}`}>
            <h2 className={style.auth_form_title}>Спасибо за заявку</h2>
            <p className={style.auth_form_desc}>
              Я обязательно свяжусь с вами в ближайшее время.
            </p>
            <div className={style.auth_logo}>
              <Logo />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
