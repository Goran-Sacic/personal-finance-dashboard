import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Car,
	CreditCard,
	DollarSign,
	HomeIcon,
	Plane,
	ShoppingBag,
	ShoppingBagIcon,
} from 'lucide-react';
import * as React from 'react';

const transactions = [
	{
		id: 1,
		date: '2023-09-28',
		description: 'Grocery Store',
		category: 'Food',
		amount: -250.5,
	},
	{
		id: 2,
		date: '2023-09-27',
		description: 'Monthly Rent',
		category: 'Housing',
		amount: -2500.0,
	},
	{
		id: 3,
		date: '2023-09-26',
		description: 'Electric Bill',
		category: 'Utilities',
		amount: -180.3,
	},
	{
		id: 4,
		date: '2023-09-25',
		description: 'Gas Station',
		category: 'Transportation',
		amount: -65.0,
	},
	{
		id: 5,
		date: '2023-09-24',
		description: 'Movie Theater',
		category: 'Entertainment',
		amount: -50.0,
	},
];

const categoryIcons = {
	Groceries: ShoppingBagIcon,
	Rent: HomeIcon,
	Utilities: HomeIcon,
	Transportation: Car,
	Entertainment: Plane,
	Healthcare: CreditCard,
	Clothing: ShoppingBag,
	Savings: DollarSign,
	Income: DollarSign,
};

interface IWalletTransactionsProps {}

const WalletTransactions: React.FunctionComponent<IWalletTransactionsProps> = (
	props
) => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Recent Transactions</CardTitle>
			</CardHeader>
			<CardDescription>
				Your financial activities for the past week
			</CardDescription>
			<CardContent>
				<div className='space-y-4'>
					{transactions.map((transaction) => {
						const IconComponent =
							categoryIcons[
								transaction.category as keyof typeof categoryIcons
							] || CreditCard;
						return (
							<div
								key={transaction.id}
								className='flex items-center justify-between border-b pb-2'
							>
								<div className='flex items-center space-x-4'>
									<div className='p-2 bg-gray-100 rounded-full'>
										<IconComponent className='h-4 w-4' />
									</div>
								</div>
								<div>
									<p className='font-medium'>{transaction.description}</p>
									<p className='text-sm text-gray-500'>{transaction.date}</p>
								</div>
								<div className='text-right'>
									<p
										className={`font-medium ${
											transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
										}`}
									>
										{transaction.amount > 0 ? '+' : '-'}$
										{Math.abs(transaction.amount).toFixed(2)}
									</p>
									<p className='text-sm text-gray-500'>
										{transaction.category}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
};

export default WalletTransactions;
