//Prototypal inheritance

function Book (title, author, pages, year, fiction) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.fiction = fiction;

}

var library = [];

var great_expectations = new Book("Great Expectations", "Charles Dickens", 505, 1861 , true);
var jane_eyre = new Book("Jane Eyre", "Charlotte Bronte", 507, 1847, true);
var between_world = new Book("Between the World and Me", "Ta-Nehisi Coates", 152, 2015, false);


library.push(great_expectations);
library.push(jane_eyre);
library.push(between_world);



jane_eyre.main_char = "Jane Eyre";
great_expectations.language = "English";
between_world.topic = "racism";


Book.prototype.language = "English";

var years_solitude = new Book("One Hundred Years of Solitude", "Gabriel Garcia-Marquez", 457, 1967, true);

console.log(years_solitude);
