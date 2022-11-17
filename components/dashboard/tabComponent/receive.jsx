
import { useEffect, useState } from 'react';

const Receive = ({ordeINfo , orderFetchLoading}) => {
  const [uiChanged , setUiChanged] = useState(false);
  useEffect(()=>{
    setUiChanged( uiChanged ? false : true)
  },[orderFetchLoading])

  return (
    <div>
      <h1>Hello Receive</h1>
      <p>
          {JSON.stringify(ordeINfo)}
      </p>
    </div>
  );
};

export default Receive;
