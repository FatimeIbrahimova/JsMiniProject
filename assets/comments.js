const name=document.querySelector("#name");
const errName=document.querySelector(".err-name");


//username keyup event
name.addEventListener("keyup", (e) => {
    CheckNameValidations(e.target.value);
    e.preventDefault();
});
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
