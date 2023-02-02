let car1 = {
    name: 'polo',
    company: 'volkswagen', 
}

let car2 = {
    name: 'i20',
    company: 'hyundai',
}

let car3 = {
    name: 'swift sport',
    company: 'maruti',
}

let printDetails = function(engine, country){
    console.log(this.name + " " + engine+ " "+country);
}

printDetails.call(car2, "crdi", "south korea");

printDetails.apply(car1, ["tsi", "germany"]);

let newfun = printDetails.bind(car3, "boosterjet", "japan");
newfun();