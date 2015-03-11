/*------------------------------------------------------------------------------------------

Reich, Kingdom, Царство         - Tiere, Animals, Животные (Animalia)

Klasse, Class, Класс            - Säugetiere, Mammals, Млекопитающие (Mammalia)

Ordung, Order, Отряд            - Raubtiere, Predators, Хищные (Carnivora)

Überfamilie, Suborder, Подотряд - Hundeartige, dog-like, Псообразные (Canoidea)
Überfamilie, Suborder, Подотряд - Katzenartige, cat-like, Кошкообразные  (Feloidea)

Familie, Family, Семейство      - Hunde, Dogs, Псовые (Canidae)

Art, Species, Род               - Wolf, Wolves, Волки (Canis lupus)

Unterart, Subspecies,           - Haushund, Domestic Dog, (Canis lupus familiaris)

Rasse, Breed, Порода            - Deutscher Schäferhund, German Shepherd, Немецкая овчарка

Schäferhund, Shepherd, Овчарка  - Hermann, Hermann, Германн

------------------------------------------------------------------------------------------


Javascript:
-----------
*/
console.clear();

function Animalia() {

}
Animalia.prototype = {
 kingdom: "animals"
}



function Mammalia() {

}
Mammalia.prototype = new Animalia();
Mammalia.prototype.class = "mammals";
Mammalia.prototype.constructor = Mammalia;

console.log(new Mammalia());



function Carnivora() {

}
Carnivora.prototype = new Mammalia();
Carnivora.prototype.order = "predators";
Carnivora.prototype.constructor = Carnivora;

console.log(new Carnivora());

/*
 * your code here ...
 *
 */

//console.log(new Shepherd());

// end