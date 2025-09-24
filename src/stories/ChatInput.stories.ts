import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import ChatInput from '../components/chat/chat-input';

const meta: Meta<typeof ChatInput> = {
  title: 'Chat/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onSendMessage: {
      action: 'sendMessage',
      description: 'Function called when a message is sent',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the input is in loading state',
    },
  },
  args: {
    onSendMessage: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the input with its placeholder text visible.',
      },
    },
  },
};

// Interactive story to demonstrate typing
export const Interactive: Story = {
  args: {
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Try typing a message and clicking send to see the interaction.',
      },
    },
  },
};
