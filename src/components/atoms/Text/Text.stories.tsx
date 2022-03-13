import React from 'react';
import Text from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextVariant } from './Text';

export default {
	title: 'Atoms/Text',
	component: Text,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const h1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h1.args = {
	variant: TextVariant.h1,
	label: 'Какой-то текст',
};

export const h2 = Template.bind({});
h2.args = {
	variant: TextVariant.h2,
	label: 'Какой-то текст',
};

export const h3 = Template.bind({});
h3.args = {
	variant: TextVariant.h3,
	label: 'Какой-то текст',
};

export const h4 = Template.bind({});
h4.args = {
	variant: TextVariant.h4,
	label: 'Какой-то текст',
};

export const h5 = Template.bind({});
h5.args = {
	variant: TextVariant.h5,
	label: 'Какой-то текст',
};

export const h6 = Template.bind({});
h6.args = {
	variant: TextVariant.h6,
	label: 'Какой-то текст',
};

export const p = Template.bind({});
p.args = {
	variant: TextVariant.p,
	label: 'Какой-то текст',
};

export const span = Template.bind({});
span.args = {
	variant: TextVariant.span,
	label: 'Какой-то текст',
};

export const bold = Template.bind({});
bold.args = {
	bold: true,
	label: 'Какой-то текст',
};

export const italic = Template.bind({});
italic.args = {
	italic: true,
	label: 'Какой-то текст',
};
