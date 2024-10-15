import Cashflow from '@/components/core/financial-health/Cashflow';
import FinancialHealthRadar from '@/components/core/financial-health/FinancialHealthRadar';
import OverviewCards from '@/components/core/financial-health/OverviewCards';
import TreeMap from '@/components/core/financial-health/TreeMap';
import { Button } from '@/components/ui/button';

export default function FinancialHealth() {
	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>Financial Health</h1>
				<Button>Generate Detailed Report</Button>
			</div>
			<OverviewCards />
			<div className='grid gap-6 md:grid-cols-2'>
				<FinancialHealthRadar />
				<TreeMap />
			</div>
			<Cashflow />
		</div>
	);
}
