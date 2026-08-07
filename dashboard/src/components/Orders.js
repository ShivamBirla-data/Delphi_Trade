import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/getOrder",
          {
            withCredentials: true,
          }
        );

        console.log("Orders API Response:", response.data);
       if (response.data.success) {
          setOrders(response.data.orders || []);
        }
      } catch (error) {
        console.log(
          "Orders Error:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) {
    return <h3>Loading Orders...</h3>;
  }

  return (
    <div className="orders-container">

      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="orders-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>

                <td>{order.name}</td>

                <td>{order.qty}</td>

                <td>₹{order.price}</td>

                <td>
                  ₹{Number(order.qty) * Number(order.price)}
                </td>

                <td>
                  <span
                    className={
                      order.mode === "BUY"
                        ? "buy"
                        : "sell"
                    }
                  >
                    {order.mode}
                  </span>
                </td>

             

              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
};

export default Orders;