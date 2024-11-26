
// 4c Hämta data med Destructuring (2p)
// Skriva en funktion getBookInfo som tar emot ett bokobjekt och
// returnerar en sträng med titel och författare i formatet:
// "Titel: `title`, Författare: `author`".
// Använd destructuring för att plocka ut egenskaperna title och author.

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  
  function getBookInfo(book) {
const getBookInfo = {
    title: "To kill a Mockingbird",
    author: "Harper Lee"
};

getBookInfo = {...getBookInfo, ...book};
console.log(getBookInfo)
    // Din kod här
  }
  
  // console.log(getBookInfo(book));
  // Output: "Titel: To Kill a Mockingbird, Författare: Harper Lee"
  
  exports = getBookInfo;
  