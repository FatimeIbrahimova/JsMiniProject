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
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".naw2");
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue < 150) {
        nav.classList.remove("nav-scroll");
    } else {
        nav.classList.add("nav-scroll");
    }
});

/*Back to Top */
const upIcon = document.querySelector(".fa-arrow-up");
upIcon.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
)