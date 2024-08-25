'use client';

import { useState } from "react";
import { InputChecboxType } from "./InputCheckbox.type";

import styles from "./InputCheckbox.module.scss";

export const InputCheckbox = (props: InputChecboxType) => {
  const {id, name, value, text} = props;
  const [isActive, setIsActive] = useState(false);

  const handleToggleCheckbox = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles['input-checkbox']}>
      <input type="checkbox" name={name}
        id={id}
        className={styles.input_checkbox__field}
        value={value}
        checked={isActive}
        onChange={() => {}}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={styles.input_checkbox__label}
        onClick={handleToggleCheckbox}
      >
        {text}
      </label>
    </div>
  )
}