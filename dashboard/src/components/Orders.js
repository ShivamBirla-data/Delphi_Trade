import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Order Page Loaded");
    const getOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3002/getOrder");

        console.log(response.data);

        setOrders(response.data);
         
      } catch (error) {
        console.log(error);
      }
    };

    getOrders();
  }, []);

 return (
    <div className="orders-container">

      <h2>Orders</h2>

      <h3 className="total-orders">
        Total Orders : {orders.length}
      </h3>


      <table className="orders-table">

        <thead>

          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

        </thead>


        <tbody>

          {orders.map((item) => (

            <tr key={item._id}>

              <td>{item.name}</td>

              <td>{item.qty}</td>

              <td>₹ {item.price}</td>

              <td>{item.mode}</td>

            </tr>

          ))}

        </tbody>


      </table>

    </div>
);
}

export default Orders;
