 // <!--heart icon increase function-->


let heartCount=0;
let heartDisplay =document.getElementById('nav-heart')
let allButtons = document.getElementsByClassName('love')
for (const button of allButtons) {
    button.addEventListener('click' , () => {
        heartCount++
        heartDisplay.innerText = heartCount ;
        
    })
    
}


//  <!--call button all function--> 


let coinCount = parseInt(document.getElementById("coin").textContent);
const coinDisplay = document.getElementById("coin");

const callHistoryContainer = document.getElementById("aside-section");
const callButtons = document.querySelectorAll(".card-btn2");

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceName = card.querySelector("h3").textContent;
    const serviceNumber = card.querySelector(".card-number").textContent;


    if (coinCount < 20) {
      alert("Not enough coins to make the call!");
      return; 
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`Calling ${serviceName} - ${serviceNumber}`);

const asideDiv = document.createElement("div");
asideDiv.className = "bg-[#FAFAFA] flex justify-between items-center p-6 m-5 rounded-xl";
asideDiv.innerHTML = `
  <div>
    <h1 class="font-bold">${serviceName}</h1>
    <h1 class="text-gray-400 mt-4">${serviceNumber}</h1>
  </div>
  <h3>${new Date().toDateString()}</h3>
`;

callHistoryContainer.appendChild(asideDiv);
  });
});


// <!--copy function--->

 let copyCount = 0;
  const copyCountDisplay = document.getElementById("copy-count");
  const copyButtons = document.querySelectorAll(".card-btn1");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
    
      const number = btn.closest(".card").querySelector(".card-number").innerText;

      navigator.clipboard.writeText(number)
        .then(() => {
          alert("Copied: " + number); 
          copyCount++;
          copyCountDisplay.innerText = copyCount + " copy";
        })
        .catch(() => {
          alert("Failed to copy!");
        });
    });
  });
  

// <!--clear function-->

const clearButton = document.getElementById("aside-btn2");

clearButton.addEventListener("click", function() {
    const children = Array.from(callHistoryContainer.children);
    children.forEach(child => {
        if (child.id !== "aside-child1") {
            callHistoryContainer.removeChild(child);
        }
    });
});

