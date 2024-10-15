'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import * as React from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const spendingData = [
	{ category: 'Housing', amount: 2500 },
	{ category: 'Transportation', amount: 800 },
	{ category: 'Food', amount: 1000 },
	{ category: 'Utilites', amount: 500 },
	{ category: 'Healthcare', amount: 600 },
	{ category: 'Entertainment', amount: 400 },
	{ category: 'Clothing', amount: 200 },
	{ category: 'Savings', amount: 3000 },
];

interface IWalletSpendingCategoriesProps {}

const WalletSpendingCategories: React.FunctionComponent<
	IWalletSpendingCategoriesProps
> = (props) => {
	return (
		<Card className='w-full max-w-3xl mx-auto bg-purple-50'>
			<CardHeader>
				<CardTitle>Spending by Category</CardTitle>
				<CardDescription>Breakdown of your monthly expenses</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={400}>
					<BarChart
						data={spendingData}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis />
						<YAxis />
						<Tooltip
							formatter={(value) => [`$${value}`, 'Amount']}
							labelStyle={{ color: 'black' }}
						/>
						<Legend />
						<Bar dataKey='amount' fill='#8884d8' />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default WalletSpendingCategories;
