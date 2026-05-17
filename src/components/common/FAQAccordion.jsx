import { useId, useState } from 'react';
import Icon from '../Icon.jsx';

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="faq-item__trigger"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <Icon name="ChevronDown" size={24} />
            </button>
            <div
              aria-labelledby={buttonId}
              className="faq-item__panel"
              id={panelId}
              role="region"
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
