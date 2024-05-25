alert("გსურთ მოძებნოთ სასურველი პროდუქტი?");


let product = [
    {
    title: "phone",
    raiting: 7.8,
    price: 400,
    Year: 2024,
    sale: "+",
    categories:"phones",
},
{
    title: "samsung s23",
    raiting: 8.9,
    price: 1650,
    Year: 2023,
    sale: "no",
    categories: "home",
},
{
    title: "TV",
    raiting: 8.8,
    price: 600,
    Year: 2021,
    sale: "no",
    categories:"home",
},
{
    title: "iphone11",
    raiting: 10.0,
    price: 550,
    Year: 2019,
    sale: "no",
    categories:"phones",
},
{
     title: "dinamic",
    raiting: 7.9,
    price: 250,
    Year: 2021,
    sale: "no",
    categories:"home",

},


{
    title: "Watch",
    raiting: 8.9,
    price: 450,
    Year: 2020,
    sale: "no",
    categories:"home",

},
{
    title: "PlayStation",
    raiting: 9.9,
    price: 1500,
    Year: 2022,
    sale: "+",
    categories:"home",},

{
    title: "wireless speaker",
    raiting: 9.6,
    price: 750,
    Year: 2020,
    sale: "+",
    categories:"home",
},
]
console.log(product);
let userHcoose = prompt ("შემოიყვანე 1 , 2, 3, 4, 5,");
if (userHcoose === "1"){
    prompt("რამდენი ლარიდან გაინტერესებთ პროდუცტები?")
}else if (userHcoose ==="2"){
    prompt("რეიტინგის მიხედვით?")
}
else if(userHcoose === "3"){
    prompt("გამოშვების წელი")
}
else if(userHcoose ==="4"){
    prompt("ფასდაკლებული პროდუქტები")
}
else if(userHcoose === "5"){
    prompt("რომელი კატეგორია გაინტერესებთ?")
}
    else {
    prompt ("ყველა");
}
let filterproducts = product.filter(product => product.price >300)
console.log(filterproducts);

let filterproducts1 = product.filter(product => product.raiting >8.8)
console.log(filterproducts1);
 
let filterproducts2 = product.filter(product => product.Year >2020)
 console.log(filterproducts2);

 let filterproducts3 = product.filter(product => product. sale === "+" )
 console.log(filterproducts3);
 

 let filterproducts4 = product.filter(product => product. categories ==="home")
 console.log(filterproducts3);
 
