function sendEmail() {

    var temParamsx = {
        to_name: "webdesk inc",
        from_name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        message: "phone : " + document.getElementById("Phone_no").value + " email : " + document.getElementById("email_id").value + " Message : " + document.getElementById("msg").value,
    };



    emailjs.send('service_u3shbvj', 'template_pw0963s', temParamsx, 'user_tddYoZg4Dc7m2gTSX0C0C')
        .then(function () {
            console.log('SUCCESS!');
        }, function (error) {
            console.log('FAILED...', error);
        });


    // console.log(temParamsx);//
    document.getElementById("cntForm").reset();


}

// window.onload = function () {
document.getElementById("cnt-submit-btn").
    addEventListener('click', () => {
        sendEmail();
    })

// }



document.getElementById("get-in-toch-btn").addEventListener('click', () => {
    window.location.href = "contact-us.html";
})

document.getElementById("logoDiv").addEventListener('click', () => {
    window.location.href = "index.html";
})