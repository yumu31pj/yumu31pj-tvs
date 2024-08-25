'use client';

import { useState } from "react";
import { InputEmailType } from "./InputEmail.type";

import { InputLabel } from "../InputLabel/InputLabel";
import styles from "./InputEmail.module.scss";

export const InputEmail = (props: InputEmailType) => {
  const {id = "email", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['input-email']}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="email" name={name}
        id={id}
        className={`${styles['input-email__field']}${isActive ? ` ${styles['input-email__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      />
    </div>
  )
}