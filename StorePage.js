import React from 'react'
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
const StorePage = () => {
const productsList=productsArr.map((item)=>{
    return(
        <div>
            <img src={item.imageUrl} />
            <h4>{item.title}</h4>
            <h3>{item.price}</h3>
        </div>
    )
})
  return (
    <React.Fragment>
      {productsList}
    </React.Fragment>
  )
}

export default StorePage
