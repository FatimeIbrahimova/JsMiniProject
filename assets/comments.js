


function postData(user) {
    fetch("http://localhost:3000/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json,text/plain,*/*',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then(json => console.log(json));
}
submit.addEventListener("click", () => {
    console.log("clicked");
    const data = {
        id: Math.floor(Math.random() * 100),
        name: name.value,
        surname: surname.value,
        title: title.value,
        story: story.value
    }
    postData(data)
})
