import { CircleHelp, Info, TriangleAlert } from 'lucide-react';

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
import { Textarea } from '@/components/ui/textarea';

export default function Specifications({ product, productId }) {
	const garantia = product.garantia > 12 ? ' Ano' : ' Meses';
	return (
		<form className='flex flex-col gap-6'>
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
										Este é o titulo que será enviado aos Marketplaces, procure
										colocar as palavras chave do produto afim de melhorar a
										indexação e a localização do produto pelos seus clientes.
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
					<div className='flex flex-col gap-1.5'>
						<Label htmlFor='origem'>Origem</Label>
						<Select>
							<SelectTrigger id='origem' className='w-full'>
								<SelectValue placeholder='Select' />
							</SelectTrigger>
							<SelectContent position='popper'>
								<SelectItem value={product.origem}>{product.origem}</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className='w-full flex justify-between items-center gap-4'>
						<div className='flex flex-col gap-1.5 w-full'>
							<Label htmlFor='name'>Marca</Label>
							<Select>
								<SelectTrigger id='framework' className='w-full'>
									<SelectValue placeholder={product.marca} />
								</SelectTrigger>
								<SelectContent position='popper'>
									<SelectItem value={product.marca}>{product.marca}</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='flex flex-col gap-1.5 w-full'>
							<div className='flex items-center gap-1'>
								<Label htmlFor='name'>Estoque Físico</Label>
								<HoverCard>
									<HoverCardTrigger asChild>
										<CircleHelp className='text-blue-500 w-4 h-4' />
									</HoverCardTrigger>
									<HoverCardContent className='w-full max-w-[600px]'>
										<p className='text-sm'>
											Estoque atual: Estoque Físico {product.estoque}, Em
											Pedido: {product.estoque}, Disponível{product.marca};
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
						<div className='flex flex-col gap-1.5 w-full'>
							<div className='flex items-center gap-1'>
								<Label htmlFor='name'>NCM</Label>
								<HoverCard>
									<HoverCardTrigger asChild>
										<CircleHelp className='text-blue-500 w-4 h-4' />
									</HoverCardTrigger>
									<HoverCardContent className='w-full max-w-[600px]'>
										<p className='text-sm'>
											Digite ao menos 2 caracteres para exibir e filtrar a lista
											de NCM.
										</p>
									</HoverCardContent>
								</HoverCard>
							</div>
							<Input
								id={product.ncm}
								name={product.ncm}
								defaultValue={product.ncm}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col gap-6'>
					<div className='flex flex-col gap-1.5'>
						<div className='flex items-center gap-1'>
							<Label htmlFor='name'>Categoria</Label>
						</div>
						<Input
							id={product.category}
							name={product.category}
							placeholder='Insira ou altere o titulo do produto'
							defaultValue={product.category}
							disabled
						/>
					</div>
					<div className='w-full flex justify-between items-center gap-4'>
						<div className='flex flex-col gap-1.5  w-full'>
							<Label htmlFor='name'>Garantia</Label>
							<Input
								id='garantia'
								name='garantia'
								defaultValue={product.garantia + garantia}
								disabled
							/>
						</div>
						<div className='flex flex-col gap-1.5 w-full'>
							<Label htmlFor='name'>SKU Interno</Label>
							<Input
								id={product.sku}
								name={product.sku}
								defaultValue={product.sku}
								disabled
							/>
						</div>
						<div className='flex flex-col gap-1.5  w-full'>
							<Label htmlFor='name'>Código de Barras</Label>
							<Input
								id={product.cod}
								name={product.cod}
								defaultValue={product.cod}
								disabled
							/>
						</div>
					</div>
					<div className='w-full flex justify-between items-center gap-4'>
						<div className='flex flex-col gap-1.5  w-full'>
							<Label htmlFor='name'>Peso</Label>
							<Input
								id='peso'
								name='peso'
								defaultValue={product.peso}
								disabled
							/>
						</div>
						<div className='flex flex-col gap-1.5  w-full'>
							<Label htmlFor='name'>Altura</Label>
							<Input
								id='altura'
								name='altura'
								defaultValue={product.altura}
								disabled
							/>
						</div>
						<div className='flex flex-col gap-1.5 w-full'>
							<Label htmlFor='name'>Largura</Label>
							<Input
								id={product.largura}
								name={product.largura}
								defaultValue={product.largura}
								disabled
							/>
						</div>
						<div className='flex flex-col gap-1.5  w-full'>
							<Label htmlFor='name'>Profundidade</Label>
							<Input
								id={product.profundidade}
								name={product.profundidade}
								defaultValue={product.profundidade}
								disabled
							/>
						</div>
					</div>
					<div className='flex justify-between'>
						<div className=' w-full flex flex-col gap-1.5'>
							<div className='flex items-center gap-1.5'>
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
											Se esta opção estiver marcada, o produto poderá ter seus
											anúncios criados automaticamente nos Marketplaces
											configurados na categoria ou selecionados em tela.
										</p>
									</HoverCardContent>
								</HoverCard>
							</div>
						</div>
						<div className='flex items-center gap-2'>
							<Switch checked={product.status === 'ativo' ? true : false} />
							<Label>Ativo</Label>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<Textarea defaultValue={product.description} />
			</div>
		</form>
	);
}
