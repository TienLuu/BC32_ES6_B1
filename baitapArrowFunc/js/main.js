// DOM
function domByQuery(id) {
   return document.querySelector(id);
}

function domByQueryAll(id) {
   return document.querySelectorAll(id);
}

// Mảng màu
const colorList = [
   "pallet",
   "viridian",
   "pewter",
   "cerulean",
   "vermillion",
   "lavender",
   "celadon",
   "saffron",
   "fuschia",
   "cinnabar",
];

// Hiển thị
const display = () => {
   let html = colorList.reduce((total, item, index) => {
      return index === 0
         ? total + `<button class="color-button ${item} active"></button>`
         : total + `<button class="color-button ${item}"></button>`;
   }, "");

   domByQuery("#colorContainer").innerHTML = html;
};

// LOAD danh sách ô màu
display();

// DOM đến tất cả ô màu
let colorEl = domByQueryAll(".color-button");

// GẮN sự kiện click cho tất cả ô màu
const colorPicker = () => {
   for (let i = 0; i < colorEl.length; i++) {
      colorEl[i].addEventListener("click", function () {
         changeColor(colorList[i], i);
      });
   }
};

// Thay đổi hiệu ứng active
const colorPickerAni = (index) => {
   for (let i = 0; i < colorEl.length; i++) {
      colorEl[i].classList.remove("active");
   }
   colorEl[index].classList.add("active");
};

// Thay đổi màu
const changeColor = (colorName, index) => {
   colorPickerAni(index);
   domByQuery("#house").className = `house ${colorName}`;
};

// Thực thi sự kiện cho tất cả button
colorPicker();
