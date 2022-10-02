let input = document.querySelector("input");
let submit = document.getElementById("btn");
let orderList = document.querySelector("ol");
let list = document.getElementsByTagName("li");
var del = document.createElement("button");
var checkbox = document.createElement("input")

const inputLength=()=>{
   return input.value.length
}
const createlist =()=>{
   var text  = document.createElement("li");
   text.appendChild(document.createTextNode(input.value))
   orderList.appendChild(text);
   input.value="";

   var del = document.createElement("button");
   del.appendChild(document.createTextNode("X"));
   text.appendChild(del)
   del.addEventListener("click", delParent)
   del.className=("deleteme")

    // var checkbox = document.createElement("input")
    // checkbox.type="checkbox"
    // text.appendChild(checkbox)
    // checkbox.addEventListener("click", done)
}
const createElem =()=>{
    if (inputLength() > 0) {
        createlist()
    }
}
const addAfterKey=(e)=>{
    if (inputLength() > 0 && e.keyCode===13) {
        createlist()
    }
}
const delParent=(e)=>{
    e.target.parentNode.remove()
}
// #####

// const deleteParent = ()=>{
//     parent.remove()
// }
// // const newlist = document.createElement("li")
// // newlist.appendChild(checklist)

// let newOlist = document.getElementById("newOl");
// const newCheck =()=>{
//     const newlist = document.createElement("li")
//     newOlist.appendChild(newlist)
// }


// const done =(e)=>{
//    var newlist  = document.createElement("li");
// //    newlist.append(dot[1].innerText)
//    input.value=""
//    var dot = document.getElementsByTagName("li");
//     let newOlist = document.getElementById("newOl");
//     const checklist = e.target.parentNode.classList.toggle("done")
//     const parents = checklist.parent
//     setTimeout(() => {
//         newOlist.append(dot[1].children);
//         // newlist.replaceChild(createlist(), )
//         checkbox.addEventListener("click", delParent);
//     }, 2000);
// }

// // setInterval(()=>{
// //     console.log(" hello otina")
// // },1000)




submit.addEventListener("click", createElem)
input.addEventListener("keypress",addAfterKey)

btn.style = "margin-left:.5em;border-radius:.3em;font-size:1.1em;padding:.2em .6em"
input.style="border-radius:.2em;font-size:1.1em;text-align:center;padding:.3em 0;margin-bottom: 1em;"

gsap.to(h1, {y:100,opacity:0, duration:1})
