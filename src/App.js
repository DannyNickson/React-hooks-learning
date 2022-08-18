import React, { useState } from "react";
import List from "./components/List";
// import useInput from './hooks/useInput';
// import Hover from './components/Hover';
import useDebounce from './hooks/useDebounce';

function App() {

  // const username=useInput('')
  // const password=useInput('')
  /* <input type="text" placeholder="'username" {...username}  />
      <input type="text" placeholder="password"  {...password}/>
      <button onClick={()=>{console.log(username.value,password.value)}}>Click</button> */
  // <Hover />
  // <List />
  const [value,setValue] = useState('')
  const debouncedSearch = useDebounce(search,500)
  function search(query) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?query=`+query
    )
      .then((response) => response.json())
      .then(json => {
        console.log(json);
      })
  }
   const onChange =e=>{
    setValue(e.target.value)
    debouncedSearch(e.target.value)
   }


  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default App;
