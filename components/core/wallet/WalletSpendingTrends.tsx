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
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const monthlySpendingData = [
	{ month: 'Jan', amount: 6800 },
	{ month: 'Feb', amount: 7100 },
	{ month: 'Mar', amount: 6950 },
	{ month: 'Apr', amount: 7200 },
	{ month: 'May', amount: 7050 },
	{ month: 'Jun', amount: 7000 },
];

interface IWalletSpendingTrendsProps {}

const WalletSpendingTrends: React.FunctionComponent<
	IWalletSpendingTrendsProps
> = (props) => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Monthly Spending Trend</CardTitle>
				<CardDescription>Your spending over the last 6 months</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<LineChart data={monthlySpendingData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='month' />
						<YAxis /* dataKey='amount' */ />
						<Tooltip />
						<Line type='monotone' dataKey='amount' stroke='#8884d8' />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default WalletSpendingTrends;
