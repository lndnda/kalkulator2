
// insert angka ke textview
function insert(num){
    document.form.textarea.value = document.form.textarea.value + num; 

}

//Fungsi Hitung
function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

//Clean
function clean(){
    document.form.textarea.value = "";
}

//Delete
function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1);
}

function ValidateInput(value){
    let lest_input = input.slice(-1);
    let operators = ["+","-","*","+"];

    if (value == "."&& lest_input == "."){
        return false;
    }
    if (operators.includes(value)){
        if (operators.includes(last_input)){
        return false;
    } else {
        return true;
    }
}
    
}