import AssetAllocation from '@/components/core/investments/AssetAllocation';
import InvestmentHoldings from '@/components/core/investments/InvestmentHoldings';
import InvestmentOverviewCards from '@/components/core/investments/InvestmentOverviewCards';
import PortfolioPerformance from '@/components/core/investments/PortfolioPerformance';
import SectorAnalysis from '@/components/core/investments/SectorAnalysis';
import { Button } from '@/components/ui/button';
import * as React from 'react';

const performanceData = [
	{ name: 'Jan', stocks: 40000, bonds: 24000, realestate: 24000 },
	{ name: 'Feb', stocks: 30000, bonds: 13980, realestate: 22100 },
	{ name: 'Mar', stocks: 50000, bonds: 38000, realestate: 22900 },
	{ name: 'Apr', stocks: 48000, bonds: 39080, realestate: 20000 },
	{ name: 'Man', stocks: 60000, bonds: 48000, realestate: 21810 },
	{ name: 'Jun', stocks: 58000, bonds: 38000, realestate: 25000 },
];

const allocationData = [
	{ name: 'Stocks', value: 400000, color: '#0088FE' },
	{ name: 'Bonds', value: 300000, color: '#00C49F' },
	{ name: 'Real Estate', value: 200000, color: '#FFBB28' },
	{ name: 'Commodities', value: 100000, color: '#FF8042' },
	{ name: 'Crypto', value: 50000, color: '#8884D8' },
];

const investments = [
	{
		id: 1,
		name: 'Apple Inc.',
		symbol: 'AAPL',
		amount: 150000,
		change: 2.5,
		sector: 'Technology',
	},
	{
		id: 2,
		name: 'Microsoft Corporation',
		symbol: 'MSFT',
		amount: 135000,
		change: -1.2,
		sector: 'Technology',
	},
	{
		id: 3,
		name: 'Amazon.com Inc.',
		symbol: 'AMZN',
		amount: 114000,
		change: 1.8,
		sector: 'Consumer Cyclical',
	},
	{
		id: 4,
		name: 'Tesla Inc.',
		symbol: 'TSLA',
		amount: 96000,
		change: -2.7,
		sector: 'Consumer Cyclical',
	},
	{
		id: 5,
		name: 'Alphabet Inc.',
		symbol: 'GOOGL',
		amount: 126000,
		change: 0.9,
		sector: 'Communication Services',
	},
	{
		id: 6,
		name: 'Johnson & Johnson',
		symbol: 'JNJ',
		amount: 108000,
		change: 0.5,
		sector: 'Healthcare',
	},
	{
		id: 7,
		name: 'JPMorgan Chase & Co.',
		symbol: 'JPM',
		amount: 117000,
		change: -0.8,
		sector: 'Financial Services',
	},
	{
		id: 8,
		name: 'Visa Inc.',
		symbol: 'V',
		amount: 99000,
		change: 1.2,
		sector: 'Financial Services',
	},
];

const Investments = () => {
	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>Investment Portfolio</h1>
				<Button>Generate Report</Button>
			</div>
			<InvestmentOverviewCards />
			<PortfolioPerformance data={performanceData} />
			<div className='grid gap-6 md:grid-cols-2'>
				<AssetAllocation data={allocationData} />
				<SectorAnalysis data={investments} />
			</div>
			<InvestmentHoldings investments={investments} />
		</div>
	);
};

export default Investments;
