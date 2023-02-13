// Save html elems to variables via Document object
const inputBtn = document.querySelector('.input-btn');
const inputField = document.querySelector('.input-elem');
const savedLeadList = document.querySelector('.savedLeadList');
const clearLeads = document.querySelector('.clearLeads');
const alertMsg = document.querySelector('.alertMsg');

let leadsArray = [];

const saveLead = () => {
  if(!inputField.value){
    alertMsg.textContent = 'Input not valid!';
    console.log(inputField.value)
  } else {
    alertMsg.textContent = '';
    leadsArray.push(inputField.value);
    inputField.value = '';

    let leadsHtml = '';

    for(let i = 0; i < leadsArray.length; ++i){
      leadsHtml += `<li> <a href=${leadsArray[i]} target="_blank"> ${leadsArray[i]} </a></li>`
      console.log(leadsArray[i])
    }

    savedLeadList.innerHTML = leadsHtml;
  }
}

const clearInput = () => {
  savedLeadList.innerHTML = '';
  leadsArray = [];
}

inputBtn.addEventListener('click', saveLead);
clearLeads.addEventListener('click', clearInput);
