'use client';

import { useState } from "react";
import { InputZipType } from "./InputZip.type";

import { InputLabel } from "../InputLabel/InputLabel";
import styles from "./InputZip.module.scss";

export const InputZip = (props: InputZipType) => {
  const {id = "zip", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['input-zip']}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="text" name={name}
        id={id}
        className={`${styles['input-zip__field']}${isActive ? ` ${styles['input-zip__field--active']}` : ""}`}
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