import React from "react";

// Simulated order data
const simulatedOrder = {
  id: "6c08828e-7881-4bdb-bb09-edec0387f2cd",
  date_creation: "2024-09-09T19:38:35.235148",
  seller: {
    name: "Your Company Name",
    address: "123 Business Street",
    city: "Business City",
    ZIPCode: "12345",
    country: "United States"
  },
  client: {
    name: "John Doe",
    address: "456 Customer Avenue",
    city: "Customer City",
    ZIPCode: "67890",
    country: "United States"
  },
  order_items: {
    items: [
      {
        name: "Pro Max",
        quantity: 1,
        price: 290400,
        total: 290400
      },
      {
        name: "Free Plan",
        quantity: 1,
        price: 0,
        total: 0
      }
    ]
  },
  currency: "USD",
  total_price: 290400
};

const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount / 100);
};

const OrderInvoice = () => {
  const {
    id,
    date_creation,
    seller,
    client,
    order_items,
    currency,
    total_price
  } = simulatedOrder;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Invoice #{id}</h1>
      <p>Date: {new Date(date_creation).toLocaleDateString()}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div>
          <h3>From:</h3>
          <p>{seller.name}</p>
          <p>{seller.address}</p>
          <p>{seller.city}, {seller.ZIPCode}</p>
          <p>{seller.country}</p>
        </div>
        <div>
          <h3>To:</h3>
          <p>{client.name}</p>
          <p>{client.address}</p>
          <p>{client.city}, {client.ZIPCode}</p>
          <p>{client.country}</p>
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ textAlign: 'left' }}>Item</th>
            <th style={{ textAlign: 'right' }}>Quantity</th>
            <th style={{ textAlign: 'right' }}>Price</th>
            <th style={{ textAlign: 'right' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {order_items.items.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{item.name}</td>
              <td style={{ textAlign: 'right' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right' }}>{formatCurrency(item.price, currency)}</td>
              <td style={{ textAlign: 'right' }}>{formatCurrency(item.total, currency)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>{formatCurrency(total_price, currency)}</td>
          </tr>
        </tfoot>
      </table>

      <p style={{ marginTop: '20px' }}>
        Thank you for your business!
      </p>
    </div>
  );
};

export default OrderInvoice;