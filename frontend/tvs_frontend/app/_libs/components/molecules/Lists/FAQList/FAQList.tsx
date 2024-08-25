import FaqJsonLd from "@/_libs/components/atoms/texts/FaqJsonLd/FaqJsonLd";
import FAQText from "@/_libs/components/atoms/texts/FAQText/FAQText";
import { FAQTextType } from "@/_libs/components/atoms/texts/FAQText/FAQText.types";
import styles from "./FAQList.module.scss";
import { FAQListType } from "./FAQList.types";

const FAQList = (props: FAQListType) => {
  const {faqItems} = props;

  return (
    <>
      <dl className={styles['faq']}>
        {faqItems.map((faqItem: FAQTextType, key: number) => (
          <div key={key} className={styles['faq__item']}>
            <FAQText
              question={faqItem.question}
              answer={faqItem.answer}
            />
          </div>
        ))}
      </dl>
      <FaqJsonLd faqItems={faqItems} />
    </>
  )
}

export default FAQList;