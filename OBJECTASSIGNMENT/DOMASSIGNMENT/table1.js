let table=document.createElement('table')
let tr1=document.createElement('tr')
let tr2=document.createElement('tr')
let tr3=document.createElement('tr')
let th11=document.createElement('th')
let th12=document.createElement('th')
let th13=document.createElement('th')
let th21=document.createElement('th')
let th22=document.createElement('th')
let th23=document.createElement('th')
let th31=document.createElement('th')
let th32=document.createElement('th')
let th33=document.createElement('th')

th11.innerText=1
th12.innerText=2
th13.innerText=3
th21.innerText=4
th22.innerText=5
th23.innerText=6
th31.innerText=7
th32.innerText=8
th33.innerText=9

let tb=document.body.appendChild(table )

tb.appendChild(tr1)
tb.appendChild(tr2)
tb.appendChild(tr3)
tr1.appendChild(th11)
tr1.appendChild(th12)
tr1.appendChild(th13)
tr2.appendChild(th21)
tr2.appendChild(th22)
tr2.appendChild(th23)
tr3.appendChild(th31)
tr3.appendChild(th32)
tr3.appendChild(th33)
