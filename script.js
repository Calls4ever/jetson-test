let items=[]
let maxItemNumbers = 5
let counter = 0

let prev=document.createElement('div')
prev.classList='prev'
prev.innerHTML='&#10094;'

let next = document.createElement('div')
next.classList='next'
next.innerHTML='&#10095;'


const setUp=(maxItemNumbers)=>{
    for(let i=0; i<maxItemNumbers; i++){
        let li = document.createElement('li')
         li.classList=`trending`
         let colorDiv = document.createElement('div')
         colorDiv.id=`item-${i+1}`
         colorDiv.classList='color-div'
     
         let descriptionP = document.createElement('p')
         descriptionP.innerText='Element Pro Electric Scooter'
         descriptionP.classList='description'
     
         let priceP = document.createElement('p')
         priceP.classList='price'
         priceP.innerText = '$399.99'
     
     
         li.appendChild(colorDiv)
         li.appendChild(descriptionP)
         li.appendChild(priceP)

         items.push(li)
         
     }
}


const renderItems = (counter) =>{
    let ul = document.querySelector('#item-ul')
    if(counter+2<items.length){
            ul.innerHTML=""
            for(let i=counter; i<counter+3 && i <items.length; i++){
            ul.appendChild(items[i])
            }
        }else if(window.innerWidth<=700){
            ul.innerHTML=""
            for(let i=counter; i<counter+2 && i <items.length; i++){
                ul.appendChild(items[i])
                }
        }
        else{
            counter=items.length-1
            console.log(counter)
        }
    
    renderButtons(prev,next)
}

const renderButtons=(prev, next)=>{
    let arrows=document.querySelector('#arrows')
    arrows.innerHTML=""
    console.log(counter)
    if(counter===0){
        arrows.appendChild(next)
    }else if(counter > 0 && counter <items.length-1){
        if(window.innerWidth<=700){
            arrows.appendChild(prev)
            arrows.appendChild(next)
        }else if(window.innerWidth>700){
            console.log(counter)
            if(counter+3<items.length){
                arrows.appendChild(prev)
                arrows.appendChild(next)
                
            }else{
                arrows.appendChild(prev) 
            }
        }
        
    }
    else if(counter ==items.length-1){
        arrows.appendChild(prev)
    }
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    let width = window.innerWidth
    setUp(maxItemNumbers)
    renderItems(counter)
    window.addEventListener('resize', (e)=>{
        if(width != window.innerWidth){
            if(window.innerWidth > 700){
            width = window.innerWidth
        }else if(window.width<=700){
            width = window.innerWidth
        }
        renderItems(counter)
        }
        
    
    })
    
    prev.addEventListener('click', (e)=>{
        
        counter=counter-1>=0?counter-1:0
        renderButtons(prev,next)
        renderItems(counter)
        
    })
    next.addEventListener('click', e=>{
        counter=counter+1<=items.length-1?counter+1:items.length-1
        renderButtons(prev,next)
        renderItems(counter)
        
        
        
    })

    
})
