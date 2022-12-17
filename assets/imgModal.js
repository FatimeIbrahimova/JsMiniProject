// Get the modal
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function () {
    console.log("img");
    modal.style.display = "block";
    modalImg.src = this.src;
}