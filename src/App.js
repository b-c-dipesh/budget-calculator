import { useState } from 'react';

function App() {
	const [amount, setAmount] = useState('');
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
		<div className="container-fluid bg-light">
			<div className="container d-flex flex-column justify-content-center min-vh-100 mh-100 p-5">
				<header>
					<h1 className="text-center display-1">
						50/30/20 Budget Calculator
					</h1>
				</header>
				<main className="d-flex flex-column">
					<section className="my-5">
						<label className="form-label" htmlFor="amount">
							Amount
						</label>
						<input
							className="form-control shadow-sm"
							id="amount"
							type="number"
							placeholder="Enter your desired amount..."
							onChange={(e) => calculateBudget(e.target.value)}
							value={amount}
						/>
						<br />
						<label className="form-label" htmlFor="currency">
							Currency
						</label>
						<input
							className="form-control shadow-sm"
							id="currency"
							type="text"
							placeholder="Enter your currency..."
							onChange={(e) => setCurrency(e.target.value)}
							value={currency}
						/>
					</section>
					<section className="my-5">
						<h4 className="display-4">
							Your Budget according to 50/30/20 rule is
						</h4>
						<p>
							The available expense for need:{' '}
							{`${currency} ${budget.need}`}
						</p>
						<p>
							The available expense for want:{' '}
							{`${currency} ${budget.want}`}
						</p>
						<p>
							This is your savings:{' '}
							{`${currency} ${budget.saving}`}
						</p>
					</section>
				</main>
			</div>
		</div>
	);
}

export default App;
