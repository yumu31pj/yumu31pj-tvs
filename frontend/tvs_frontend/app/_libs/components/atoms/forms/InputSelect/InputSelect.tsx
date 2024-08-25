'use client';

import { useState } from "react";
import { InputSelectType } from "./InputSelect.type";

import { InputLabel } from "../InputLabel/InputLabel";
import styles from "./InputSelect.module.scss";

export const InputSelect = (props: InputSelectType) => {
  const {id, name, labelText, isRequired, selectItems} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['input_select']}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <select
        id={id}
        name={name}
        className={`${styles['input_select__field']}${isActive ? ` ${styles['input_select__field--active']}` : ""}`}
        value={text}
        required={!!isRequired}
        aria-label={labelText}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      >
        <option value=""></option>
        {selectItems && selectItems.map((item, index) => (
          <option key={index} value={item.valueText}>{item.displayText}</option>
        ))}
      </select>
    </div>
  )
}