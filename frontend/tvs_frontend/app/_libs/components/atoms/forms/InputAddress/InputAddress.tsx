'use client';

import { useState } from "react";
import { InputAddressType } from "./InputAddress.types";

import { InputLabel } from "../InputLabel/InputLabel";
import styles from "./InputAddress.module.scss";

export const InputAddress = (props: InputAddressType) => {
  const {id = "address", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles["input-address"]}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="text" name={name}
        id={id}
        className={`${styles["input-address__field"]}${isActive ? ` ${styles["input_address__field--active"]}` : ""}`}
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