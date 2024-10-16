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
	Area,
	AreaChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const cashFlowData = [
	{
		month: 'Jan',
		income: 4000,
		expenses: 2400,
		savings: 1600,
	},
	{
		month: 'Feb',
		income: 3500,
		expenses: 2200,
		savings: 1300,
	},
	{
		month: 'Mar',
		income: 5000,
		expenses: 2800,
		savings: 2200,
	},
	{
		month: 'Apr',
		income: 4200,
		expenses: 2600,
		savings: 1600,
	},
	{
		month: 'May',
		income: 4800,
		expenses: 2700,
		savings: 2100,
	},
	{
		month: 'Jun',
		income: 5200,
		expenses: 3000,
		savings: 2200,
	},
];

const Cashflow = () => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Cash Flow Stream</CardTitle>
				<CardDescription>
					Visualizing income, expenses and savings over time
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={400}>
					<AreaChart
						data={cashFlowData}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='month' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Area
							type='monotone'
							dataKey='income'
							stackId='1'
							stroke='#8884d8'
							fill='#8884d8'
						/>
						<Area
							type='monotone'
							dataKey='expenses'
							stackId='1'
							stroke='#82ca9d'
							fill='#82ca9d'
						/>
						<Area
							type='monotone'
							dataKey='savings'
							stackId='1'
							stroke='#ffc658'
							fill='#ffc658'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default Cashflow;
