import { useReactiveVar } from "@apollo/client"
import { Loading2 } from "../../apolloClient"

const AnotherLoading = ()=>{
    const Loading = useReactiveVar(Loading2)
    if(Loading){
    return(
        <div style={{zIndex:100000000000,width : "100vw" , height : "100vh", backgroundColor : "rgb(255,255,255, 0.3)" , position : "fixed" , top : 0 , left : 0 , display : "flex" , justifyContent: "center" , alignItems : "center"}}>
          <img src="/buttonLoading.svg" alt="Button Loading"/>
        </div>
    )
    }
}

export default AnotherLoading