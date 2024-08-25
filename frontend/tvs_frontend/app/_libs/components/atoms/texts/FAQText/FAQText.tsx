'use client';

import parse from "html-react-parser";
import { useState } from "react";
import styles from "./FAQText.module.scss";
import { FAQTextType } from "./FAQText.types";

const FAQText = (props: FAQTextType) => {
  const {question, answer} = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <dt className={`${styles['question-text']} ${isOpen ? " " + styles['question-text--open'] : ''}`} onClick={handleToggleOpen}>
        <span className={styles['qa-toggle-button']} ></span>
          {parse(question)}
      </dt>
      <dd className={`${styles['answer-text']} ${isOpen ? " " + styles['answer-text--open'] : 'x'}`}>
        {parse(answer)}
      </dd>
    </>
  )
}

export default FAQText;