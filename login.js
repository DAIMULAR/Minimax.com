function validate(){
    var username =document.getElementById("userename").value;
    var password =document.getElementById("password").value;
    if(username == "admin" && password == "user"){
        console.log("Yes")
    }else{
        console.log("No")
    }
}