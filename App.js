
//import { use } from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [count,setCount]=useState(0);
       const result=()=>{
       setCount(count+1);
        };
  const dec=()=>{
    setCount(count-1);
  };

const zero=()=>{
  setCount(count=0);
}

 return (
  <div className="App">
   <button class="inc" onClick={result}>Increase</button>
   <button class="dec" onClick={dec}>Decrease</button>
   <button  class="er" onClick={zero}>SetTOzero</button>
   {count}

  </div>
 );
}
 





export default App;
