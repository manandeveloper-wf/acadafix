import { ReactNode } from "react";
import FaqItem from "./FaqItem";

type Faq = {
  title: string;
  content: ReactNode;
  icon?: string;
};

type Props = {
  faqs: Faq[];
};

export default function FaqGroup({ faqs }: Props) {
  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          title={faq.title}
          icon={faq.icon}
          content={faq.content}
          number={`0${index + 1}`}
        />
      ))}
    </div>
  );
}