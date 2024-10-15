import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as React from 'react';

const ProfileSettings = () => {
	return (
		<Card className='bg-purple-50'>
			<CardHeader>
				<CardTitle>Profile Information</CardTitle>
				<CardDescription>Update your personal details here</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='flex items-center space-x-4'>
					<Avatar className='w-20 h20'>
						<AvatarImage src='/placeholder.svg' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='space-y-2'>
						<Label htmlFor='firstName'>First Name</Label>
						<Input id='firstName' placeholder='John' />
					</div>
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='space-y-2'>
						<Label htmlFor='lastName'>Last Name</Label>
						<Input id='lastName' placeholder='Doe' />
					</div>
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='space-y-2'>
						<Label htmlFor='email'>Email</Label>
						<Input id='email' placeholder='john.doe@example.com' />
					</div>
				</div>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='space-y-2'>
						<Label htmlFor='phoneNumber'>Phone Number</Label>
						<Input id='phoneNumber' placeholder='+385 99 999 9999' />
					</div>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='bio'>Bio</Label>
					<Input id='bio' placeholder='Tell us about yourself' />
				</div>
			</CardContent>
		</Card>
	);
};

export default ProfileSettings;
