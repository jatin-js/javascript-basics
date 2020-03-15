const counters = document.querySelectorAll(".counter");
const speed = 200; // The lower the slower

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target"); //Unary plus to conver into number
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  // counter.previousSibling.addEventListener("click", () => {
  //   alert(1);
  // });
  updateCount();
});

// const container = document.querySelector(".container");
// // icons.addEventListener("click", () => {
// //   alert(1);
// // });
// const divs = container.childNodes;
// console.log(divs);

// divs.forEach(div => {
//   const c = div.childNodes;
//   c[7].addEventListener("click", () => {
//     console.log(this.previousSibling);
//   });
// });
// icons.forEach(icon => {
//   icon.addEventListener("click", e => {
//     e.target.nextElementSibling.innerText =
//       +e.target.nextElementSibling.innerText + 1;
//   });
// });
const incs = document.querySelectorAll(".inc");
const decs = document.querySelectorAll(".dec");
incs.forEach(inc => {
  inc.addEventListener("click", e => {
    // console.log(e.target);
    const counter = e.target.parentElement.childNodes[3];
    counter.innerText = +counter.innerText + 1;
  });
});
decs.forEach(dec => {
  dec.addEventListener("click", e => {
    // console.log(e.target);
    const counter = e.target.parentElement.childNodes[3];
    if (counter.innerText == 0) alert("Not Allowed");
    else counter.innerText = +counter.innerText - 1;
  });
});
