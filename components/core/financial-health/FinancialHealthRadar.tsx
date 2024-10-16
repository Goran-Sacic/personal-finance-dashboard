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
	Legend,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from 'recharts';

const financialHealthData = [
	{ subject: 'Savings', A: 120, B: 110, fillMark: 150 },
	{ subject: 'Investments', A: 98, B: 130, fillMark: 150 },
	{ subject: 'Debt', A: 86, B: 130, fillMark: 150 },
	{ subject: 'Income', A: 99, B: 100, fillMark: 150 },
	{ subject: 'Expenses', A: 85, B: 90, fillMark: 150 },
	{ subject: 'Credit Score', A: 65, B: 85, fillMark: 150 },
];

const FinancialHealthRadar = () => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Financial Health Radar</CardTitle>
				<CardDescription>
					Comparison of your financial metrics against benchamrks
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<RadarChart
						cx='50%'
						cy='50%'
						outerRadius='80%'
						data={financialHealthData}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey='subject' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} />
						<Radar
							name='You'
							dataKey='A'
							stroke='#8884d8'
							fill='#8884d8'
							fillOpacity={0.6}
						/>
						<Radar
							name='Benchmark'
							dataKey='B'
							stroke='#82ca9d'
							fill='#82ca9d'
							fillOpacity={0.6}
						/>
						<Legend />
					</RadarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default FinancialHealthRadar;
