import React, { FC } from 'react';

interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
}: ButtonProps) => {
	return <button>{label}</button>;
};

export default Button;
