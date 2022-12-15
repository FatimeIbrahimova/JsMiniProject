const navList = document.querySelector(".nav-list")
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        data.forEach(menu => {
            const li = document.createElement("li");
            navList.appendChild(li);
            li.innerText = menu;
        })
    }
    )

/* Navbar Scroll*/
// window.addEventListener("scroll", () => {
//     const nav = document.querySelector(".naw2");
//     const scrollValue = window.scrollY;
//     console.log(scrollValue);
//     if (scrollValue < 150) {
//         nav.classList.remove("nav-scroll");
//     } else {
//         nav.classList.add("nav-scroll");
//     }
// });

/*Back to Top */
const upIcon = document.querySelector(".fa-arrow-up");
upIcon.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
)

/*Desc and Comments*/
const btnProductDesc=document.querySelector(".product-desc");
const btnReview=document.querySelector(".review");
const content=document.querySelector(".content");
const comments=document.querySelector(".comments");
btnProductDesc.addEventListener("click",(e)=>{
e.preventDefault();
    if(content.style.display="none"){
        content.style.display="block";
        comments.style.display="none";
        btnProductDesc.classList.add("active");
        btnReview.classList.remove("active");
    } 
})
btnReview.addEventListener("click",(e)=>{
    console.log("click");
    e.preventDefault();
    if(comments.style.display="none"){
        comments.style.display="block";
        btnReview.classList.add("active");
        btnProductDesc.classList.remove("active");
        content.style.display="none";
    }
})
/*increase count */

const iconUp=document.querySelector(".fa-chevron-up");
const number=document.querySelector(".number");
const iconDown=document.querySelector(".fa-chevron-down");
let count=0;
iconUp.addEventListener("click",()=>{
    count++;
    number.innerText=count;
})
iconDown.addEventListener("click",()=>{
    if(number<=1){
        count=0;
        number.innerText=count; 
    }
    else{
        count--;
        number.innerText=count;
    }
})


