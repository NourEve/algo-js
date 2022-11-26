let inputAr = ["Arno Volts","Aurélien Mariaule","Aurore Lemaire","Benjamin Porsont","Céline Verreydt","Corentin Miserque","Dominique Coppée","Edouard de Romrée de Vichenet","Hugo Goorickx","Jofrey Houyoux","Jonathan Manes","Jonathan bajoux","Laura Wilhelmi","Lysie Soyez","Marnie Benalia","Mathilde Cornelis","Milo Bonnet" ,"Nadim El Nakadi","Nathalie Vanden Abeele","Nathalie Goffette","Nour Everaert","Pierre Mauriello","Quentin Bource ","Virginie Dourson"];

/**
 * Create an array with "n" random elements of another array.
 * @param {table} array - The base table.
 * @param {number} n - The length of the new table.
 * @return {table} - New array with "n" random elements.
 */
function pickLearner(array,n) {
    for (let i=0; i < n; i++){
    const random = [...array].sort(() => 0.5 - Math.random());
    return random.slice(0, n);
    }
}
console.log(pickLearner(inputAr, 10));
