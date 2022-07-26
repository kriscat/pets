import React from 'react';
import image from "../../images/error.PNG";
import style from "../ErrorPage/ErrorPage.module.css";

const ErrorPage = () => {
    return (
      <div className={style.container}>
    
            <img style={{ width: "355px" }} src={image} alt="Error photo" />
      </div>
    );
}

export default ErrorPage;