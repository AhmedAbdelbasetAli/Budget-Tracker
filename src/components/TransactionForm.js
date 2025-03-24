import React from 'react';

const TransactionForm = ({ text, amount, type, setText, setAmount, setType, addTransaction }) => {
  return (
    <form onSubmit={addTransaction} className="space-y-4">
      <div>
        <input
          type="text"
          className="w-full bg-glass-light rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          placeholder="Salary, Rent, Groceries..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4"> {/* Changed to column on mobile */}
        <input
          type="number"
          className="w-full bg-glass-light rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex gap-2 bg-glass-light rounded-lg p-2 w-full md:w-auto"> {/* Added width classes */}
          <button
            type="button"
            className={`px-4 py-2 rounded-md transition-all flex-1 ${
              type === 'income'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-transparent text-gray-400 hover:bg-glass-dark'
            }`}
            onClick={() => setType('income')}
          >
            Income
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md transition-all flex-1 ${
              type === 'expense'
                ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
                : 'bg-transparent text-gray-400 hover:bg-glass-dark'
            }`}
            onClick={() => setType('expense')}
          >
            Expense
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;