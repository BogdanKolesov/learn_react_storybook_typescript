import React, { FC } from 'react';
import { StyledButton } from './Button.styles';

export enum ButtonSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: ButtonSize;
	label: string;
	bold?: boolean;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	primary = false,
	size = ButtonSize.medium,
	backgroundColor,
	label,
	bold = false,
}: ButtonProps) => {
	return (
		<StyledButton primary={primary} size={size} bold={bold}>
			{label}
		</StyledButton>
	);
};

export default Button;
