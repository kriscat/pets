import React from 'react'
import style from "./MainPage.module.css"
import image from "../../images/logo.jpg"

const MainPage = () => {
  return (
    <div className={style.mainpage}>
      
      <div>
        <img src={image} alt="Logo not found" />
      </div>
           <div className={style.info} >
        <p className={style.mainname}>Название проекта</p>
        <br />
        <p className={style.maintext}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed a labore aspernatur voluptas quae asperiores quasi hic optio dolor odit? Ipsa id a et ullam quis soluta sed nam quisquam.</p>
        <br />
      </div>
    </div>
   
  )
}

export default MainPage;