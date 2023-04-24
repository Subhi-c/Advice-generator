const qoutesEl = document.getElementById("qoutes");
const btnEl = document.getElementById("qoute-btn");
const idNumber = document.getElementById("idNo");
//let qoute = "";
const generateqoute = async () => {
  const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    console.log(data)
    qoutesEl.innerText = data.slip.advice;
    idNumber.innerText = data.slip.id
};
// function generateqoute() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {

//       qoute = data.slip.advice;
//       qoutesEl.innerText = qoute;
//     });
// }
//btnEl.addEventListener("click", generateqoute);
generateqoute();