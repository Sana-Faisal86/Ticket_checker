// =====> Comment out according to age and confirm your ticket price: <======
// let age = 2;
// let age = 16;
let age = 30.5;
// let age = 45;
// let age = 75;
console.log("\n\t'Wellcome to the PAF Museum'\t");
console.log(" \n Kidly pay the Ticket price according to your Age: ");
// if else statement :
if (age <= 2) {
    console.log("\n\tFree Entry for babies ");
}
else if (age > 2 && age <= 16) {
    console.log("\n\tEntry ticket price for children is : Rs. 100 ");
}
else if (age > 16 && age <= 30) {
    console.log("\n\tEntry ticket price for Young Adults is : Rs 150 ");
}
else if (age > 30 && age <= 45) {
    console.log("\n\tEntry ticket price for Middle-Aged Adults is : Rs 200 ");
}
else if (age > 45 && age <= 60) {
    console.log("\n\tEntry ticket price for Old-Age Adults is : Rs 250 ");
}
else {
    console.log(" \n Sorry! Invalid Entry ");
}
console.log("\n\t'Thanks for Comming'\t\n");
export {};
