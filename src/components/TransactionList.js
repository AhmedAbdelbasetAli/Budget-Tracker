import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="group flex items-center justify-between bg-glass-light rounded-lg p-4 hover:bg-glass-dark transition-all"
        >
          <div className="flex-1">
            <p className="font-medium">{transaction.text}</p>
            <p className="text-sm text-gray-400">
              {new Date(transaction.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span
              className={`text-lg font-semibold ${
                transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              ${transaction.amount}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-opacity"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;