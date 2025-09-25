import type { Meta, StoryObj } from '@storybook/nextjs';
import ChatMessage from '../components/chat/chat-message';

const meta: Meta<typeof ChatMessage> = {
  title: 'Chat/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    isOutgoing: {
      control: { type: 'boolean' },
      description: 'Whether the message is outgoing (sent by user) or incoming',
    },
    message: {
      control: { type: 'object' },
      description: 'Message object containing body, date, direction, and status',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const baseMessage = {
  body: "Hello! How can I help you today?",
  date_created: new Date().toISOString(),
  direction: "inbound",
};

export const IncomingMessage: Story = {
  args: {
    message: baseMessage,
    isOutgoing: false,
  },
};

export const OutgoingMessage: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "Hi there! I need some help with my order.",
      direction: "outbound-api",
    },
    isOutgoing: true,
  },
};

export const OutgoingWithStatusSent: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "Thanks for your help!",
      direction: "outbound-api",
      status: "sent",
    },
    isOutgoing: true,
  },
};

export const OutgoingWithStatusDelivered: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "Perfect, that worked!",
      direction: "outbound-api",
      status: "delivered",
    },
    isOutgoing: true,
  },
};

export const OutgoingWithStatusPending: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "Sending this message now...",
      direction: "outbound-api",
      status: "pending",
    },
    isOutgoing: true,
  },
};

export const LongMessage: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "This is a much longer message to demonstrate how the component handles text that spans multiple lines. It should wrap nicely within the message bubble and maintain good readability.",
    },
    isOutgoing: false,
  },
};

export const LongOutgoingMessage: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "I'm writing a really long message here to see how it looks when sent from my side. This should wrap properly and show the timestamp and delivery status at the bottom.",
      direction: "outbound-api",
      status: "delivered",
    },
    isOutgoing: true,
  },
};

export const EmojiMessage: Story = {
  args: {
    message: {
      ...baseMessage,
      body: "🎉 Congratulations! Your order has been confirmed! 🚀",
    },
    isOutgoing: false,
  },
};
