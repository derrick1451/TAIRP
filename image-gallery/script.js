
const shoppingItems = [
    {
       image:'./images/cloth-1.jpg',
       description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
       type:'clothes',
    },
    {
        image:'./images/cloth-2.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
        type:'clothes',
     },
     {
        image:'./images/cloth-3.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
        type:'clothes',
     },
     {
        image:'./images/phone-1.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
        type:'phones',
     },
     {
        image:'./images/phone-2.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
        type:'phones',
     },
     {
        image:'./images/shoe-1.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
        type:'shoes',
     },
     {
        image:'./images/shoe-2.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique totam. Cupiditate dignissimos enim, placeat at quos in reiciendis obcaecati!',
        type:'shoes',
     },
]
const buttons = document.querySelectorAll('.btn')
//filter shoes
const shoes = shoppingItems.filter(item=>{
    return item.type === 'shoes'
})
//filter phones
const phones = shoppingItems.filter(item=>{
    return item.type === 'phones'
})
//filter clothes
const clothes = shoppingItems.filter(item=>{
    return item.type === 'clothes'
})


function displayItems(item){
    const container = document.querySelector('.item-container')
     //remove all existing lists
     container.innerHTML = '';
    item.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('item')
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('img-container')
        const image = document.createElement('img')
        image.src = `${item.image}`
        image.alt = 'some images'
        imageContainer.appendChild(image)
        const heading = document.createElement('h1')
        heading.textContent = `${item.type}`
        const paragraph = document.createElement('p')
        paragraph.textContent = `${item.description}`
        div.appendChild(imageContainer)
        div.appendChild(heading)
        div.appendChild(paragraph)
        container.appendChild(div)
    });


}
displayItems(shoppingItems)
buttons.forEach(button=>{
    
    button.addEventListener('click',(e)=>{
        if(e.target.textContent === 'Show All'){
            displayItems(shoppingItems)
        }else if(e.target.textContent === 'Shoes'){
            displayItems(shoes)
        }else if(e.target.textContent === 'Phones'){
            displayItems(phones)
        }else if(e.target.textContent === 'Clothes'){
            displayItems(clothes)
        }
    })
})