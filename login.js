function saveData(){

    console.log("Save ddata called")
    let name=document.getElementById("username").value
    let password=document.getElementById("password").value
let userdetailsFromLocalStorage=JSON.parse(localStorage.getItem("userdetails"))
if(userdetailsFromLocalStorage.some((v)=>{
return v.name==name && v.password1==password
})){
alert("Login Successfully!!...")

let curr_user=userdetailsFromLocalStorage.filter((v)=>{
    return v.name==name && v.password1==password
})[0]

localStorage.setItem("name",curr_user.name);
localStorage.setItem("email",curr_user.email);
 console.log("Called")
location.assign("./index.html")

}
else{
alert("Login Failed, Try again")

}


}