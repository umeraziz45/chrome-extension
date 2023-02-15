// Save html elems to variables via Document object
const inputBtn = document.querySelector('.input-btn');
const inputField = document.querySelector('.input-elem');
const savedLeadList = document.querySelector('.savedLeadList');
const clearLeads = document.querySelector('.clearLeads');
const alertMsg = document.querySelector('.alertMsg');
const saveBtn = document.querySelector('.saveBtn');

let leadsArray = [];
// const tabs = [
//   {url: "https://github.com/umeraziz45"}
// ]

const render = (arr) => {
  let leadsHtml = ''; 
  for(let i = 0; i < arr.length; ++i){
    leadsHtml += 
    `
      <li> 
        <a href=${arr[i]} target="_blank"> 
        ${arr[i]} 
        </a>
      </li>
    `
  } 
  savedLeadList.innerHTML = leadsHtml;
}


const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLead'));

if (leadsFromLocalStorage){
  leadsArray = leadsFromLocalStorage;
  render(leadsArray);
}



const saveLead = () => {
  if(!inputField.value){
    alertMsg.textContent = 'Input not valid!';
  } else {
    alertMsg.textContent = '';
    leadsArray.push(inputField.value);
    inputField.value = '';
    localStorage.setItem('myLead', JSON.stringify(leadsArray));   
    render(leadsArray);
  }
}


const clearInput = () => {
  savedLeadList.innerHTML = '';
  leadsArray = [];
  localStorage.clear('myLead');
}

inputBtn.addEventListener('click', saveLead);
clearLeads.addEventListener('click', clearInput);
saveBtn.addEventListener('click', () =>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    leadsArray.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(leadsArray));
    render(leadsArray);
  })
})
