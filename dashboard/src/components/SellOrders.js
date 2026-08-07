import React, { useEffect, useState } from "react";
import axios from "axios";

const SellOrders = () => {
  const [sellOrders, setSellOrders] = useState([]);

  useEffect(() => {
    const fetchSellOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/getSellOrders",
          {
            withCredentials: true,
          }
        );

        console.log("SELL ORDERS RESPONSE:", response.data);

        if (response.data.success) {
          setSellOrders(response.data.orders || []);
        }

      } catch (error) {
        console.log(
          "SELL GET ERROR:",
          error.response?.data || error.message
        );
      }
    };

    fetchSellOrders();
  }, []);

  return (
    <div className="orders-container">

      <h2>Sell Orders</h2>

      {sellOrders.length === 0 ? (
        <p>No Sell Orders Found</p>
      ) : (
        <table className="orders-table">

          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Type</th>
             
            </tr>
          </thead>

          <tbody>
            {sellOrders.map((order) => (
              <tr key={order._id}>

                <td>{order.name}</td>

                <td>{order.qty}</td>

                <td>
                  ₹{order.price}
                </td>

                <td>
                  ₹{Number(order.qty) * Number(order.price)}
                </td>

                <td>
                  {order.mode}
                </td>


              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
};

export default SellOrders;