let inputAr = ["Arno Volts","Aurélien Mariaule","Aurore Lemaire","Benjamin Porsont","Céline Verreydt","Corentin Miserque","Dominique Coppée","Edouard de Romrée de Vichenet","Hugo Goorickx","Jofrey Houyoux","Jonathan Manes","Jonathan bajoux","Laura Wilhelmi","Lysie Soyez","Marnie Benalia","Mathilde Cornelis","Milo Bonnet" ,"Nadim El Nakadi","Nathalie Vanden Abeele","Nathalie Goffette","Nour Everaert","Pierre Mauriello","Quentin Bource ","Virginie Dourson"];

/*function pickLearner(array) {
        for (let i=0; i < n; i++){
            const map1 = array.map(Math.random()*array.length | 0);
            return map1;
        }
}
console.log(inputAr, 7);*/


function pickLearner(array,n) {
    for (let i=0; i < n; i++){
    const random = [...array].sort(() => 0.5 - Math.random());
    return random.slice(0, n);
    }
}
console.log(pickLearner(inputAr, 10));


/*function pickLearner(array,n) {
    for (let i=0; i < n; i++){
        let random = array[Math.floor(Math.random() * array.lenght)];
        let rValue = array [random];
        return rValue;
    }
}
let rValue = pickLearner(inputAr, 10);
console.log(rValue);*/

/*for (let elem of inputAr) {
    console.log(elem);
}*/


