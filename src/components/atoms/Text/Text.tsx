import React, { FC } from 'react';
import { StyledText } from './Text.styles';

export enum TextVariant {
	p = 'p',
	span = 'span',
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
}

interface TextProps {
	variant?: TextVariant;
	color?: string;
	primary?: boolean;
	bold?: boolean;
	italic?: boolean;
	label: string;
}

const Text: FC<TextProps> = ({
	variant = TextVariant.p,
	primary = false,
	color,
	label,
	bold = false,
	italic = false,
}: TextProps) => {
	return (
		<StyledText
			variant={variant}
			primary={primary}
			color={color}
			bold={bold}
			italic={italic}>
			{label}
		</StyledText>
	);
};

export default Text;
