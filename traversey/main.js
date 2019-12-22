const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});






const a = document.querySelector('body');
const b = document.querySelector('.button');
b.addEventListener('click', () => {
    console.log(`jatin ${1+2}`);   //template string
});
console.log();
function sum(id) {
  return id;
}
const getUser = (id) =>{
return id;
}
people.map((person) => {
  console.log();
})
axios.get('/api/user')
  .then(res => console.log(res.data))
  .catch(err => console.log(err));


                                            //express server
  const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  res.send('my user');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Running On Port $(PORT)`));