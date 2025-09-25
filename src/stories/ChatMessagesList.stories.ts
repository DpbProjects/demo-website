import type { Meta, StoryObj } from "@storybook/nextjs";
import ChatMessagesList from "../components/chat/chat-messages-list";

const meta: Meta<typeof ChatMessagesList> = {
  title: "Chat/ChatMessagesList",
  component: ChatMessagesList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    messages: {
      control: { type: "object" },
      description: "Array of message objects to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMessages = [
  {
    body: "Hi there! How can I help you today?",
    date_created: "2024-01-15T10:25:00.000Z", // 5 minutes before base
    direction: "inbound",
  },
  {
    body: "I need help with my recent order",
    date_created: "2024-01-15T10:26:00.000Z", // 4 minutes before base
    direction: "outbound-api",
    status: "delivered",
  },
  {
    body: "Of course! Can you provide your order number?",
    date_created: "2024-01-15T10:27:00.000Z", // 3 minutes before base
    direction: "inbound",
  },
  {
    body: "It's #12345",
    date_created: "2024-01-15T10:28:00.000Z", // 2 minutes before base
    direction: "outbound-api",
    status: "delivered",
  },
  {
    body: "Let me look that up for you. One moment please...",
    date_created: "2024-01-15T10:29:00.000Z", // 1 minute before base
    direction: "inbound",
  },
  {
    body: "Thank you for waiting! 😊",
    date_created: "2024-01-15T10:30:00.000Z", // base time
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
        date_created: "2024-01-15T10:30:30.000Z", // 30 seconds after base
        direction: "inbound",
      },
      {
        body: "That's great news! Thanks for checking.",
        date_created: "2024-01-15T10:31:00.000Z", // 1 minute after base
        direction: "outbound-api",
        status: "sent",
      },
      {
        body: "You're welcome! Is there anything else I can help you with?",
        date_created: "2024-01-15T10:31:30.000Z", // 1.5 minutes after base
        direction: "inbound",
      },
      {
        body: "No, that's all. Have a great day!",
        date_created: "2024-01-15T10:32:00.000Z", // 2 minutes after base
        direction: "outbound-api",
        status: "delivered",
      },
      {
        body: "You too! Thanks for contacting us. 👋",
        date_created: "2024-01-15T10:32:30.000Z", // 2.5 minutes after base
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
        date_created: "2024-01-15T10:27:00.000Z", // 3 minutes before base
        direction: "outbound-api",
        status: "delivered",
      },
      {
        body: "Message that was sent",
        date_created: "2024-01-15T10:28:00.000Z", // 2 minutes before base
        direction: "outbound-api",
        status: "sent",
      },
      {
        body: "Message that's pending",
        date_created: "2024-01-15T10:29:00.000Z", // 1 minute before base
        direction: "outbound-api",
        status: "pending",
      },
    ],
  },
};