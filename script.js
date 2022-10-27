
const city=['Gorakhpur','delhi','prayag','lucknow','allhabad','Ayodhya','Kiskindha','Lanka','Kanya kumari','Gokul'] 
let selectedCity = []
const cityInput=document.getElementById('city-input')
const citySelect=document.getElementById('city-select')
const cityView=document.getElementById('city-view')


// Show selected city to div
cityView.nextElementSibling.addEventListener('click',()=>{
    cityView.classList.toggle('wrap')
    addToDiv('city-view',selectedCity)
})
const addToDiv=(view,list)=>{
    if(list.length>0){
    document.getElementById(`${view}`).innerHTML=''
    if (document.getElementById(`${view}`).classList.contains('wrap')){
        n=document.createElement('span')
        n.setAttribute('class','acpsule')
        n.textContent=list[0]
            // b=document.createElement('button')
            // b.innerHTML='  <i class="fa-sharp fa-solid fa-xmark" style="margin:1px;"></i>'
            // b.setAttribute('class','cross')
            // n.appendChild(b)
        document.getElementById(`${view}`).appendChild(n)
        if(list.length>1){
        n=document.createElement('span')
        n.textContent=`    +${list.length-1}`
        document.getElementById(`${view}`).appendChild(n)}
    }else{
    list.forEach((e)=>{
        n=document.createElement('span')
        n.setAttribute('class','acpsule')
        n.textContent=`${e}`
        b=document.createElement('button')
        b.innerHTML='  <i class="fa-sharp fa-solid fa-xmark" style="margin:1px;"></i>'
        b.addEventListener('click',()=>{list.splice(list.indexOf(e), 1);addToDiv(view,list)})
        b.setAttribute('class','cross')
        n.appendChild(b)
        document.getElementById(`${view}`).appendChild(n)
    })}
}else{document.getElementById(`${view}`).innerHTML=''}
}


const showcityList=(event)=>{
        // hide on outer click
        document.addEventListener('click', (e)=>{
                p='n'
                e.path.forEach(element => {
                    if(element.id=='city-sec'){
                        p='y'
                        return
                        }
                    }
                )
                if(p!='y'){citySelect.classList.add('hide')}
                
            }
         )
        citySelect.innerHTML=''
        citySelect.classList.remove('hide')
        //adding options
        city.map((e)=>{
         if ( new RegExp(`^(?=.*(${event.target.value.toLowerCase()}))`).test(e.toLowerCase()) ){
             n=document.createElement('li')
             n.textContent=e
             n.setAttribute('class','list-option')
            //  n.setAttribute('value',e)
            if (selectedCity.includes(e)){
                n.classList.add('selected')
            }
             citySelect.appendChild(n)
         }
        })
        // adding click beheviour to options 
        citySelect.querySelectorAll('.list-option').forEach(element => {
            element.addEventListener('click',()=>{
                element.classList.toggle('selected')

                selectedCity.includes(element.textContent)?selectedCity.splice(selectedCity.indexOf(element.textContent), 1):selectedCity.push(element.textContent)
                //need to correct//if  element.textContent= ''
                addToDiv('city-view',selectedCity)
             })   
        });
        
        // handling no input
        if(citySelect.children.length==0){
            n=document.createElement('li')
            n.textContent='No match'
            citySelect.appendChild(n)
        }
   
}

cityInput.addEventListener('focus',showcityList)    // show list on click input    

cityInput.addEventListener('keyup',showcityList)    // show list on typing
 




//Province



const provinc=['Uruwa','khpur','pra','lucknow','lhabad','yodhya','kindha','Lanka','Kanya kumari','Gokul'] 
let selectedprovinc = []
const provincInput=document.getElementById('provinc-input')
const provincSelect=document.getElementById('provinc-select')
const provincView=document.getElementById('provinc-view')


// Show selected provinc to div
provincView.nextElementSibling.addEventListener('click',()=>{
    provincView.classList.toggle('wrap')
    addToDiv('provinc-view',selectedprovinc)
})
const showprovincList=(event)=>{
        // hide on outer click
        document.addEventListener('click', (e)=>{
                p='n'
                e.path.forEach(element => {
                    if(element.id=='provinc-sec'){
                        p='y'
                        return
                        }
                    }
                )
                if(p!='y'){provincSelect.classList.add('hide')}
                
            }
         )
        provincSelect.innerHTML=''
        provincSelect.classList.remove('hide')
        //adding options
        provinc.map((e)=>{
         if ( new RegExp(`^(?=.*(${event.target.value.toLowerCase()}))`).test(e.toLowerCase()) ){
             n=document.createElement('li')
             n.textContent=e
             n.setAttribute('class','list-option')
             n.setAttribute('value',e)
            if (selectedprovinc.includes(e)){
                n.classList.add('selected')
            }
             provincSelect.appendChild(n)
         }
        })
        // adding click beheviour to list items
        provincSelect.querySelectorAll('.list-option').forEach(element => {
            element.addEventListener('click',()=>{
                element.classList.toggle('selected')

                selectedprovinc.includes(element.textContent)?selectedprovinc.splice(selectedprovinc.indexOf(element.textContent), 1):selectedprovinc.push(element.textContent)
                //need to correct//if  element.textContent= ''
                addToDiv('provinc-view',selectedprovinc)
             })   
        });
        if(provincSelect.children.length==0){
            n=document.createElement('li')
            n.textContent='No match'
            provincSelect.appendChild(n)
        }

   
}

provincInput.addEventListener('focus',showprovincList)    // show list on click input    

provincInput.addEventListener('keyup',showprovincList)    // show list on typing



