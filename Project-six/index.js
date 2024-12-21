let con = document.querySelector(".container")
let love = document.querySelector("i")
let add = document.querySelector(".add")
let remove = document.querySelector(".remove")



add.addEventListener("click", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"

})

remove.addEventListener("click", function(){
     love.style.transform = "translate(-50%, -50%) scale(0)"
})