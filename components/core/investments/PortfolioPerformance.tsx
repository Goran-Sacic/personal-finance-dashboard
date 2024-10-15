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
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

interface PerformanceData {
	name: string;
	stocks: number;
	bonds: number;
	realestate: number;
}

interface PortfolioPerformanceProps {
	data: PerformanceData[];
}

const PortfolioPerformance = ({ data }: PortfolioPerformanceProps) => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Portfolio Performance</CardTitle>
				<CardDescription>
					Track your investments across different asset classes
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray='3-3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='stocks' stroke='#0088FE' />
						<Line type='monotone' dataKey='bonds' stroke='#00C49F' />
						<Line type='monotone' dataKey='realestate' stroke='#FFBB28' />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default PortfolioPerformance;
