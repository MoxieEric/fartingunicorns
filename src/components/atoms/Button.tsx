import classNames from 'classnames'
import React from 'react'

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	const buttonClasses = 'cursor-pointer p-1 w-full h-auto'
	return (
		<button
			{...props}
			className={classNames(buttonClasses, props?.className)}
		>
			{children}
		</button>
	)
}

export default Button
