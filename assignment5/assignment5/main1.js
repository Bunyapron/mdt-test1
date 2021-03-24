window.onload = Pageload

function Pageload() {
    alert("welcome!")
}
let topic1 = document.getElementById("topic1");
let comment1 = document.getElementById("comment1");
let comment2 = document.getElementById("comment2");
let a = 1;



function postFunction() {
    if (a == 1) {
        let text1 = document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("topic1").innerHTML = text1;
        a++;
        console.log(a);
        document.getElementById("text1").value = " ";
    } else if (a == 2) {
        let text1 = document.getElementById("text1").value;
        console.log(text1)
        document.getElementById("comment1").innerHTML = text1;
        a++;
        console.log(a);
        document.getElementById("text1").value = " ";
    } else if (a == 3) {
        let text1 = document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("comment2").innerHTML = text1;
        a++
        console.log(a)
        document.getElementById("text1").value = " ";
    } else {
        alert("กด Clear! เพื่อพิมใหม่อีกครั้ง");
    }
}


function clearFunction() {
    if (a == 4) {
        document.getElementById("topic1").innerHTML = " ";
        document.getElementById("comment1").innerHTML = " ";
        document.getElementById("comment2").innerHTML = " ";
        document.getElementById("text1").value = " ";

    }
    a = 1;
    console.log(a)
}



// window.onload = Pageload

// let topic1 = document.getElementById("topic1");
// let comment1 = document.getElementById("comment1");
// let comment2 = document.getElementById("comment2");
// let i = 1;


// function postFunction() {
//     if (i == 1) {
//         let text1 = document.getElementById("text1").Value;
//         console.log(text1);
//         document.getElementById('topic1').innerHTML = text1;
//         i++;
//         console.log(i);
//         document.getElementById('text1').Value = "";
//     } else if (i == 2) {
//         let text1 = document.getElementById("text1").Value;
//         console.log(text1);
//         document.getElementById('comment1').innerHTML = 1;
//         i++;
//         console.log(i);
//         document.getElementById('text1').Value = "";
//     } else if (i == 3) {
//         let text1 = document.getElementById("text1").Value;
//         console.log(text1);
//         document.getElementById("comment2").innerHTML = text1;
//         i++;
//         console.log(i);
//         document.getElementById("text1').Value = "";
//     } else {
//         alert("กด Clear เพื่อพิมใหม่อีกครั้ง")
//     }
// }

// function clearFunction() {
//     if (i == 4) {
//         document.getElementById('topic1').innerHTML = " ";
//         document.getElementById('comment1').innerHTML = " ";
//         document.getElementById('comment2').innerHTML = " ";
//         document.getElementById('text1').Value = " ";
//     }
//     i = 1;
//     console.log(i)
// }