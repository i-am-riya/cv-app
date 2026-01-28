import React from "react";

function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <>
      <div className="accordion">
        <button type="button" className="w-full flex flex-row justify-between text-amber-800 font-bold my-4 text-xl uppercase" onClick={onToggle}>
          <div className="">{title}</div>
          <div className="">{isOpen ? "-" : "+"}</div>
        </button>

        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    </>
  );
}

export default AccordionItem;
