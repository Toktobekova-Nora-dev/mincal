const inputANode = document.querySelector('.js-input-a');
const inputBNote=document.querySelector('.js-input-b');
const inputSelect=document.querySelector('.js-select-operatin')
const btnResultNode=document.querySelector('.js-btn-result');
const outputNode=document.querySelector('.js-output');



btnResultNode.addEventListener('click',function(){
const a = Number(inputANode.value);
const b = Number(inputBNote.value);
const operation= inputSelect.value;

const result = calculate({ a,b,operation})
outputNode.innerHTML = result;
})