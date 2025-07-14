/*1. In the following shopping cart add, remove, and edit items
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey]
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

//sol.1
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// for(i=shoppingCart.length-1;i>=0;i--){
//     shoppingCart[i+1]=shoppingCart[i];
//     if(i===0){
//         shoppingCart[i]='Meat'
//     }
// }
// console.log(shoppingCart)

//sol.2nd method
shoppingCart.unshift("Meat");
console.log(shoppingCart);




