const userName = document.querySelector("header #userName")
const tokensInfo = document.querySelector("center .texts #tokens")
const tokensClickInfo = document.querySelector("center .texts #tokensPerClick")
const tokensSecondInfo = document.querySelector("center .texts #tokensPerSecond")
const RedmiBuy = document.querySelector("center .shop article #RedmiBuy")

let tokens = 0;
let tokensPerClick = 1;
let tokensPerSecond = 0;


let Pixel5Cost = 20;
let Pixel6Cost = 500;
let Pixel7Cost = 5000;
let GoogleCost = 500000;


function name() {
    if ("userName" in localStorage) {
        userName.innerText = "Hey," + localStorage.getItem("userName")
    }
    else {
        let nm = prompt("Enter your name here...")
        console.log(nm)
        userName.innerText = "Hey, " + nm;
        localStorage.setItem("userName", nm);
    }
}

function clicker() {
    tokens = tokens + tokensPerClick;
    tokensInfo.innerText = tokens
}

setInterval(function(){
    tokens = tokens + tokensPerSecond;
    tokensInfo.innerText = tokens; 
}, 1000)

function Pixel5Buy(){
    if(tokens >= Pixel5Cost){
    tokens = tokens - Pixel5Cost;
    tokensInfo.innerText = tokens;
    tokensPerClick = tokensPerClick + 10;
    tokensClickInfo.innerText = tokensPerClick;
    }
    else {
        alert("You need more Android tokens...")
    }
}

function Pixel6Buy(){
    if(tokens >= Pixel6Cost){
    tokens = tokens - Pixel6Cost;
    tokensInfo.innerText = tokens;
    tokensPerSecond = tokensPerSecond + 10;
    tokensSecondInfo.innerText = tokensPerSecond;
    }
    else {
        alert("You need more Android tokens...")
    }
}

function Pixel7Buy(){
    if(tokens >= Pixel7Cost){
    tokens = tokens - Pixel7Cost;
    tokensInfo.innerText = tokens;
    tokensPerClick = tokensPerClick + 1000;
    tokensPerSecond = tokensPerSecond + 1000;
    tokensClickInfo.innerText = tokensPerClick;
    tokensSecondInfo.innerText = tokensPerSecond;
    }
    else {
        alert("You need more Android tokens...")
    }
}

function GoogleBuy(){
    if(tokens >= GoogleCost){
    tokens = tokens - GoogleCost;
    tokensInfo.innerText = tokens;
    tokensPerSecond = tokensPerSecond + 10000;
    tokensSecondInfo.innerText = tokensPerSecond;
    }
    else {
        alert("You need more Android tokens...")
    }
}
