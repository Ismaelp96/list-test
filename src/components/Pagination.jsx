'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import {
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from './ui/pagination';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
					<PaginationLink
						href='#'
						onClick={() => updatePage(i)}
						isActive={page === i}>
						{i}
					</PaginationLink>
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
					onClick={() => updatePage(page - 1)}
					disabled={page === 1}>
					<ArrowLeft />
				</Button>
			</PaginationItem>
			{renderPages()}
			<PaginationItem>
				<Button
					variant='outline'
					onClick={() => updatePage(page + 1)}
					disabled={page === totalPages}
					className='cursor-pointer'>
					<ArrowRight />
				</Button>
			</PaginationItem>
		</PaginationContent>
	);
}
