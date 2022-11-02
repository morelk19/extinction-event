let dinoList1 = document.querySelectorAll("#ordered-dinos li");

function olStrike(){
    for(let i =0; i<dinoList1.length; i++){
        dinoList1[i].addEventListener("click", function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = 'line-through';
        })
    }
}

olStrike();

let dinoList2Click = document.querySelector('#unordered-dinos');

dinoList2Click.addEventListener("click", function(event){
    let listItem = event.target;
    console.log(listItem.innerText);
    listItem.style.opacity = '0';

})

let dinoList2 = document.querySelectorAll("#unordered-dinos li");

let dinoList3 = document.querySelectorAll("#row img");

function imgCollapse(){
    for(let i =0; i<dinoList3.length; i++){
        dinoList3[i].addEventListener("click", function(){
            console.log(dinoList3[i].innerText);
            dinoList3[i].style.width = '0px';
        })
    }
}
imgCollapse();

let destroy = document.querySelector("#destroy-all");

destroy.addEventListener("click", function(){
    for(const dinos of dinoList1){
        dinos.style.textDecoration = 'line-through';
    }
    for(const dinos of dinoList2){
        dinos.style.opacity = '0';
    }
    for(const dinos of dinoList3){
        dinos.style.width = '0px';
    }
});