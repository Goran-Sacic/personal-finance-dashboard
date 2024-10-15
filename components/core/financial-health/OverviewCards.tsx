import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import * as React from 'react';

const OverviewCards = () => {
	return (
		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Net Worth</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$1,320,801</div>
					<p className='text-xs text-muted-foreground'>
						+5.2% from last quarter
					</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>
						Investment Returns
					</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>8.5%</div>
					<p className='text-xs text-muted-foreground'>+Annual returns (YTD)</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>
						Debt-to-income Ratio
					</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>0.28</div>
					<p className='text-xs text-muted-foreground'>
						Healthy range: below 0.36
					</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>
						Financial Health Score
					</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>82/100</div>
					<p className='text-xs text-muted-foreground'>
						+3 points from last assessment
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default OverviewCards;
