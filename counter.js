//let myAge = 30;
//let humanDogRatio = 7;
//let myDogAge = (myAge * humanDogRatio);

//console.log(myDogAge)

//let bonusPoints = 50;
 //bonusPoints = (bonusPoints + 50)
 //bonusPoints = (bonusPoints - 75)
 //bonusPoints = (bonusPoints + 45)

//console.log(bonusPoints)
//function increment() {
//    console.log("clicked")
//}

//let lap1 = 40
//let lap2 = 25
//let lap3 = 100

 //function myLapLog() {
   // let lapSum = (lap1 + lap2 + lap3)
    //console.log(lapSum)
 //}



//myLapLog()
//myLapLog()
//myLapLog()


//let lapsCompleted = 0



//function lapsIncr() {
  //  lapsCompleted = lapsCompleted + 1
    //console.log(lapsCompleted)
//}

//lapsIncr()
//lapsIncr()
//lapsIncr()

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")




let count = 0



function increment() {
    count += 1
    countEl.innerText = count
    
    
}


function save() {
    let sumStr = count + " - "
    saveEl.textContent += sumStr
    countEl.innerText = 0
    count = 0


}

