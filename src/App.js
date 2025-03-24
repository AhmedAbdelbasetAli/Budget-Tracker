import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BudgetChart from './components/BudgetChart';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('transactions'));
    if (saved) setTransactions(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;

    setTransactions([...transactions, {
      id: uuidv4(),
      text,
      amount: +amount,
      type,
      date: new Date().toISOString(),
    }]);

    setText('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-6 font-['Inter']">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Budget Tracker
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-glass-dark backdrop-blur-xs rounded-2xl p-6 border border-glass-light shadow-xl">
            <TransactionForm
              text={text}
              amount={amount}
              type={type}
              setText={setText}
              setAmount={setAmount}
              setType={setType}
              addTransaction={addTransaction}
            />
          </div>

          <div className="bg-glass-dark backdrop-blur-xs rounded-2xl p-6 border border-glass-light shadow-xl">
            <BudgetChart transactions={transactions} />
          </div>
        </div>

        <div className="mt-8 bg-glass-dark backdrop-blur-xs rounded-2xl p-6 border border-glass-light shadow-xl">
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
      </div>
    </div>
  );
}

export default App;