import { isLogin, modalController } from "../apolloClient";
import Dashboard from "../components/dashboard";
import { useReactiveVar } from '@apollo/client';



const Dashboard = () => {
  // const [custom , setCustom ]  = useState(isLogin())
  const login = useReactiveVar(isLogin)




  if(typeof window !== undefined){
    return (
      <>
        {login ? <Dashboard /> : <h1>please LogIn TO Get Your Information</h1>  }
      </>
    );
  }else{
    return <></>
  }    
  
};

export default Dashboard;

