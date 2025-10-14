import type { Meta, StoryObj } from '@storybook/nextjs';
import { StatsSection } from '../components/sections/stats';

const meta: Meta<typeof StatsSection> = {
  title: 'Homepage/StatsSection',
  component: StatsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional section title',
    },
    variant: {
      control: 'select',
      options: ['default', 'dark'],
      description: 'Visual style variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleStats = [
  { value: '10k', suffix: '+', label: 'Active Users' },
  { value: '99', suffix: '%', label: 'Uptime' },
  { value: '4.9', label: 'Rating' },
  { value: '24', suffix: '/7', label: 'Support' },
];

export const Default: Story = {
  args: {
    stats: sampleStats,
    variant: 'default',
  },
};

export const WithTitle: Story = {
  args: {
    stats: sampleStats,
    title: 'Trusted by thousands',
    variant: 'default',
  },
};

export const Dark: Story = {
  args: {
    stats: sampleStats,
    title: 'Our impact',
    variant: 'dark',
  },
};

export const ThreeStats: Story = {
  args: {
    stats: [
      { value: '500', suffix: '+', label: 'Companies' },
      { value: '2M', suffix: '+', label: 'Downloads' },
      { value: '150', label: 'Countries' },
    ],
    title: 'Global reach',
    variant: 'default',
  },
};

export const LargeNumbers: Story = {
  args: {
    stats: [
      { value: '1.2M', suffix: '+', label: 'Projects Created' },
      { value: '500K', suffix: '+', label: 'Happy Customers' },
      { value: '99.9', suffix: '%', label: 'Satisfaction Rate' },
      { value: '150', suffix: '+', label: 'Team Members' },
    ],
    title: 'By the numbers',
    variant: 'dark',
  },
};

export const NoSuffixes: Story = {
  args: {
    stats: [
      { value: '2019', label: 'Founded' },
      { value: '45', label: 'Team Size' },
      { value: '12', label: 'Countries' },
      { value: '5', label: 'Awards' },
    ],
    variant: 'default',
  },
};