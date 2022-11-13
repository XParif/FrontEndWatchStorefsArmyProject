import { useReactiveVar } from "@apollo/client"
import { useEffect , useState } from "react"
import { message } from "../../apolloClient"

/*
{
    type : ___,
    body : ...,

}
[ type:
    primary,
    success,
    failed
]
*/
const MsgShow = ({text ,type})=>{
    return(
    <div style={{ borderRadius : 20, transition: '2s linear',  display : 'flex' ,margin : '10px', background : '#1976D2' ,padding : '4px' ,color : '#ffff'}}>
        <div style={{ height : "100%" ,background : '#ffff', marginLeft : '20px'}}><h3>a</h3></div>
        <h3 style={{marginRight: '10px' , marginLeft : '20px'}}>Message:    </h3>
        <h4 style={{marginRight: '10px'}}>{text}</h4>
    </div>
    )
}
const Message = ()=>{
    const [state , setState] = useState([])
    const Msg =  useReactiveVar(message)
    useEffect(()=>{
        if(Msg){
            setState(prv => {
                prv.push(Msg.body)
                return [...prv] 
            })
            setTimeout(() => {
                setState(prv => {
                    prv.shift()
                    return [...prv] 
                })
            }, 5000);
        }
    },[Msg])
    
     
    return (
        <div style={{position : 'fixed' ,top : 100 , right : 0, zIndex : 100000}}>
             {state.map((v,index) => <MsgShow key={index} text = {v} type={Msg.type} />)}
        </div>)
}

export default Message