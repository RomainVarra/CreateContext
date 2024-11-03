import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";


function App() {
  const [isOnline,setIsOnline] = useState<boolean>(false);

  return (
<div>
    <UserContext.Provider value ={{isOnline, setIsOnline} } >
  <UserProfile />;
    </UserContext.Provider>
</div>
  )
}

export default App;