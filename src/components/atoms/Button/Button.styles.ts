import styled from 'styled-components';
import { ButtonSize } from './Button';

export const StyledButton = styled.button<{
	primary: boolean;
	size: ButtonSize;
	bold: boolean;
}>`
	padding: 5px 10px 5px 10px;
	padding-left: ${({ size }) =>
		size === ButtonSize.small
			? '5px'
			: size === ButtonSize.medium
			? '10px'
			: size === ButtonSize.large
			? '30px'
			: '10px'};
	padding-right: ${({ size }) =>
		size === ButtonSize.small
			? '5px'
			: size === ButtonSize.medium
			? '10px'
			: size === ButtonSize.large && '30px'};
	background: transparent;
	border: 1px solid ${props => (props.primary ? 'green' : 'blue')};
	font-size: 14px;
	border-radius: 2px;
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
	cursor: pointer;
	&:hover {
		border-color: ${props => (props.primary ? 'blue' : 'green')};
		box-shadow: 25px -27px 99px ${props => (props.primary ? 'rgba(0, 0, 255, 0.1);' : 'rgba(0, 255, 0, 0.1);')};
	}
`;
