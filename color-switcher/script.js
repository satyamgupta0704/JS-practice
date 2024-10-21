// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// buttons.forEach(function(button){
//     button.addEventListener("click", function(e){
//         if(e.target.id === "pink"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "white"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "blue"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "yellow"){
//             body.style.backgroundColor=e.target.id;
//         }
//         if(e.target.id === "purple"){
//             body.style.backgroundColor=e.target.id;
//         }
//     })
// })

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        switch(e.target.id) {
            case "pink":
            case "white":
            case "blue":
            case "yellow":
            case "purple":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                // Optional: handle cases where the color is not matched
                break;
        }
    });
});