'use strict';

function setBudgetAmount(need, want, savings) {
	const expenseForNeed = document.getElementById('expense-for-need');
	const expenseForWant = document.getElementById('expense-for-want');
	const amountToSave = document.getElementById('amount-to-save');

	expenseForNeed.innerText = need;
	expenseForWant.innerText = want;
	amountToSave.innerText = savings;
}

function calculateBudget(event) {
	event.preventDefault();
	const formData = new FormData(budgetCalculatorForm);
	const amount = Number(formData.get('amount'));
	const want = parseFloat(amount * 0.3).toFixed(2);
	const need = parseFloat(amount * 0.5).toFixed(2);
	const savings = parseFloat(amount * 0.2).toFixed(2);

	setBudgetAmount(need, want, savings);
}

const budgetCalculatorForm = document.getElementById('budget-calculator-form');
budgetCalculatorForm.addEventListener('submit', calculateBudget);
