const testimonials = [
    {
        name: "Terence",
        photoUrl:  "img/DOVE.jpg",
        text:  "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apples"
        
    },
    {
        name: "Yannick",
        photoUrl:  "img/Love_Dove.jpg",
        text:  "I would also like to say thank you to all your satff. Wow what great sevice, i Loce Apples impressed me on multiple levels"

    },
    {
        name: "Gideon",
        photoUrl:  "img/blue_frog.jpg",
        text:  "Thanks you for making it painless,pleasant and most of all hassle free! I wish i would have thought of it first. The very best"

    }
];

const imgEl = document.querySelector("img");
const testEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl
    testEl.innerText = text
    usernameEl.innerText = name
    idx++
    if(idx === testimonials.lenght){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 10000)
}