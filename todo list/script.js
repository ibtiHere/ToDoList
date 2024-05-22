const inputbox = document.getElementById("inbox")
const listcon = document.getElementById("licon")

function addtask(){
    if( inputbox.value === ''){
        alert("WRITE SOME THING")

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcon.appendChild(li);
        let span = document.createElement("span")
      span.innerHTML = "\u00d7";
      li.appendChild(span);}

      inputbox.value = "";
      savedata();
}

listcon.addEventListener("click", function(e){
    console.log("Hello");
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        console.log("tag is li ");
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

    }, false);
function savedata(){
localStorage.setItem("data",listcon.innerHTML);

}
function showtask(){
    listcon.innerHTML = localStorage.getItem("data")
}
showtask()