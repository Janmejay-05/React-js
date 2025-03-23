import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Log = ({ SetBool }) => {
  const [Boolean, SetBoolean] = useState(true);
  const [StoreData, SetStoreData] = useState(
    JSON.parse(localStorage.getItem("login")) || []
  );
  return (
    <div>
      {Boolean ? (
        <Login
          setboolean={SetBoolean}
          storedata={StoreData}
          setbool={SetBool}
        />
      ) : (
        <SignUp
          setboolean={SetBoolean}
          storedata={StoreData}
          setstoredata={SetStoreData}
        />
      )}
    </div>
  );
};

export default Log;
