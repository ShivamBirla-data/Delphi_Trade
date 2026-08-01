// import React from "react";
// import { Link } from "react-router-dom";

// const Funds = () => {
//   return (
//     <>
//       <div className="funds">
//         <p>Instant, zero-cost fund transfers with UPI </p>
//         <Link className="btn btn-green">Add funds</Link>
//         <Link className="btn btn-blue">Withdraw</Link>
//       </div>

//       <div className="row">
//         <div className="col">
//           <span>
//             <p>Equity</p>
//           </span>

//           <div className="table">
//             <div className="data">
//               <p>Available margin</p>
//               <p className="imp colored">4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Used margin</p>
//               <p className="imp">3,757.30</p>
//             </div>
//             <div className="data">
//               <p>Available cash</p>
//               <p className="imp">4,043.10</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>3736.40</p>
//             </div>
//             <div className="data">
//               <p>Payin</p>
//               <p>4064.00</p>
//             </div>
//             <div className="data">
//               <p>SPAN</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Delivery margin</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Exposure</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Options premium</p>
//               <p>0.00</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Collateral (Liquid funds)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Collateral (Equity)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Total Collateral</p>
//               <p>0.00</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="commodity">
//             <p>You don't have a commodity account</p>
//             <Link className="btn btn-blue">Open Account</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Funds;
import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import  GeneralContext from "./GeneralContext";

function Funds() {
  const [funds, setFunds] = useState([]);
   const { openFundWindow } = useContext(GeneralContext);
   console.log("openFundWindow =", openFundWindow);
  useEffect(() => {
    const getFunds = async () => {
      try {
        const response = await axios.get("http://localhost:3002/funds");
        setFunds(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFunds();
  }, []);

  return (
    <div
      style={{
        width: "85%",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#387ed1" }}>Funds</h2>

      {/* Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button 
          style={{
            padding: "10px 20px",
            backgroundColor: "#387ed1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }} 
          // onClick={openFundWindow}
            onClick={() => {
    console.log("Button Clicked");
    openFundWindow();
  }}

        >
          Add Funds
        </button>

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => alert("Open Account Clicked")}
        >
          Open Account
        </button>

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Withdraw Clicked")}
        >
          Withdraw
        </button>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Available Balance</h3>
          <h2 style={{ color: "green" }}>
            ₹{funds.availableBalance}
          </h2>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Used Margin</h3>
          <h2 style={{ color: "red" }}>
            ₹{funds.usedMargin}
          </h2>
        </div>
      </div>

      {/* Fund Details */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#387ed1", color: "white" }}>
            <th style={{ padding: "12px" }}>Description</th>
            <th style={{ padding: "12px" }}>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Opening Balance
            </td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ₹{funds.openingBalance}
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Available Balance
            </td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ₹{funds.availableBalance}
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              Used Margin
            </td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ₹{funds.usedMargin}
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px" }}>Profit / Loss</td>
            <td
              style={{
                padding: "12px",
                color: funds.pnl >= 0 ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              ₹{funds.pnl}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Funds;