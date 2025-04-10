'use client';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import Pagination from '@/components/Pagination';
import { DataTable } from './products-table/DataTable';
import { Check, X } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

import { useProduct } from '@/context/ProductContext';
import { Button } from '../ui/button';

export default function ListProducts({ onSelectProduct }) {
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page')) || 1;
	const {
		data: productsResponse,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['get-products', currentPage],
		queryFn: async () => {
			const response = await fetch(
				`http://localhost:3333/products?_page=${currentPage}&_per_page=10`,
			);

			if (!response.ok) {
				throw new Error('Erro ao buscar produtos');
			}

			const data = await response.json();

			return data;
		},

		keepPreviousData: true,
	});

	const columns = [
		{
			accessorKey: 'sku',
			header: 'SKUS',
			cell: ({ row }) => (
				<Button onClick={() => onSelectProduct(row.original.id)} variant='link'>
					{row.original.sku}
				</Button>
			),
		},
		{
			accessorKey: 'name',
			header: 'Nome',
			cell: ({ row }) => (
				<Button onClick={() => onSelectProduct(row.original.id)} variant='link'>
					{row.original.name}
				</Button>
			),
		},

		{
			accessorKey: 'category',
			header: 'Categoria',
		},
		{
			accessorKey: 'marca',
			header: 'Marca',
		},
		{
			accessorKey: 'price',
			header: 'Preço',
			cell: ({ row }) => formatCurrency(row.original.price),
		},
		{
			accessorKey: 'type',
			header: 'Tipo',
		},

		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				return row.original.status === 'ativo' ? (
					<Check className='text-green-600 w-4 h-5 inline-flex justify-center items-center' />
				) : (
					<X className='text-red-600 w-4 h-5 inline-flex justify-center items-center' />
				);
			},
			meta: {
				className: 'w-[60px] text-center',
			},
		},
	];

	if (isLoading) return <p>Carregando...</p>;
	if (isError) return <p>Erro ao carregar produtos.</p>;

	return (
		<div className='p-6 w-full flex items-start flex-col gap-2'>
			<DataTable columns={columns} data={productsResponse?.data || []} />
			<div className=' w-full flex items-center justify-end'>
				{productsResponse && (
					<Pagination
						page={currentPage}
						totalPages={productsResponse.totalPages}
					/>
				)}
			</div>
		</div>
	);
}
