import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Personal Finance Dashboard',
	description: 'A Personal Finance Dashboard for income and expenses tracking',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='flex h-screen bg-zinc-900 text-white'>
					<Sidebar />
					<main className='flex-1 overflow-auto max-h-screen'>
						<div className='p-8'>{children}</div>
					</main>
				</div>
			</body>
		</html>
	);
}
