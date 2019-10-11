// example 1
var website = {
    url: "https://github.com/pnguyen215/",
    getInformation: function () {
        return this.url;
    }
}

var unboundGetInformation = website.getInformation
var boundGetInformation = unboundGetInformation.bind(website)
console.log(boundGetInformation()) // https://github.com/pnguyen215/


// example 2
this.name = "#phuocnguyen";
var card = {
    name: "phuocnguyen",
    getName: function () {
        return this.name;
    }
};

console.log(card.getName()); // phuocnguyen

//It invokes at global scope  
var retrieveName = card.getName;
console.log(retrieveName()); // #phuocnguyen

var boundGetName = retrieveName.bind(card);
console.log(boundGetName()); // phuocnguyen 