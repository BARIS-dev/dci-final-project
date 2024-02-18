import "./tablistComponent.css";
import { useState, useRef } from "react";
import { FAQsTab } from "./faqTab/faqTab.jsx";
import { ProductDetailTab } from "./productDetailTab/productDetailTab.jsx";
import { RatingReviewsTab } from "./rating&reviewsTab/ratingReviewsTab.jsx";

export function TabListComponent() {
  const items = [
    {
      title: "Details zum Produkt",
      content: <ProductDetailTab />,
    },
    {
      title: "Bewertungen",
      content: <RatingReviewsTab />,
    },
    {
      title: "FAQs",
      content: <FAQsTab />,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const tabRefs = useRef([]);

  const tabChangeHandler = (index) => {
    setSelectedTab(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <div className="tab-list">
      <div className="list-items-container">
        <div className="list-item-title">
          {items.map((item, index) => (
            <button
              key={index}
              ref={(i) => (tabRefs.current[index] = i)}
              onClick={() => tabChangeHandler(index)}
              className={selectedTab === index ? "selected" : ""}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="list-item-content">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? "" : "hidden"}`}
              key={index}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
