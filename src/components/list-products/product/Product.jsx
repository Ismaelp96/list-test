import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
	CircleAlert,
	CircleHelp,
	FileWarning,
	Info,
	TriangleAlert,
} from 'lucide-react';

export default function Product() {
	return (
		<Card className='w-full max-w-[90%]'>
			<CardHeader>
				<CardTitle>Detalhes do produto</CardTitle>
				<CardDescription>
					Visualize os detalhes do produto ou altere-os
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className='w-full flex justify-between gap-10'>
						<div className='flex flex-col w-full'>
							<div className='flex flex-col gap-1.5'>
								<div className='flex items-center gap-1'>
									<Label htmlFor='name'>Título</Label>
									<HoverCard>
										<HoverCardTrigger asChild>
											<Info className='text-blue-500 w-4 h-4' />
										</HoverCardTrigger>
										<HoverCardContent className='w-full max-w-[300px]'>
											<p className='text-sm'>Caracteres: 38</p>
										</HoverCardContent>
									</HoverCard>
								</div>
								<Input
									id='name'
									placeholder='Insira ou altere o titulo do produto'
								/>
								<div className='flex justify-end'>
									<div className='flex items-center gap-2'>
										<Switch checked />
										<Label>Ativo</Label>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-1.5'>
								<div className='flex items-center gap-1'>
									<Label htmlFor='name'>Título de Publicação (SKU)</Label>
									<HoverCard>
										<HoverCardTrigger asChild>
											<TriangleAlert className='text-yellow-500 w-4 h-4' />
										</HoverCardTrigger>
										<HoverCardContent className='w-full max-w-[600px]'>
											<p className='text-sm'>
												Este é o titulo que será enviado aos Marketplaces,
												procure colocar as palavras chave do produto afim de
												melhorar a indexação e a localização do produto pelos
												seus clientes.
											</p>
										</HoverCardContent>
									</HoverCard>
								</div>
								<Input
									id='name'
									placeholder='Insira ou altere o titulo do produto'
								/>
							</div>
						</div>
						<div className='w-full flex flex-col gap-4'>
							<div className='flex flex-col gap-1.5'>
								<Label htmlFor='name'>Marca</Label>
								<Select>
									<SelectTrigger id='framework' className='w-full'>
										<SelectValue placeholder='Select' />
									</SelectTrigger>
									<SelectContent position='popper'>
										<SelectItem value='next'>Next.js</SelectItem>
										<SelectItem value='sveltekit'>SvelteKit</SelectItem>
										<SelectItem value='astro'>Astro</SelectItem>
										<SelectItem value='nuxt'>Nuxt.js</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='flex flex-col gap-1.5'>
								<div className='flex items-center gap-1'>
									<Label htmlFor='name'>NBM/NCM</Label>
									<HoverCard>
										<HoverCardTrigger asChild>
											<CircleHelp className='text-blue-500 w-4 h-4' />
										</HoverCardTrigger>
										<HoverCardContent className='w-full max-w-[600px]'>
											<p className='text-sm'>
												Digite ao menos 2 caracteres para exibir e filtrar a
												lista de NBM/NCM.
											</p>
										</HoverCardContent>
									</HoverCard>
								</div>
								<Input
									id='name'
									placeholder='Insira ou altere o NBM/NCM do produto'
								/>
							</div>
							<div className='flex flex-col gap-1.5'>
								<Label htmlFor='framework'>Origem</Label>
								<Select>
									<SelectTrigger id='framework' className='w-full'>
										<SelectValue placeholder='Select' />
									</SelectTrigger>
									<SelectContent position='popper'>
										<SelectItem value='next'>Next.js</SelectItem>
										<SelectItem value='sveltekit'>SvelteKit</SelectItem>
										<SelectItem value='astro'>Astro</SelectItem>
										<SelectItem value='nuxt'>Nuxt.js</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button variant='outline'>Cancel</Button>
				<Button>Deploy</Button>
			</CardFooter>
		</Card>
	);
}
