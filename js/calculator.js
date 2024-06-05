let oprand = (number)=>{
    document.querySelector("#resultBox").value+=number;
}
let operators = (po)=>{
    document.querySelector("#resultBox").value+=op;
}
let calculation= ()=>{
    let data = document.querySelector("#resultBox").value
    let result = eval(data);
    document.querySelector("#resultBox").value = number;
}
let clearAll =()=>{
        document.querySelector("#resultBox").value="";
}