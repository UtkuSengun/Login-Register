
let txtemail = document.querySelector(".txtemail");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

if(window.localStorage){
    // console.log("supported...");

    localStorage.setItem("email","utkusengunn@gmail.com")
    localStorage.setItem("pass","@41")

    let user = localStorage.getItem("email");
    let pass = localStorage.getItem("pass");

    let message = document.querySelector(".message");

    submit.addEventListener("click", ()=>{
        if (user == txtemail.value && pass == txtpass.value){
                message.innerHTML="login Successfull...";
        }else{
message.innerHTML="username ou password is Invalid!!";
        }
    })
}
else{
    console.log("not supported...!");
}

function kayit(){
    if (isim.value==" " && soyisim.value==" " && mail.value==" " && cinsiyet.value==" "
    && TelNo.value==" " && sifre.value==" " )
    {
        
        document.getElementById("pa").innerHTML="do not leave empty space.";
    }
    else{
        document.getElementById("pa").innerHTML="To Login.";
    }
}