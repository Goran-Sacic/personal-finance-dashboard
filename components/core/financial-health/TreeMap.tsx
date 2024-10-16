'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import * as React from 'react';
import { ResponsiveContainer, Tooltip, Treemap } from 'recharts';

const assetAllocationData = [
	{
		name: 'Stocks',
		children: [
			{
				name: 'Technology',
				size: 4000,
			},
			{
				name: 'Healthcare',
				size: 3000,
			},
			{
				name: 'Finance',
				size: 2000,
			},
			{
				name: 'Consumer Goods',
				size: 1000,
			},
		],
	},
	{
		name: 'Bonds',
		children: [
			{
				name: 'Government',
				size: 3000,
			},
			{
				name: 'Corporate',
				size: 2000,
			},
			{
				name: 'Municipal',
				size: 1000,
			},
		],
	},
	{
		name: 'Real Estate',
		children: [
			{
				name: 'Residential',
				size: 2000,
			},
			{
				name: 'Commercial',
				size: 1500,
			},
		],
	},
	{
		name: 'Cash',
		children: [
			{
				name: 'Savings',
				size: 1000,
			},
			{
				name: 'Money Market',
				size: 500,
			},
			{
				name: 'Finance',
				size: 2000,
			},
		],
	},
];

const TreeMap = () => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Asset Allocation Treemap</CardTitle>
				<CardDescription>
					Hierarchical view of your investment portfolio
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<Treemap
						data={assetAllocationData}
						dataKey='size'
						aspectRatio={4 / 3}
						stroke='#fff'
						fill='#8884d8'
					>
						<Tooltip
							content={<CustomTooltip active={false} payload={[]} label={''} />}
						/>
					</Treemap>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

const CustomTooltip = ({
	active,
	payload,
}: /* label, */
{
	active: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any[];
	label: string;
}) => {
	if (active && payload && payload.length) {
		return (
			<div className='bg-white p-2 border-gray-300 rounded shadow'>
				<p className='font-bold'>{`${payload[0].payload.name}: $${payload[0].value}`}</p>
			</div>
		);
	}
};

export default TreeMap;
