import { useState } from 'react';
import './App.css';

function App() {
	const [amount, setAmount] = useState(0);
	const [budget, setBudget] = useState({
		need: 0,
		want: 0,
		saving: 0,
	});

	const [currency, setCurrency] = useState('$');

	const calculateBudget = (amount) => {
		const need = (amount * 0.5).toFixed(2);
		const want = (amount * 0.3).toFixed(2);
		const saving = (amount * 0.2).toFixed(2);

		setBudget({ need, want, saving });
		setAmount(amount);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>50/30/20 Budget Calculator</h1>
				<label htmlFor="amount">Amount</label>
				<input
					id="amount"
					type="number"
					placeholder="Enter your desired amount..."
					onChange={(e) => calculateBudget(e.target.value)}
					value={amount}
				/>

				<label htmlFor="currency">Currency</label>
				<input
					id="currency"
					type="text"
					placeholder="Enter your currency..."
					onChange={(e) => setCurrency(e.target.value)}
					value={currency}
				/>

				<h2>Your Budget according to 50/30/20 rule is</h2>
				<p>
					The available expense for need:{' '}
					{`${currency} ${budget.need}`}
				</p>
				<p>
					The available expense for want:{' '}
					{`${currency} ${budget.want}`}
				</p>
				<p>This is your savings: {`${currency} ${budget.saving}`}</p>
			</header>
		</div>
	);
}

export default App;
