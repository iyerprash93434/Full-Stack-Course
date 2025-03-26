const bookTitleEl = document.getElementsByClassName("book fiction");
console.log(bookTitleEl);

const nonFctionEl = document.getElementById("nonFictionSection");
console.log(nonFctionEl);

const nonFictionBookEl = document.getElementsByClassName("book non-fiction");
console.log(nonFictionBookEl);

const fictionsArr = Array.from(nonFictionBookEl);
console.log(fictionsArr);


const nonFictionBookTitle = fictionsArr.map((el) => el.innerHTML);
console.log(nonFictionBookTitle);
 