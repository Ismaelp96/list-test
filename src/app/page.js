import Header from '@/components/header/Header';
import Products from '@/components/products/Products';

export default function Home() {
	return (
		<main className='w-full px-[15px] pt-5'>
			<Header />
			<Products />
		</main>
	);
}
