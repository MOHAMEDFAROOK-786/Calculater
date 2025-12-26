let total="";
function but1(){
total+="1"
document.getElementById("res").innerText=total;
}
function but2(){
total+="2"
document.getElementById("res").innerText=total;
}
function but3(){
total+="3"
document.getElementById("res").innerText=total;
}
function but4(){
total+="4"
document.getElementById("res").innerText=total;
}
function but5(){
total+="5"
document.getElementById("res").innerText=total;
}
function but6(){
total+="6"
document.getElementById("res").innerText=total;
}
function but7(){
total+="7"
document.getElementById("res").innerText=total;
}
function but8(){
total+="8"
document.getElementById("res").innerText=total;
}
function but9(){
total+="9"
document.getElementById("res").innerText=total;
}
function but0(){
total+="0"
document.getElementById("res").innerText=total;
}
function butDot(){
total+="."
document.getElementById("res").innerText=total;
}

function butAdd(){
total+="+"
document.getElementById("res").innerText=total;
}
function butSub(){
total+="-"
document.getElementById("res").innerText=total;
}
function butMul(){
total+="*"
document.getElementById("res").innerText=total;
}
function butDiv(){
total+="/"
document.getElementById("res").innerText=total;
}
function butOpen(){
total+="("
document.getElementById("res").innerText=total;
}
function butClose(){
total+=")"
document.getElementById("res").innerText=total;
}

function butEqual(){
let result=eval(total);
total=result.toString();
document.getElementById("res").innerText=result;
}
function butClear(){
total="";
document.getElementById("res").innerText="";
}
function butDel(){
    const len=total.length;
total=total.slice(0,len-1);
document.getElementById("res").innerText=total;
}

