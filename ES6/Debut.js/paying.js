function whosPaying(names){
    var numberofpeople = names.lenght;
    var randomperson = Math.random() * numberofpeople;
    var randompersonName = names[randomperson];

    return randompersonName +" is going to buy lunch :)))"
}