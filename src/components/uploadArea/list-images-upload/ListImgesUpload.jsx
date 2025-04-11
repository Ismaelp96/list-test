import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Heart, X } from 'lucide-react';

export default function ListImagesUpload({
	files,
	removeFile,
	moveFile,
	setAsMain,
	onFilesChange,
}) {
	const handleRemoveFile = (index) => {
		removeFile(index);
		const upload = files.filter((_, i) => i !== index);
		onFilesChange?.(upload);
	};

	return (
		<div>
			{files.length > 0 && (
				<div className='w-full mt-4 grid grid-cols-4 gap-4'>
					{files.map((item, index) => (
						<div className='flex flex-col gap-1.5 p-2' key={index}>
							<div className='w-full flex flex-col gap-2'>
								<div className='flex items-center justify-between w-full top-0 left-0'>
									{item.isMain && (
										<Heart className=' fill-red-500 w-5 h-5 text-red-500' />
									)}
									<Button
										variant='ghost'
										onClick={() => handleRemoveFile(index)}>
										<X />
									</Button>
								</div>
								<div className='relative w-full'>
									<img
										src={URL.createObjectURL(item.file)}
										alt={`Preview ${index}`}
										className='w-full h-[100px] object-cover rounded'
									/>
									<div
										onClick={() => setAsMain(index)}
										className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full bg-transparent opacity-0 hover:opacity-100 flex justify-center items-center hover:cursor-pointer hover:bg-background/50 transiton-all duration-200'>
										Tornar Principal
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
