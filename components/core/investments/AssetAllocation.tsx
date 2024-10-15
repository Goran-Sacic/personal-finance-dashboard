'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Description } from '@radix-ui/react-toast';
import * as React from 'react';
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';

interface AssetAllocationData {
	name: string;
	value: number;
	color: string;
}

interface AssetAllocationProps {
	data: AssetAllocationData[];
}

const AssetAllocation = ({ data }: AssetAllocationProps) => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Asset Allocation</CardTitle>
				<Description>Current distribution of your investments</Description>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<PieChart>
						<Pie
							data={data}
							cx='50%'
							cy='50%'
							labelLine={false}
							outerRadius={80}
							fill='#8884D8'
							dataKey='value'
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default AssetAllocation;
