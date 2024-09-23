
//  Calculate the donation and add to history function

const totalBalance = document.getElementById("total-balance")
const historyContainer = document.getElementById("history-container")
const donationBtn = document.getElementById("donation-btn")
const historyBtn = document.getElementById("history-btn")



function newBalance(e,id){
  const countBalance = document.getElementById(id)
  const preIndex = e.target.previousElementSibling.value
  const donatedMoney =  parseFloat(preIndex)
  const preDonation = parseFloat(countBalance.innerText)
  countBalance.innerText = donatedMoney + preDonation
  preIndex.value = ""
  // called from line 22 function
  remainBalance(totalBalance , donatedMoney)
  
}

function remainBalance(totalBalance , donatedMoney){
  const total = parseFloat(totalBalance.innerText)
  totalBalance.innerText = total - donatedMoney
}



function screenShift(visible) {
  if (visible) {
    donationContainer.classList.add("hidden");
    historyContainer.classList.remove("hidden");
    historyContainer.classList.add("flex");
    historyBtn.classList.add("bg-accents", "border-0");
    donationBtn.classList.add("bg-transparent", "btn-outline", "border");
  } else {
    donationContainer.classList.remove("hidden");
    donationContainer.classList.add("flex");
    historyContainer.classList.add("hidden");
    historyBtn.classList.remove("bg-accents", "border-0");
    donationBtn.classList.remove("btn-outline", "bg-transparent");
  }
}

function historyAdd(e) {
  const title = e.target.parentElement.previousElementSibling.children[0];
  const input = e.target.previousElementSibling;
  const date = new Date();
  historyContainer.innerHTML += `
  <div class="p-8 rounded-2xl shadow flex flex-col gap-4">
          <h2 id="history-title" class="font-bold text-lg">
            ${input.value} Taka is Donated for ${title.innerText}
          </h2>
          <p id="history-date" class="text-base font-light">
            Date : ${date.toString()}
          </p>
        </div>
  `;
}





//  Cheking input showing modal and alert and toggle





const historyTitle = document.getElementById("history-title")
const historyDate = document.getElementById("history-date")   
const donationContainer= document.getElementById("donation-container")
const confirmationMessage = document.getElementById("confirmation-message")
const btns = document.querySelectorAll('.addMoney')


donationContainer.addEventListener("click",function(e){
  if(e.target.classList.contains("addMoney")){
    const preVal = e.target.previousElementSibling.value
    const input = parseFloat(preVal)
    console.log(input)
    console.log(Number(preVal.toString())) 

    if(typeof input !== "number" || isNaN(input)==true ||input<=0 || input !== Number(preVal.toString()) ||
    input > Number(totalBalance.innerText )){
      alert("Invalid Input")
      e.target.previousElementSibling.value=""
      return
    }
    
    // CALLED FROM UP SIDE
    
    historyAdd(e)
    confirmationMessage.showModal()
    if(e.target.classList.contains("btn1")){
      newBalance(e,"initialMoney")
    }
    else if(e.target.classList.contains("btn2")){
      newBalance(e,"initialMoney2")
    }
    else{
      newBalance(e,"initialMoney3")
    }

  }

})


donationBtn.addEventListener("click",function(){
  visible = false
  screenShift(visible)

})

historyBtn.addEventListener("click",function(){
  visible= true
  screenShift(visible)
})