import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  console.log(setcount);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setcount(count + 1)}>add</button>
    </div>
  );
};

export default App;
