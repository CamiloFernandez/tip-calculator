const billInput = document.getElementById('bill')
const tips = document.getElementById('tips')
const people = document.getElementById('people')
const custom = document.getElementById('custom')

let bill, tip, numbPeople = 1

const formatBill = (number) =>{
  return (new Intl.NumberFormat('de-DE').format(number));
}

billInput.addEventListener('input', (e) =>{
  bill = parseFloat(e.target.value)
  totalTips()
})

tips.addEventListener('click', (e) =>{
  e.preventDefault()
  if(e.target.tagName === 'BUTTON'){
    tip && tip.classList.remove('tip__btn-active')
    tip = e.target
    tip.classList.add('tip__btn-active')
    custom.value = ''
    totalTips()
  }else if(e.target.tagName === 'INPUT'){
    tip && tip.classList.remove('tip__btn-active')
    tip = 0
  }
})

custom.addEventListener('input',(e) =>{
  e.preventDefault()
  tip = e.target
  totalTips()
})

people.addEventListener('input', (e) =>{
  e.preventDefault()
    numbPeople = parseFloat(e.target.value)
    totalTips()
})

const totalTips = () =>{
  if(tip && bill && numbPeople){
    let total = (bill * (parseFloat(tip.value)/100)) / numbPeople 
    console.log(formatBill(total))
  }
}