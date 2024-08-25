// The type for a set of dt and dd in an FAQ.
export type FaqItemProps = {
  id?: string;
  question: string;
  answer: string;
};

export type FaqJsonLdProps = {
  faqItems: FaqItemProps[];
};

const FaqJsonLd: React.FC<FaqJsonLdProps> = ({ faqItems }) => {
  // Generate JSON-LD data based on the FAQ data
  const generateJsonLd = (faqItems: FaqItemProps[]) => {
    const jsonData = {
      "@context": "http://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    return JSON.stringify(jsonData);
  };

  // Generate JSON-LD data
  const jsonLdData = generateJsonLd(faqItems);

  // Insert JSON-LD data
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdData }}
    />
  );
};

export default FaqJsonLd;
