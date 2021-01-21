function runCode(){
    let input = document.getElementById("code").value;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let banana = "";
    for(let i of input){
        
        let variable = alphabet.indexOf(i);
        variable -= 3;
        if(variable < 0){
             variable += 26;
        }
        
        banana = banana+alphabet[variable];
        //document.getElementById("finall").innerHTML=banana;​
    }
    console.log(banana);
    //document.getElementById("finall") = banana;​
    document.getElementById("codefinal").innerHTML = banana;
}

