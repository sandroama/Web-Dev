let person ={
    years: 25,
    name: "jane",
    Skills:['html','css']
};
console.log(person.name + " " + person.Skills)

function Bellboy(name,age,hasworkperm,lang){
    this.name = name;
    this.age=age;
    this.hasworkperm=hasworkperm;
    this.lang=lang;
}


// Initialise Object
let Bellboy1 = new Bellboy("s",12,True,['ENG']);