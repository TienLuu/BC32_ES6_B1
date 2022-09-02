// DOM
const domByQuery = (id) => document.querySelector(id);

// DOM heading
const headingEl = domByQuery(".heading");

const jumpAnimation = (...chars) => {
   return chars.reduce((result, item) => {
      return (
         result +
         `
        <span>${item}</span>
    `
      );
   }, "");
};

// UI
domByQuery(".heading").innerHTML = jumpAnimation(...headingEl.innerText);
