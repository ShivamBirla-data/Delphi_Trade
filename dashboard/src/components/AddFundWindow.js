// import React, { useState } from "react";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// function AddFunds() {
//   const [amount, setAmount] = useState("");

//   const handleAddFunds = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3002/addFunds",
//         {
//           amount,
//         }
//       );

//       //alert(response.data.message);
//       setAmount("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Add Funds</h2>

//       <input
//         type="number"
//         placeholder="Enter Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "250px",
//           marginRight: "10px",
//         }}
//       />

//       <button
//         onClick={handleAddFunds}
//         style={{
//           padding: "10px 20px",
//           background: "#387ed1",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Add Funds
//       </button>
//     </div>
//   );
// }

// export default AddFunds;

import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

function AddFundWindow() {

  const { closeFundWindow } = useContext(GeneralContext);

  const [amount, setAmount] = useState("");

  const handleAddFunds = async () => {

    try {

      const response = await axios.post(
        "http://localhost:3002/addFunds",
        {
          amount,
        }
      );

      alert(response.data.message);

      closeFundWindow();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="overlay">

      <div className="popup">

        <h2>Add Funds</h2>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleAddFunds}>
          Add
        </button>

        <button onClick={closeFundWindow}>
          Cancel
        </button>

      </div>

    </div>
  );
}

export default AddFundWindow;