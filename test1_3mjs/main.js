//1

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/ ;
    return regExp.test(str);
}

console.log(containsOnlyDigits("123456"));
console.log(containsOnlyDigits("123t456"));



//2

let secondsPassed = 0;

const interval = setInterval (()=> {
    secondsPassed++
    console.log(`Прошла секунда(${secondsPassed})`);
}, 1000)

//3

const count = () => {
    let i =1;
    const interval = setInterval(()=> {
        if (i< 10 ){
            console.log(i);
            i++
        }else {
            clearInterval(interval);
        }
    },1000);
}
count();

//4

const block = document.querySelector(".block");

block.addEventListener("click", function(){
    if(block.classList.contains("blue")){
        block.style.backgroundColor = "";
        block.classList.remove("blue");
    }else{
        block.style.backgroundColor = "lightskyblue";
        block.classList.add("blue");
    }
});

//5

