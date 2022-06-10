import { log } from 'console';
import { table } from 'console';
import pkg from 'node-emoji';

//creating a class
class Fruit {
    constructor(name, price, rating) {
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}

const market = {};
market.Fruit1 = new Fruit("Apple", "Rs 80/kg", "3" + pkg.emoji.star);
market.Fruit2 = new Fruit("Pomogranate", "Rs 80/kg", "5" + pkg.emoji.star);
market.Fruit3 = new Fruit("Banana", "Rs 80/kg", "2" + pkg.emoji.star);
market.Fruit4 = new Fruit("Orange", "Rs 80/kg", "4" + pkg.emoji.star);

log("Generating table....\n");
table(market);