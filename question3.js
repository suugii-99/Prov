
// 3. Filtrera namn (2p)
// Skriv en funktion, filter names, som tar en array med namn och en bokstav
// som input och returnerar en ny array med de namn som börjar med bokstaven.
// funktionen behöver bara hantera en stor bokstav som input

// Exempel:
// filterNames(["John", "Mary", "Peter", "Jane"], "J") // Returnerar ["John", "Jane"]
// filterNames(["John", "Mary", "Peter", "Jane"], "P") // Returnerar ["Peter"]
// filterNames(["John", "Mary", "Peter", "Jane"], "X") // Returnerar []

function filterNames(names, letter) {
const name = ["John", "Mary", "Peter", "Jane"]

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));

console.log(filterItems(name, "J"));
}

    // Din kod här
  }
  
  module.exports = filterNames;
  