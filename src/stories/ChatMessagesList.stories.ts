import type { Meta, StoryObj } from '@storybook/nextjs';
import ChatMessagesList from '../components/chat/chat-messages-list';

const meta: Meta<typeof ChatMessagesList> = {
  title: 'Chat/ChatMessagesList',
  component: ChatMessagesList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    messages: {
      control: { type: 'object' },
      description: 'Array of message objects to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMessages = [
  {
    body: "Hi there! How can I help you today?",
    date_created: new Date(Date.now() - 300000).toISOString(), // 5 minutes ago
    direction: "inbound",
  },
  {
    body: "I need help with my recent order",
    date_created: new Date(Date.now() - 240000).toISOString(), // 4 minutes ago
    direction: "outbound-api",
    status: "delivered",
  },
  {
    body: "Of course! Can you provide your order number?",
    date_created: new Date(Date.now() - 180000).toISOString(), // 3 minutes ago
    direction: "inbound",
  },
  {
    body: "It's #12345",
    date_created: new Date(Date.now() - 120000).toISOString(), // 2 minutes ago
    direction: "outbound-api",
    status: "delivered",
  },
  {
    body: "Let me look that up for you. One moment please...",
    date_created: new Date(Date.now() - 60000).toISOString(), // 1 minute ago
    direction: "inbound",
  },
  {
    body: "Thank you for waiting! 😊",
    date_created: new Date().toISOString(), // now
    direction: "inbound",
  },
];

export const EmptyState: Story = {
  args: {
    messages: [],
  },
};

export const UndefinedMessages: Story = {
  args: {
    messages: undefined,
  },
};

export const SingleMessage: Story = {
  args: {
    messages: [sampleMessages[0]],
  },
};

export const FewMessages: Story = {
  args: {
    messages: sampleMessages.slice(0, 3),
  },
};

export const FullConversation: Story = {
  args: {
    messages: sampleMessages,
  },
};

export const LongConversation: Story = {
  args: {
    messages: [
      ...sampleMessages,
      {
        body: "I found your order! It was shipped yesterday and should arrive tomorrow.",
        date_created: new Date(Date.now() + 30000).toISOString(),
        direction: "inbound",
      },
      {
        body: "That's great news! Thanks for checking.",
        date_created: new Date(Date.now() + 60000).toISOString(),
        direction: "outbound-api",
        status: "sent",
      },
      {
        body: "You're welcome! Is there anything else I can help you with?",
        date_created: new Date(Date.now() + 90000).toISOString(),
        direction: "inbound",
      },
      {
        body: "No, that's all. Have a great day!",
        date_created: new Date(Date.now() + 120000).toISOString(),
        direction: "outbound-api",
        status: "delivered",
      },
      {
        body: "You too! Thanks for contacting us. 👋",
        date_created: new Date(Date.now() + 150000).toISOString(),
        direction: "inbound",
      },
    ],
  },
};

export const MixedStatusMessages: Story = {
  args: {
    messages: [
      {
        body: "Message that was delivered",
        date_created: new Date(Date.now() - 180000).toISOString(),
        direction: "outbound-api",
        status: "delivered",
      },
      {
        body: "Message that was sent",
        date_created: new Date(Date.now() - 120000).toISOString(),
        direction: "outbound-api",
        status: "sent",
      },
      {
        body: "Message that's pending",
        date_created: new Date(Date.now() - 60000).toISOString(),
        direction: "outbound-api",
        status: "pending",
      },
    ],
  },
};
