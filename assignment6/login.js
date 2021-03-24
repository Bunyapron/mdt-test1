const querystring = window.location.search
const url = new URLSearchParams(querystring)
const urluser = url.get("username")
const urlpass = url.get("password")
console.log(querystring)
console.log(urluser)
console.log(urlpass)
window.onload = loginLoad;

function loginLoad() {
    let form = document.getElementById("myLogin")
    form.onsubmit = checkLogin
}

function checkLogin() {
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

    let user = document.forms["myLogin"]["username"].value
    let password = document.forms["myLogin"]["password"].value
    console.log(user)
    console.log(password)

    if (user != urluser || password != urlpass) {
        alert("Wrong!!")
        return false;
    } else {
        alert("OK!!")
        return true;
    }
}