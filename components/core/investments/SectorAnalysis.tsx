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
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

interface InvestmentData {
	sector: string;
	amount: number;
}

interface SectorAnalysis {
	data: InvestmentData[];
}

const SectorAnalysis = ({ data }: SectorAnalysis) => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Sector Analysis</CardTitle>
				<CardDescription>
					Investment distribution across sectors
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray='3-3' />
						<XAxis dataKey='sector' />
						<YAxis />
						<Tooltip />
						<Bar dataKey='amount' fill='#8884D8' />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default SectorAnalysis;
