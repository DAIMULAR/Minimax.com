function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
    

 emailjs
   .send("service_jw4d5az","template_j82x8mh",params)
   .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        console.log(res);

        alert("Muchas gracious!!Message sent successfully!");
    }
)
.catch(err=>console.log(err));



}
