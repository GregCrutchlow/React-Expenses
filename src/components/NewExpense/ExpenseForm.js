import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	return (
		<form action=''>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor=''>Title</label>
					<input
						type='text'
						onChange={titleChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor=''>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor=''>Date</label>
					<input
						type='date'
						min='2023-01-01'
						max='2025-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;