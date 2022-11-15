import { useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { message } from "../../apolloClient";
import { MessageContainer, MessageBody, MessageStyle } from "./Message.styled";
import {FaRegCheckCircle, FaRegTimesCircle, FaInfoCircle} from 'react-icons/fa'

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
const getIcon = (type) => {
    switch (type) {
        case 'primary':
            return(<FaInfoCircle/>);
        case 'success':
            return(<FaRegCheckCircle/>);
        case 'failed':
            return(<FaRegTimesCircle/>);
        default:
            break;
    }
}

const MsgShow = ({ text, type }) => {
  return (
    <MessageContainer>
        {getIcon(type)}
      <MessageBody>{text}</MessageBody>
    </MessageContainer>
  );
};

const Message = () => {
  const [state, setState] = useState([]);
  const Msg = useReactiveVar(message);
  useEffect(() => {
    if (Msg) {
      setState((prv) => {
        prv.push(Msg.body);
        return [...prv];
      });
      setTimeout(() => {
        setState((prv) => {
          prv.shift();
          return [...prv];
        });
      }, 5000);
    }
  }, [Msg]);

  return (
    <MessageStyle>
      {state.map((value, index) => (
        <MsgShow key={index} text={value} type={Msg.type} />
      ))}
    </MessageStyle>
  );
};

export default Message;
