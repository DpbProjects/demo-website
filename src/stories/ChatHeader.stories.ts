import type { Meta, StoryObj } from '@storybook/nextjs';
import ChatHeader from '../components/chat/chat-header';

const meta: Meta<typeof ChatHeader> = {
  title: 'Chat/ChatHeader',
  component: ChatHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    messageCount: {
      control: { type: 'number', min: 0, max: 1000 },
      description: 'Number of messages in the chat',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    messageCount: 5,
  },
};

export const NoMessages: Story = {
  args: {
    messageCount: 0,
  },
};

export const SingleMessage: Story = {
  args: {
    messageCount: 1,
  },
};

export const ManyMessages: Story = {
  args: {
    messageCount: 127,
  },
};

export const LargeNumber: Story = {
  args: {
    messageCount: 999,
  },
};
