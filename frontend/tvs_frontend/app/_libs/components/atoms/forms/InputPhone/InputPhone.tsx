'use client';

import { useState } from "react";
import { InputPhoneType } from "./InputPhone.type";

import { InputLabel } from "../InputLabel/InputLabel";
import styles from "./InputPhone.module.scss";

export const InputPhone = (props: InputPhoneType) => {
  const {id = "phone", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['input-phone']}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="tel" name={name}
        id={id}
        className={`${styles['input-phone__field']}${isActive ? ` ${styles['input-phone__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
        pattern="^[0-9a-zA-Z\-]+$"
      />
    </div>
  )
}