import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CloudUpload, FileImage, TvMinimalPlay } from 'lucide-react';

export default function Midea() {
	return (
		<div className='w-full flex justify-between gap-8'>
			<div className='w-full flex flex-col gap-8'>
				<div className='w-full flex flex-col items-center justify-center gap-4'>
					<Badge className='self-start'>Envie fotos do produto</Badge>
					<CloudUpload size={120} />
					<p className='text-center'>
						Arraste e solte as fotos aqui <br />
						ou
					</p>
					<Button className='max-w-[40%]'>
						Clique aqui para selecionar foto
					</Button>
				</div>
			</div>
			<div className='w-full flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col gap-2'>
						<Badge>Envie uma foto</Badge>
						<div className='flex items-center gap-1.5'>
							<Label htmlFor='name'>Url</Label>
							<FileImage className='w-5 h-5' />
						</div>
						<Input />
						<Button className='self-end'>Baixar Foto</Button>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<Badge>Envie um vídeo</Badge>
					<div className='flex items-center gap-1.5'>
						<Label htmlFor='name'>Url do YouTube</Label>
						<TvMinimalPlay className='w-5 h-5' />
					</div>
					<Input />
				</div>
			</div>
		</div>
	);
}
