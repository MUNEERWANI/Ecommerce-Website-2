import React from 'react'
import Header from '../header/Header'
import classes from './HomePage.module.css'
const HomePage = () => {
  return (
    <React.Fragment>
        <Header />
      <h1 className={classes.heading}>Wellcome To The  Sara store</h1>
      <img src='https://img.freepik.com/premium-psd/restaurant-banner-template_23-2148466834.jpg?size=626&ext=jpg' alt='Image' className={classes.image} />

    </React.Fragment>
  )
}

export default HomePage;
