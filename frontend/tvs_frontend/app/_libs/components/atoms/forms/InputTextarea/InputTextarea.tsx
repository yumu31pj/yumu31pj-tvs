'use client';

import { useState } from "react";
import { InputTextAreaType } from "./InputTextarea.type";

import { InputLabel } from "../InputLabel/InputLabel";
import styles from "./InputTextarea.module.scss";

export const InputTextArea = (props: InputTextAreaType) => {
  const {id, name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['input-textarea']}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <textarea name={name}
        id={id}
        className={`${styles['input-textarea__field']}${isActive ? ` ${styles['input-textarea__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete="off"
      />
    </div>
  )
}