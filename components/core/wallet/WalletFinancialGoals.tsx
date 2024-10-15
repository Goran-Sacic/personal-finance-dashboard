import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import * as React from 'react';

interface IWalletFinancialGoalsProps {}

const WalletFinancialGoals: React.FunctionComponent<
	IWalletFinancialGoalsProps
> = (props) => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Financial Goals</CardTitle>
				<CardDescription>
					Track your progress towards your goals
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div>
						<div className='flex justify-between mb-1'>
							<span className='text-sm font-medium'>Emergency Fund</span>
							<span className='text-sm font-medium'>70%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:b-gray-700'>
							<div
								className='bg-blue-600 h-2.5 rounded-full'
								style={{ width: '70%' }}
							></div>
						</div>
					</div>
					<div>
						<div className='flex justify-between mb-1'>
							<span className='text-sm font-medium'>Vacation Savings</span>
							<span className='text-sm font-medium'>45%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:b-gray-700'>
							<div
								className='bg-green-600 h-2.5 rounded-full'
								style={{ width: '45%' }}
							></div>
						</div>
					</div>
					<div>
						<div className='flex justify-between mb-1'>
							<span className='text-sm font-medium'>New Car</span>
							<span className='text-sm font-medium'>20%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:b-gray-700'>
							<div
								className='bg-yellow-600 h-2.5 rounded-full'
								style={{ width: '20%' }}
							></div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default WalletFinancialGoals;
