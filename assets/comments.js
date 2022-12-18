const name = document.querySelector("#name");
const errName = document.querySelector(".err-name");
const email = document.querySelector("#mail");
const errEmail = document.querySelector(".err-email");


let commentName = document.querySelector("#name").value;
let commentEmail = document.querySelector("#mail").value;
let comment = document.querySelector("#textarea").value;
let submit = document.querySelector("#submit_comment");

submit.addEventListener("click", () => {
    let data = {
        "name": commentName,
        "email": commentEmail,
        "comment": comment,
    }
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then(json => console.log(json));
});
//username keyup event
name.addEventListener("keyup", (e) => {
    CheckNameValidations(e.target.value);
    e.preventDefault();
});

//email keyup event
email.addEventListener("keyup", (e) => {
    CheckEmailValidations(e.target.value);
    e.preventDefault();
})
//check username Validation
function CheckNameValidations(userNameValue) {
    if (userNameValue.length < 3 || userNameValue.trim() === "") {
        errName.innerText = "Invalid Input!";
        userNameValue.style.borderColor = "red";
        return false;
    }
    else {
        errName.innerText = "";
        name.style.borderColor = "green";
        return true;
    }
}
//check email validation
function CheckEmailValidations(userEmailValue) {
    let regex = /^([A-Za-z]+(?:\.[A-Za-z]+)*)\.\d+@[^\s@]/;
    if (userEmailValue.value.match(regex)) {
        errorEmail.innerText = "your email is valid";
        email.style.borderColor = "green";
        return true;
    }
    else {
        errorEmail.innerText = "your email is invalid";
        email.style.borderColor = "red";
        return false;
    }
}

// function postData(user) {
//     fetch("http://localhost:3000/users/", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json,text/plain,*/*',
//         },
//         body: JSON.stringify(user)
//     })
//         .then((res) => res.json())
//         .then(json => console.log(json));
// }
// submit.addEventListener("click", () => {
//     console.log("clicked");
//     const data = {
//         id: Math.floor(Math.random() * 100),
//         name: name.value,
//         surname: surname.value,
//         title: title.value,
//         story: story.value
//     }
//     postData(data)
// })
