import Expenses from './components/Expenses';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2023, 2, 27),
		},
		{
			id: 'e2',
			title: 'House Insurance',
			amount: 185.05,
			date: new Date(2023, 2, 21),
		},
		{
			id: 'e3',
			title: 'Groceries',
			amount: 78.05,
			date: new Date(2023, 2, 22),
		},
		{
			id: 'e4',
			title: 'Outting',
			amount: 96.67,
			date: new Date(2023, 2, 24),
		},
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
