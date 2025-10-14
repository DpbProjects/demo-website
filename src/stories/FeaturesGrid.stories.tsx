import type { Meta, StoryObj } from '@storybook/nextjs';
import { FeaturesGrid } from '../components/sections/features-grid';

const meta: Meta<typeof FeaturesGrid> = {
  title: 'Homepage/FeaturesGrid',
  component: FeaturesGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
      description: 'Number of columns in the grid',
    },
    variant: {
      control: 'select',
      options: ['card', 'simple'],
      description: 'Display style variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Built for speed and performance. Every component is optimized for the best user experience.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Fully Customizable',
    description: 'Tailor every component to match your brand. Complete control over styling and behavior.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Accessible',
    description: 'WCAG compliant components that work for everyone. Accessibility is built-in, not bolted on.',
  },
];

export const ThreeColumns: Story = {
  args: {
    features: sampleFeatures,
    columns: 3,
    variant: 'card',
  },
};

export const TwoColumns: Story = {
  args: {
    features: sampleFeatures,
    columns: 2,
    variant: 'card',
  },
};

export const FourColumns: Story = {
  args: {
    features: [
      ...sampleFeatures,
      {
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        ),
        title: 'Flexible',
        description: 'Adapts to your workflow. Use as much or as little as you need.',
      },
    ],
    columns: 4,
    variant: 'card',
  },
};

export const SimpleVariant: Story = {
  args: {
    features: sampleFeatures,
    columns: 3,
    variant: 'simple',
  },
};

export const ManyFeatures: Story = {
  args: {
    features: [
      ...sampleFeatures,
      {
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Real-time Updates',
        description: 'Stay in sync with live collaboration features built for modern teams.',
      },
      {
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        ),
        title: 'Data Driven',
        description: 'Make informed decisions with built-in analytics and insights.',
      },
    ],
    columns: 3,
    variant: 'card',
  },
};