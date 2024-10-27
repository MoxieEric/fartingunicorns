import { SparklesIcon, SunIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import React from 'react'
import { UnicornSizes } from '../molecules/FartingUnicorn'

interface FartProps {
	size: UnicornSizes
}

const Fart: React.FC<FartProps> = ({ size }) => {
	const [isFarting, setIsFarting] = React.useState<boolean>(false)
	const containerSizes: Record<UnicornSizes, string> = {
		xs: 'w-16 h-16 top-3 -left-10',
		sm: 'w-20 h-20 top-8 -left-10',
		md: 'w-24 h-24 top-10 -left-10',
		lg: 'w-36 h-36 top-16 -left-16',
	}
	const scale: Record<UnicornSizes, string> = {
		xs: 'scale-50',
		sm: 'scale-50',
		md: 'scale-75',
		lg: '',
	}

	React.useEffect(() => {
		setIsFarting(true)

		const fadeIn = setTimeout(() => {
			setIsFarting(true)
		}, 50)

		const fadeOut = setTimeout(() => {
			setIsFarting(false)
		}, 600)

		return () => {
			clearTimeout(fadeIn)
			clearTimeout(fadeOut)
		}
	}, [])

	const shapesBaseClasses =
		'aspect-square rounded-full absolute transition-opacity duration-75'

	return (
		<div
			className={classNames(
				'absolute transition-all duration-1000 ease-in-out scale',
				containerSizes[size],
				scale[size],
				isFarting ? '-translate-x-3' : 'translate-x-0'
			)}
		>
			<div
				className={classNames(
					'transition-all duration-400 ease-in',
					`opacity-${isFarting ? '100' : '0'}`
				)}
			>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-cyan-300 w-16 h-16 blur-md left-8 top-4 animate-ping'
					)}
				></div>
			</div>
			<div
				className={classNames(
					'transition-all duration-250 ease-in',
					`opacity-${isFarting ? '90' : '0'}`
				)}
			>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-yellow-100 w-20 h-20 blur-md right-0 top-8 animate-bounce'
					)}
				></div>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-pink-400 w-6 h-6 bottom-8 left-8 animate-ping animation-delay-150'
					)}
				></div>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-teal-300 w-4 h-4 left-16 top-8 animate-ping animation-delay-200'
					)}
				></div>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-pink-300 blur-sm w-2 h-2 left-10 top-6 animate-ping animation-delay-100'
					)}
				></div>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-yellow-200 w-2 h-2 left-4 top-16 animate-ping animation-delay-150'
					)}
				></div>
				<div
					className={classNames(
						shapesBaseClasses,
						'bg-pink-200 w-1.5 h-1.5 right-12 top-4 animate-ping animation-delay-150'
					)}
				></div>
				<HeartIcon className='text-red-400 text-2xl w-8 h-8 rotate-45 absolute top-10 left-16 animate-ping' />
				<SparklesIcon className='text-purple-200 text-2xl w-7 h-7 rotate-12 absolute top-4 left-2 animate-ping' />
				<SunIcon className='text-yellow-300 text-2xl w-7 h-7 rotate-12 absolute top-12 left-8 animate-ping animation-delay-150' />
			</div>
		</div>
	)
}

export default Fart
