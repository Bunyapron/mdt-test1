window.onload = pageLoad;

function pageLoad() {
    let myForm = document.getElementById("myForm")
    myForm.onsubmit = validateForm
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    let password = document.forms["myForm"]["password"].value
    let repassword = document.forms["myForm"]["repassword"].value
    console.log(password);
    console.log(repassword);
    if (repassword != password) {
        alert("Password and Retype Password are not match!!")
        return false;
    } else {
        alert("OK!!")
        return true;
    }
}