'use client';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Specifications from './specifications/Specifications';
import Midea from './midea/Midea';

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

	return (
		<div className='fixed w-full h-full flex items-center justify-center top-0 left-0 '>
			<div
				className='absolute w-full h-full bg-black/50'
				onClick={onClose}></div>
			<Card className='w-full max-w-[95%] h-auto z-10 py-4'>
				<Tabs defaultValue='caracteristicas' className='w-full px-4 space-y-2'>
					<TabsList>
						<TabsTrigger value='caracteristicas'>Características</TabsTrigger>
						<TabsTrigger value='midea'>Mídia</TabsTrigger>
					</TabsList>
					<CardHeader>
						<CardDescription>{product.name}</CardDescription>
					</CardHeader>
					<CardContent>
						<TabsContent value='caracteristicas'>
							<Specifications product={product} productId={productId} />
						</TabsContent>
						<TabsContent value='midea'>
							<Midea />
						</TabsContent>
					</CardContent>
				</Tabs>
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
