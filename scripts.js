let container = document.getElementById('container')
let chnageColor = document.getElementById('change-color')
let addChild = document.getElementById('add-child')
let removeChild = document.getElementById('remove-child')
let count = 0


let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Brown", "Pink", "White", "Gray"]




chnageColor.addEventListener('click',function(){
  let colorPicker = Math.floor(Math.random() * color.length)
  container.style.backgroundColor = color[colorPicker]
})

addChild.addEventListener('click',function(){
  count = count + 1
 if(count <= 35){
  let node = document.createElement('div')
  
  node.style.cssText = `width: 100px;
                        height: 100px;
                        border: 2px solid black;
                        margin : 10px;
                        border-radius: 2px
                       `
  container.appendChild(node)
 }
})

removeChild.addEventListener('click',function(){
  container.removeChild(container.lastChild)
})

