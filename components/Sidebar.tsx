import * as React from 'react';
import {
	BarChartIcon,
	DollarSign,
	Settings,
	TrendingUp,
	Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const Sidebar = () => {
	return (
		<aside className='w-64 bg-zinc-800 p-6'>
			<div className='flex items-center mb-8'>
				<div className='w-8 h-8 bg-purple-500 rounded-full mr-2 flex items-center justify-center'>
					<DollarSign className='w-5 h-5 text-white' />
				</div>
				<h1 className='text-2xl font-bold'>FinanceFlow</h1>
			</div>
			<nav>
				<Link href='/' passHref>
					<Button variant='ghost' className='w-full justify-start mb2'>
						<BarChartIcon className='mr-2 h-4 w-4' />
						Financial Health
					</Button>
				</Link>
				<Link href='/wallet' passHref>
					<Button variant='ghost' className='w-full justify-start mb2'>
						<Wallet className='mr-2 h-4 w-4' />
						Wallet
					</Button>
				</Link>
				<Link href='/investments' passHref>
					<Button variant='ghost' className='w-full justify-start mb2'>
						<TrendingUp className='mr-2 h-4 w-4' />
						Investments
					</Button>
				</Link>
				<Link href='/settings' passHref>
					<Button variant='ghost' className='w-full justify-start mb2'>
						<Settings className='mr-2 h-4 w-4' />
						Settings
					</Button>
				</Link>
			</nav>
		</aside>
	);
};

export default Sidebar;
