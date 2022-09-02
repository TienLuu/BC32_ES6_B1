// DOM
const dom = (id) => document.querySelector(id);

// Number rounded to digits after the comma
const roundToTwo = (num) => +(Math.round(num + "e+2") + "e-2");

// GPA
const calcGPA = (...scores) => {
   return roundToTwo(
      scores.reduce((result, value) => result + value, 0) / scores.length
   );
};

// UI
const display = (id, value) => {
   dom(id).innerHTML = value;
};

// Event 1
dom("#btnKhoi1").addEventListener("click", function () {
   const mathScore = +dom("#inpToan").value;
   const physicsScore = +dom("#inpLy").value;
   const chemistryScore = +dom("#inpHoa").value;

   const gpa = calcGPA(mathScore, physicsScore, chemistryScore);

   display("#tbKhoi1", gpa);
});

// Event 2
dom("#btnKhoi2").addEventListener("click", function () {
   const literaryScore = +dom("#inpVan").value;
   const historyScore = +dom("#inpSu").value;
   const geographicScore = +dom("#inpDia").value;
   const englishScore = +dom("#inpEnglish").value;

   const gpa = calcGPA(
      literaryScore,
      historyScore,
      geographicScore,
      englishScore
   );

   display("#tbKhoi2", gpa);
});
