let tbodyy = document.getElementById("tbodyy")
let age = document.getElementById("age")
let namee = document.getElementById("name")
let Email = document.getElementById("Email")
let sub = document.getElementById("sub")
let emailHelp = document.getElementById("emailHelp")
let ageHelp = document.getElementById("ageHelp")
let nameHelp = document.getElementById("nameHelp")

let arr = [];
let moode = "create";
let temp ;
sub.onclick=(e)=>{
    e.preventDefault()
    let ob ={
        "nameee" : "" ,
        "ageee" : "" , 
        "Emailll" : ""
    }
    if(age.value !="" && namee.value !="" && Email.value !=""){
         ob ={
            "nameee" : namee.value ,
            "ageee" : age.value , 
            "Emailll" : Email.value
        }
    }
    else{
        age.style.border = "2px solid red"
        namee.style.border = "2px solid red"
        Email.style.border = "2px solid red"
        ageHelp.style.color = "red"
        nameHelp.style.color = "red"
        emailHelp.style.color = "red"
        ageHelp.innerHTML = "This Field Must be not Empty "
        nameHelp.innerHTML = "This Field Must be not Empty "
        emailHelp.innerHTML = "This Field Must be not Empty "
    }
    if (moode == "create" && age.value !="" && namee.value !="" && Email.value !=""){
        arr.push(ob)
    }else{
        arr[temp] = ob
        sub.innerHTML = "Submit"

    }
   
add()
}
function add(){
    let content = "";
    for(let i = 0 ; i < arr.length ; i ++ ){
        content +=" <tr><th scope='row'>" + i + "</th><td>" + arr[i].nameee + "</td> <td>"+ arr[i].ageee +"</td><td>"+ arr[i].Emailll +"</td><td><button class='btn dell btn-primary'onclick=del(" + i + ")>Delete</button></td><td><button class='btn btn-primary'onclick=update(" + i + ")>Update</button></td></tr>"
    }
    tbodyy.innerHTML = content
    age.value=""
    namee.value=""
    Email.value=""
}

function del(i){
arr.splice( i , 1 )
console.log(arr)
add()
}


function update(i){
    console.log(i)
    age.value=arr[i].ageee
    namee.value=arr[i].nameee
    Email.value=arr[i].Emailll
    sub.innerHTML="update"
    moode = "update"
    temp = i
    window.scroll({
        top: 10,
        behavior: "smooth",
      });
      age.style.border = " 2px solid #dee2e6"
      namee.style.border = " 2px solid #dee2e6"
      Email.style.border = " 2px solid #dee2e6"
      ageHelp.style.color = "rgb(3 6 8 / 75%)"
      nameHelp.style.color = "rgb(3 6 8 / 75%)"
      emailHelp.style.color = "rgb(3 6 8 / 75%)"
      ageHelp.innerHTML = "We'll never share your Number with anyone else. "
      nameHelp.innerHTML = "We'll never share your Number with anyone else. "
      emailHelp.innerHTML = "We'll never share your Number with anyone else. "

}
    
    




age.oninput=()=>{
    age.style.border = " 2px solid #dee2e6"
    ageHelp.innerHTML = "We'll never share your Number with anyone else. "
    ageHelp.style.color = "  rgb(3 6 8 / 75%)"


}
namee.oninput=()=>{
    namee.style.border = " 2px solid #dee2e6"
    nameHelp.innerHTML = "We'll never share your Number with anyone else. "
    nameHelp.style.color = "  rgb(3 6 8 / 75%)"


}
Email.oninput=()=>{
    Email.style.border = " 2px solid #dee2e6"
    emailHelp.innerHTML = "We'll never share your Number with anyone else. "
    emailHelp.style.color = "  rgb(3 6 8 / 75%)"


}