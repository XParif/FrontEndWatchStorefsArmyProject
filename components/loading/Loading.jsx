// import { Image } from 'next/image';

const LoadingCompunent = () =>{

    return(
      <div  style={{ zIndex: 10000000 ,backgroundColor : "rgba(0,0,0, 0.5)" ,position : "fixed", top : 0, left : 0 , height : "100vh" , width :  "100vw" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <img src="/spiner.svg" alt="Loading..."/>
      </div>
    )
  }

export default LoadingCompunent