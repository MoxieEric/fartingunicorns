import classNames from 'classnames'
import React from 'react'
import Button from '../atoms/Button'
import Fart from '../atoms/Fart'
import Unicorn from '../icons/Unicorn'

export enum UnicornSizes {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

interface FartingUnicornProps {
	size: UnicornSizes
}

const FartingUnicorn: React.FC<FartingUnicornProps> = ({
	size = UnicornSizes.md,
}) => {
	const [isFarting, setIsFarting] = React.useState<boolean>(false)
	const sizes: Record<UnicornSizes, string> = {
		xs: 'max-w-24',
		sm: 'max-w-36',
		md: 'max-w-48',
		lg: 'max-w-72',
	}
	const handleClick = () => {
		setIsFarting(true)
	}

	React.useEffect(() => {
		if (isFarting) {
			const timer = setTimeout(() => {
				setIsFarting(false)
			}, 900)

			return () => clearTimeout(timer)
		}
	}, [isFarting])

	return (
		<Button
			onClick={handleClick}
			className={classNames('relative h-auto', `${sizes[size]}`)}
		>
			{isFarting && <Fart size={UnicornSizes[size]} />}
			<Unicorn className='relative z-10 w-full' />
		</Button>
	)
}

export default FartingUnicorn
