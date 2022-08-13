import React, { useState } from "react";

function App() {
  const [value,setValue] = useState('')

  const onChange = e=>{
    setValue(e.target.value)
  }

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={()=>{console.log(value)}}>Click</button>
    </div>
  );
}

export default App;
