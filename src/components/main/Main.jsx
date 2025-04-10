'use client';
import { useState } from 'react';

import Header from '@/components/header/Header';
import ListProducts from '@/components/list-products/ListProducts';
import Product from '@/components/list-products/product/Product';
// import { ProductProvider } from '@/context/ProductContext';

export default function Main() {
	const [selectedProductId, setSelectedProductId] = useState(null);
	return (
		<main className='w-full px-[15px] pt-5 h-screen'>
			<Header />
			<ListProducts onSelectProduct={setSelectedProductId} />
			{selectedProductId && (
				<Product
					productId={selectedProductId}
					onClose={() => setSelectedProductId(null)}
				/>
			)}
		</main>
	);
}
