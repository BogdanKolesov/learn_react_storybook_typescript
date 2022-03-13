import React from 'react';
import Button from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonSize } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Кнопка',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Кнопка',
};

export const Large = Template.bind({});
Large.args = {
	size: ButtonSize.large,
	label: 'Кнопка очень большая',
};

export const Small = Template.bind({});
Small.args = {
	size: ButtonSize.small,
	label: 'Кнопка',
};

export const Bold = Template.bind({});
Bold.args = {
	bold: true,
	label: 'Кнопка',
};
