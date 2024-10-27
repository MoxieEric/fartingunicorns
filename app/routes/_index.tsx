import type { MetaFunction } from '@remix-run/node'
import Unicorn from 'src/components/icons/Unicorn'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Farting Unicorns' },
		{ name: 'description', content: 'Just because.' },
	]
}

export default function Index() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='flex flex-col items-center gap-16'>
				<header className='flex flex-col items-center gap-4'>
					<Unicorn className='w-32 h-32' />
					<h1 className='text-6xl font-cherry bg-gradient-to-r from-pink-400  to-cyan-400 inline-block text-transparent bg-clip-text py-2'>
						Farting Unicorns
					</h1>
				</header>
			</div>
		</div>
	)
}
