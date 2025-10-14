import type { Meta, StoryObj } from '@storybook/nextjs';
import { CtaBanner } from '../components/sections/cta-banner';

const meta: Meta<typeof CtaBanner> = {
  title: 'Homepage/CtaBanner',
  component: CtaBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main CTA headline',
    },
    description: {
      control: 'text',
      description: 'Supporting description text',
    },
    buttonText: {
      control: 'text',
      description: 'CTA button text',
    },
    variant: {
      control: 'select',
      options: ['blue', 'gradient', 'dark'],
      description: 'Visual style variant',
    },
    onButtonClick: { action: 'button clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    title: 'Ready to get started?',
    description: 'Join thousands of teams building better products with our platform.',
    buttonText: 'Get Started',
    variant: 'blue',
  },
};

export const Gradient: Story = {
  args: {
    title: 'Transform your workflow',
    description: 'Experience the power of simplicity. Start your free trial today.',
    buttonText: 'Start Free Trial',
    variant: 'gradient',
  },
};

export const Dark: Story = {
  args: {
    title: "Let's build something together",
    description: 'Connect with our team to discuss your project and explore possibilities.',
    buttonText: 'Contact Us',
    variant: 'dark',
  },
};

export const ShortContent: Story = {
  args: {
    title: 'Join us',
    description: 'Be part of something special.',
    buttonText: 'Sign Up',
    variant: 'blue',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Elevate your design process with our comprehensive toolkit',
    description: "Whether you're a solo designer or part of a large team, our platform provides everything you need to create exceptional user experiences. Start your journey today and see the difference that thoughtful design can make.",
    buttonText: 'Schedule a Demo',
    variant: 'gradient',
  },
};

export const CustomButton: Story = {
  args: {
    title: 'Need help?',
    description: 'Our support team is here to help you succeed every step of the way.',
    buttonText: 'Talk to Support',
    variant: 'dark',
  },
};