import { useState } from "react";
//import CustomHook from"./customHook";
import Friend from "./Friend";
function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };
 return(
  <div className="App">
  <Friend />
  {}
</div>
);
}
 /*<CustomHook/>
 )}*/
export default App;