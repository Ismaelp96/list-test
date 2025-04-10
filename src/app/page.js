import Header from '@/components/header/Header';
import ListProducts from '@/components/list-products/ListProducts';

import Product from '@/components/list-products/product/Product';

export default function Home() {
	return (
		<main className='w-full px-[15px] pt-5'>
			{/* <Header />
			<ListProducts /> */}
			<Product />
		</main>
	);
}
