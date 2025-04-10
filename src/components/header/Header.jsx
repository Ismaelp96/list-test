'use client';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Menu } from './menu/menu';
import { SunMoon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
	const { isDark, toggleTheme } = useTheme();
	return (
		<header className='w-full flex items-center justify-between'>
			<div className='w-full flex items-center gap-4'>
				<Image
					src={isDark ? '/logo-dark.svg' : '/logo-light.svg'}
					width={36}
					height={36}
					alt='Logo'
				/>

				<Input
					placeholder='Busca de produtos'
					type='text'
					className='w-full max-w-[400px]'
				/>
			</div>

			<div className='w-full flex items-center justify-end gap-4'>
				<Menu />
				<div className='flex items-center gap-2'>
					<Switch checked={isDark} onCheckedChange={toggleTheme} />
					<Label>
						<SunMoon className='stroke-1 w-8 h-8' />
					</Label>
				</div>
			</div>
		</header>
	);
}
