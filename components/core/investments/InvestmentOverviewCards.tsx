import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCardIcon, DollarSign, MinusIcon, PlusIcon } from 'lucide-react';
import * as React from 'react';

const InvestmentOverviewCards = () => {
	return (
		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Portfolio Value</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$945,000.00</div>
					<p className='text-xs text-muted-foreground'>Updated real-time</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>ROI</CardTitle>
					<PlusIcon className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>12.7%</div>
					<p className='text-xs text-muted-foreground'>Return on Investment</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Risk Level</CardTitle>
					<MinusIcon className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>63%</div>
					<p className='text-xs text-muted-foreground'>Moderate Risk</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>
						Diversification Score
					</CardTitle>
					<CreditCardIcon className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>82%</div>
					<p className='text-xs text-muted-foreground'>
						Well diversified portfolio
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default InvestmentOverviewCards;
