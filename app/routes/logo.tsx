import type { MetaFunction } from '@netlify/remix-runtime'
import FartingUnicorn, {
	UnicornSizes,
} from 'src/components/molecules/FartingUnicorn'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Farting Unicorns' },
		{ name: 'description', content: 'Just because.' },
	]
}

export default function Index() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-center'>
			<div className='flex flex-col items-start justify-center gap-8'>
				<header></header>
				<main className='flex items-center gap-4 justify-center w-full'>
					<FartingUnicorn size={UnicornSizes.lg} />
					<h1 className='text-6xl font-cherry bg-gradient-to-r from-pink-400  to-cyan-400 inline-block text-transparent bg-clip-text py-2'>
						Farting
						<br />
						Unicorns
					</h1>
				</main>
			</div>
		</div>
	)
}
