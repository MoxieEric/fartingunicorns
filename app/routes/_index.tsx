import type { MetaFunction } from '@netlify/remix-runtime'
import FartingUnicorn, {
	UnicornSizes,
} from 'src/components/molecules/FartingUnicorn'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Farting Unicorns' },
		{ name: 'description', content: 'Just because.' },
		{
			name: 'og:title',
			content: 'Farting Unicorns',
		},
		{
			name: 'og:description',
			content: 'Even magical creatures pass gas.',
		},
		{
			name: 'og:type',
			content: 'website',
		},
		{
			name: 'og:url',
			content: 'https://fartingunicorns.com',
		},
		{
			name: 'og:image',
			content:
				'https://fartingunicorns.com/farting-unicorns-preview-01.jpg',
		},
	]
}

export default function Index() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-center'>
			<div className='flex flex-col items-start justify-center gap-8'>
				<header>
					<h1 className='text-5xl font-cherry bg-gradient-to-r from-pink-400  to-cyan-400 inline-block text-transparent bg-clip-text py-2'>
						Farting Unicorns
					</h1>
				</header>
				<main className='flex flex-col-reverse items-center gap-4 justify-center w-full'>
					<FartingUnicorn size={UnicornSizes.xs} />
					<FartingUnicorn size={UnicornSizes.sm} />
					<FartingUnicorn size={UnicornSizes.md} />
					<FartingUnicorn size={UnicornSizes.lg} />
				</main>
			</div>
		</div>
	)
}
