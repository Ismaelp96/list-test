'use client';
import { useQuery } from '@tanstack/react-query';

import Pagination from '@/components/Pagination';
import { useSearchParams } from 'next/navigation';
export default function Products() {
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

	if (isLoading) {
		return <p>Carregando...</p>;
	}

	if (isError) {
		return <p>Erro ao carregar produtos.</p>;
	}

	return (
		<div>
			{productsResponse?.data.map((product) => (
				<p key={product.id}>{product.name}</p>
			))}
			{productsResponse && (
				<Pagination
					page={currentPage}
					totalPages={productsResponse.totalPages}
				/>
			)}
		</div>
	);
}
