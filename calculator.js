let results = document.getElementById("inputext");

let calculate=(number)=>{
    results.value+=number;
}

let Results=()=>{
    try{
        results.value=eval(results.value)
    }
    catch(err){
        alert("wrong input");
    }
}

function Clear(){
    results.value= " ";
}
