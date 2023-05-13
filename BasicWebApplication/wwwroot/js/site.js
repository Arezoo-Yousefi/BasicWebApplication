// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
function redColor() {
    let adeleName = Array.from(document.getElementsByClassName("adele"));
    console.log(adeleName);
    adeleName.forEach((element) => {
        element.style.color = "red";
    })
}
function blackColor() {
    let adeleName = Array.from(document.getElementsByClassName("adele"));
    adeleName.forEach(ele => ele.style.color = "black");
}
// Write your Javascript code.
