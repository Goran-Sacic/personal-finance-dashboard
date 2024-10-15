import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

const BillingSettings = () => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Billing Information</CardTitle>
				<CardDescription>
					Manage your billing details and subscription
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='space-y-2'>
					<Label>Current Plan</Label>
					<p className='text-sm font-medium'>Pro Plan ($19.99/month)</p>
				</div>
				<Separator />
				<div className='space-y-2'>
					<Label htmlFor='card-number'>Card Number</Label>
					<Input id='card-number' placeholder='**** **** **** 1234' />
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='space-y-2'>
						<Label htmlFor='expiry-date'>Expiry date</Label>
						<Input id='expiry-date' placeholder='MM/YY' />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='cvv'>CVV</Label>
						<Input id='expiry-date' placeholder='***' />
					</div>
				</div>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button variant={'outline'}>Cancel Subscription</Button>
				<Button>Update Billing Info</Button>
			</CardFooter>
		</Card>
	);
};

export default BillingSettings;
