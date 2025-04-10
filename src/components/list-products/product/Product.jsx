'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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

import { useQuery } from '@tanstack/react-query';
import { CircleHelp, Info, TriangleAlert } from 'lucide-react';

export default function Product({ productId, onClose }) {
	const {
		data: product,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['product', productId],
		queryFn: async () => {
			const res = await fetch(`http://localhost:3333/products/${productId}`);
			if (!res.ok) throw new Error('Erro ao buscar produto');
			return res.json();
		},
		enabled: !!productId,
	});

	if (isLoading) return null;
	if (isError) return <p>Erro ao carregar o produto.</p>;
	const garantia = product.garantia > 12 ? ' Ano' : ' Meses';

	return (
		<div className='fixed w-full h-full flex items-center justify-center top-0 left-0 '>
			<div
				className='absolute w-full h-full bg-black/50'
				onClick={onClose}></div>
			<Card className='w-full max-w-[60%] z-10'>
				<CardHeader>
					<CardTitle>Detalhes do produto</CardTitle>
					<CardDescription>{product.name}</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='w-full flex justify-between gap-10'>
							<div className='flex flex-col gap-4 w-full'>
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
										id={productId}
										name={product.name}
										placeholder='Insira ou altere o titulo do produto'
										defaultValue={product.name}
									/>
									<div className='flex justify-end'>
										<div className='flex items-center gap-2'>
											<Switch
												checked={product.status === 'ativo' ? true : false}
											/>
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
										defaultValue={product.name}
									/>
								</div>
								<div className='w-full flex justify-between gap-2'>
									<div className='flex flex-col gap-1.5  w-full'>
										<div className='flex items-center gap-1'>
											<Label htmlFor='name'>Garantia</Label>
										</div>
										<Input
											id='garantia'
											name='garantia'
											defaultValue={product.garantia + garantia}
										/>
									</div>
									<div className='flex flex-col gap-1.5 w-full'>
										<div className='flex items-center gap-1'>
											<Label htmlFor='name'>SKU Interno</Label>
										</div>
										<Input
											id={product.sku}
											name={product.sku}
											defaultValue={product.sku}
										/>
									</div>
									<div className='flex flex-col gap-1.5  w-full'>
										<div className='flex items-center gap-1'>
											<Label htmlFor='name'>Código de Barras</Label>
										</div>
										<Input
											id={product.cod}
											name={product.cod}
											defaultValue={product.cod}
										/>
									</div>
								</div>
								<div className='flex flex-col gap-1.5  w-full'>
									<div className='flex items-center gap-1'>
										<Checkbox />
										<Label htmlFor='name'>
											Permitir criação automática de anúncios
										</Label>
										<HoverCard>
											<HoverCardTrigger asChild>
												<CircleHelp className='text-blue-500 w-4 h-4' />
											</HoverCardTrigger>
											<HoverCardContent className='w-full max-w-[600px]'>
												<p className='text-sm'>
													Se esta opção estiver marcada, o produto poderá ter
													seus anúncios criados automaticamente nos Marketplaces
													configurados na categoria ou selecionados em tela.
												</p>
											</HoverCardContent>
										</HoverCard>
									</div>
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
											<SelectItem value={product.marca}>
												{product.marca}
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className='flex flex-col gap-1.5'>
									<div className='flex items-center gap-1'>
										<Label htmlFor='name'>NCM</Label>
										<HoverCard>
											<HoverCardTrigger asChild>
												<CircleHelp className='text-blue-500 w-4 h-4' />
											</HoverCardTrigger>
											<HoverCardContent className='w-full max-w-[600px]'>
												<p className='text-sm'>
													Digite ao menos 2 caracteres para exibir e filtrar a
													lista de NCM.
												</p>
											</HoverCardContent>
										</HoverCard>
									</div>
									<Input
										id={product.ncm}
										name={product.ncm}
										defaultValue={product.ncm}
									/>
								</div>
								<div className='flex flex-col gap-1.5'>
									<Label htmlFor='origem'>Origem</Label>
									<Select>
										<SelectTrigger id='origem' className='w-full'>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent position='popper'>
											<SelectItem value={product.origem}>
												{product.origem}
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className='flex flex-col gap-1.5'>
									<div className='flex items-center gap-1'>
										<Label htmlFor='name'>Quantidade no estoque físico</Label>
										<HoverCard>
											<HoverCardTrigger asChild>
												<CircleHelp className='text-blue-500 w-4 h-4' />
											</HoverCardTrigger>
											<HoverCardContent className='w-full max-w-[600px]'>
												<p className='text-sm'>
													Estoque atual: Estoque Físico {product.estoque}, Em
													Pedido {product.estoque}, Disponível{product.marca};
													Custo: R$1,00
												</p>
											</HoverCardContent>
										</HoverCard>
									</div>
									<Input
										id={product.estoque}
										name={product.estoque}
										defaultValue={product.estoque}
										disabled
									/>
								</div>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button variant='destructive' onClick={onClose}>
						Cancelar
					</Button>
					<Button>Confirmar</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
