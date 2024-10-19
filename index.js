// Counter App

var count = 0
var lastCount = -1

function increment(){
    count++
    let countDisplay = document.getElementById("count-el")
    countDisplay.innerHTML = count
}

function save(){
    let savedEntries = document.getElementById("entries-txt")
    
    if (count != lastCount){
        savedEntries.innerHTML += count + "-"
        lastCount = count
    } else {
        alert("Error Saving: You've already saved this value")
    }
}
