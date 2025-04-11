import UploadArea from '@/components/uploadArea/UploadArea';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileImage, TvMinimalPlay } from 'lucide-react';

export default function Midea() {
	return (
		<div className='w-full flex justify-between gap-8'>
			<div className='w-full flex flex-col gap-8'>
				<UploadArea />
			</div>
			<div className='w-full flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col gap-2'>
						<Badge>Envie uma foto</Badge>
						<div className='flex items-center gap-1.5'>
							<Label htmlFor='imgageUrl'>Url</Label>
							<FileImage className='w-5 h-5' />
						</div>
						<Input id='imgageUrl' />
						<Button className='self-end'>Baixar Foto</Button>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<Badge>Envie um vídeo</Badge>
					<div className='flex items-center gap-1.5'>
						<Label htmlFor='videoUrl'>Url do YouTube</Label>
						<TvMinimalPlay className='w-5 h-5' />
					</div>
					<Input id='videoUrl' />
				</div>
			</div>
		</div>
	);
}
