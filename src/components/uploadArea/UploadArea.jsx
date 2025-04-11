'use client';
import { useFileUpload } from '@/hooks/useFileUpload';
import { CloudUpload } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

import ListImagesUpload from './list-images-upload/ListImgesUpload';

export default function UploadArea({ onFilesChange }) {
	const fileInputRef = useRef(null);
	const { files, addFiles, moveFile, removeFile, setAsMain } = useFileUpload();

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

	return (
		<div className='flex flex-col gap-4'>
			<Badge className='self-start'>Envie fotos do produto</Badge>
			<div
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				className='w-full flex flex-col items-center justify-center gap-4
				border-2 border-dashed border-primary/50 rounded-lg p-6 transition
				hover:bg-primary-foreground'>
				<CloudUpload size={120} />

				<p className='text-center'>
					Arraste e solte as fotos
					<br />
					ou
				</p>
				<Button className='max-w-[40%]' onClick={openFileDialog}>
					Clique para selecionar a foto
				</Button>
				<Input
					ref={fileInputRef}
					type='file'
					onChange={handleFileSelect}
					className='hidden'
				/>
			</div>
			<ListImagesUpload
				files={files}
				removeFile={removeFile}
				moveFile={moveFile}
				setAsMain={setAsMain}
				onFilesChange={(files) => console.log('Atualizando:', files)}
			/>
		</div>
	);
}
