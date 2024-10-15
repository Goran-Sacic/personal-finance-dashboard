import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCardIcon, DollarSign, MinusIcon, PlusIcon } from 'lucide-react';
import * as React from 'react';

interface IWalletOverviewCardsProps {}

const WalletOverviewCards: React.FunctionComponent<
	IWalletOverviewCardsProps
> = (props) => {
	return (
		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Total Balance</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$35,750.20</div>
					<p className='text-xs text-muted-foreground'>+2.5% from last month</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Monthly Income</CardTitle>
					<PlusIcon className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$10,000.00</div>
					<p className='text-xs text-muted-foreground'>Salary</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>
						Monthly Expenses
					</CardTitle>
					<MinusIcon className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$7,000.00</div>
					<p className='text-xs text-muted-foreground'>70% of monthly income</p>
				</CardContent>
			</Card>
			<Card className='bg-purple-100'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Savings Rate</CardTitle>
					<CreditCardIcon className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>30%</div>
					<p className='text-xs text-muted-foreground'>
						$3,000 saved this month
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default WalletOverviewCards;
