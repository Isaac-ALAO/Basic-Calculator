function display(val){
    document.getElementById('btndisplay').value=val;
}
function showval(val){
    document.getElementById('btndisplay').value+=val;
}
function operator(val){
    document.getElementById('btndisplay').value+=val;
}
function equals(){
    try{
        display(eval(document.getElementById('btndisplay').value))
    }
    catch(e){
        display('Error')
    }
}
const ans = document.getElementById('btndisplay');
function Clear(){
    if(ans>=0){
        display('')
    }
    else{
        display('')
    }
}
function back() {
    var value = document.getElementById("btndisplay").value;
    document.getElementById("btndisplay").value = value.substr(0, value.length - 1);
}