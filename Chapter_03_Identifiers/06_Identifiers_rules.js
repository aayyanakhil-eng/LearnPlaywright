var v = 10;
var a = 5;
var 123 = 10; // Invalid identifier, cannot start with a number 

var _name = "John"; // Valid identifier, can start with an underscore
var $age = 30; // Valid identifier, can start with a dollar sign
var firstName = "Alice"; // Valid identifier, can contain letters and numbers
var last-name = "Smith"; // Invalid identifier, cannot contain hyphens
var class = "Math"; // Invalid identifier, cannot use reserved keywords

var Akhil123 = "Hello"; // Valid identifier, can contain letters and numbers
var 123Akhil = "Hello"; // Invalid identifier, cannot start with a number
var _123Akhil = "Hello"; // Valid identifier, can start with an underscore
var $123Akhil = "Hello"; // Valid identifier, can start with a dollar sign
var Akhil_123 = "Hello"; // Valid identifier, can contain letters, numbers, and underscores
var Akhil$123 = "Hello"; // Valid identifier, can contain letters, numbers, and dollar signs
var Akhil-123 = "Hello"; // Invalid identifier, cannot contain hyphens