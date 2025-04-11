'use client';
import { useFileUpload } from '@/hooks/useFileUpload';
import { CloudUpload, FileImage, X } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

export default function UploadArea({ onFilesChange }) {
	const fileInputRef = useRef(null);
	const { files, addFiles, removeFile } = useFileUpload();

	const handleFileSelect = (e) => {
		if (e.target.files) {
			const selected = Array.from(e.target.files);
			addFiles(selected);
			onFilesChange?.([...files, ...selected]);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		if (e.dataTransfer.files) {
			const dropped = Array.from(e.dataTransfer.files);
			addFiles(dropped);
			onFilesChange?.([...files, ...dropped]);
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const openFileDialog = () => {
		fileInputRef.current?.click();
	};

	const handleRemoveFile = (index) => {
		removeFile(index);
		const upload = files.filter((_, i) => i !== index);
		onFilesChange?.(upload);
	};

	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			className='w-full flex flex-col items-center justify-center gap-4 border-2 border-dashed border-primary/50 rounded-lg p-6  transition hover:bg-primary-foreground'>
			<Badge className='self-start'>Envie fotos do produto</Badge>
			<CloudUpload size={120} />
			<p className='text-center'>
				Arraste e solte as fotos aqui <br />
				ou
			</p>
			<Button className='max-w-[40%]' onClick={openFileDialog}>
				Clique aqui para selecionar a foto
			</Button>
			<Input
				ref={fileInputRef}
				type='file'
				onChange={handleFileSelect}
				className='hidden'
			/>
			{files.length > 0 && (
				<div className='w-full mt-4 grid grid-cols-3 gap-2'>
					{files.map((file, index) => (
						<div
							key={index}
							className='text-sm truncate flex items-center gap-1'>
							<FileImage className='w-5 h-5' />
							<span className='truncate max-w-[80%]'>{file.name}</span>
							<Button
								variant='outline'
								className='w-5 h-6 p-0 rounded-full'
								onClick={() => handleRemoveFile(index)}>
								<X />
							</Button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
