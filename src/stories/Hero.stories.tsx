import type { Meta, StoryObj } from '@storybook/nextjs';
import { Hero } from '../components/sections/hero';

const meta: Meta<typeof Hero> = {
  title: 'Homepage/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Main headline text',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle description',
    },
    primaryButtonText: {
      control: 'text',
      description: 'Primary CTA button text',
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Secondary button text',
    },
    variant: {
      control: 'select',
      options: ['default', 'gradient', 'dark'],
      description: 'Visual style variant',
    },
    onPrimaryClick: { action: 'primary clicked' },
    onSecondaryClick: { action: 'secondary clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Build beautiful products faster',
    subtitle: 'The modern design system that helps teams create consistent, accessible experiences across all platforms.',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Learn More',
    variant: 'default',
  },
};

export const Gradient: Story = {
  args: {
    heading: 'Design at the speed of thought',
    subtitle: 'Create stunning interfaces with our minimalist component library. Simple, elegant, and powerful.',
    primaryButtonText: 'Start Building',
    secondaryButtonText: 'View Docs',
    variant: 'gradient',
  },
};

export const Dark: Story = {
  args: {
    heading: 'Crafted for creators',
    subtitle: 'A refined toolkit for designers who value simplicity and elegance in every pixel.',
    primaryButtonText: 'Explore',
    secondaryButtonText: 'About Us',
    variant: 'dark',
  },
};

export const ShortHeading: Story = {
  args: {
    heading: 'Simple.',
    subtitle: 'Sometimes less is more. Our minimalist approach helps you focus on what truly matters.',
    primaryButtonText: 'Discover',
    secondaryButtonText: 'Contact',
    variant: 'default',
  },
};

export const LongContent: Story = {
  args: {
    heading: 'Transform your design workflow with modern minimalism',
    subtitle: 'Our comprehensive suite of carefully crafted components enables design teams to build exceptional user experiences that are both beautiful and functional, while maintaining consistency across every touchpoint.',
    primaryButtonText: 'Get Started Today',
    secondaryButtonText: 'Schedule a Demo',
    variant: 'gradient',
  },
};