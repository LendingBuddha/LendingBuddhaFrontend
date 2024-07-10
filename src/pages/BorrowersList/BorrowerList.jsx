// src/components/RecentSales.js
import React from 'react';
import './BorrowerList.css';

const sales = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount:" 💬" },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '💬' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '💬' },
  { name: 'William Kim', email: 'will@email.com', amount: '💬' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '💬' },
];

const RecentSales = () => {
  return (
    <div className="recent-sales">
      <h3>Chat with Recent Borrowers</h3>
      <p>You contacted with 25 Borrowers this month.</p>
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>
            <span className="avatar">{sale.name.charAt(0)}</span>
            <div className="details">
              <p className="name">{sale.name}</p>
              <p className="email">{sale.email}</p>
            </div>
            <p className="amount">{sale.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSales;
