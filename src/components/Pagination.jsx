'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { PaginationContent, PaginationItem } from './ui/pagination';
import { Button } from './ui/button';
import {
	ArrowLeft,
	ArrowLeftToLine,
	ArrowRight,
	ArrowRightToLine,
} from 'lucide-react';

export default function Pagination({ page, totalPages }) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	function updatePage(newPage) {
		if (newPage < 1 || newPage > totalPages) return;
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', String(newPage));
		router.push(`${pathname}?${params.toString()}`);
	}

	const renderPages = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<PaginationItem key={i}>
					<Button onClick={() => updatePage(i)} isActive={page === i}>
						{i}
					</Button>
				</PaginationItem>,
			);
		}
		return pages;
	};

	return (
		<PaginationContent>
			<PaginationItem>
				<Button
					variant='outline'
					className='cursor-pointer'
					onClick={() => updatePage(1)}
					disabled={page === 1}
					title='Ir para a primeira página'>
					<ArrowLeftToLine />
				</Button>
			</PaginationItem>
			<PaginationItem>
				<Button
					variant='outline'
					className='cursor-pointer'
					onClick={() => updatePage(page - 1)}
					title='Voltar a página'>
					<ArrowLeft />
				</Button>
			</PaginationItem>
			{renderPages()}
			<PaginationItem>
				<Button
					variant='outline'
					onClick={() => updatePage(page + 1)}
					className='cursor-pointer'
					title='Ir para a próxima página'>
					<ArrowRight />
				</Button>
			</PaginationItem>
			<PaginationItem>
				<Button
					variant='outline'
					className='cursor-pointer'
					onClick={() => updatePage(totalPages)}
					disabled={page === totalPages}
					title='Ir para a última página'>
					<ArrowRightToLine />
				</Button>
			</PaginationItem>
		</PaginationContent>
	);
}
