import WalletFinancialGoals from '@/components/core/wallet/WalletFinancialGoals';
import WalletOverviewCards from '@/components/core/wallet/WalletOverviewCards';
import WalletSpendingCategories from '@/components/core/wallet/WalletSpendingCategories';
import WalletSpendingTrends from '@/components/core/wallet/WalletSpendingTrends';
import WalletTransactions from '@/components/core/wallet/WalletTransactions';
import { Button } from '@/components/ui/button';
import * as React from 'react';

interface IAppProps {}

const Wallet: React.FunctionComponent<IAppProps> = (props) => {
	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>My wallet</h1>
				<Button>Export Financial Report</Button>
			</div>
			<WalletOverviewCards />
			<div className='grid gap-6 md:grid-cols-2'>
				<WalletSpendingCategories />
				<WalletSpendingTrends />
			</div>
			<WalletTransactions />
			<WalletFinancialGoals />
		</div>
	);
};

export default Wallet;
