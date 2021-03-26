import { useState } from "react";
import { UserContext } from "./components/UserContext";
import AppRouter from "./Routes/AppRouter";
function App() {
  
  const [user, setUser] = useState({
    userName: 'Cristian',
    gameScore: 0,
    hitsInRow: 0,
    movements: 0,
    difficult: 'med'

  })
  
  return (
    <UserContext.Provider value={{user,setUser}}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
