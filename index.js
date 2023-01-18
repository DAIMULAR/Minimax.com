

function SendMail(){
    var params ={
        from:document.getElementById("name").value,
        email: document.getElementById("email").value,
        message : document.getElementById("message").value,
        phone_no:document.getElementById("phone").value
    }
    emailjs.send("service_jw4d5az","template_3u9etjb", params).then(function (res){
        alert("Message sent successfully!!");
    })
}