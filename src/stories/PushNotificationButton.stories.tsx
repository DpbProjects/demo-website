import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Bell } from 'lucide-react';

// Mock the Convex hook for Storybook since we can't use the actual component
const MockPushNotificationButton = ({ isLoading = false, text = "Send Push Notification" }) => {
  const handleSendNotification = fn();
  
  return (
    <button
      onClick={handleSendNotification}
      disabled={isLoading}
      className="my-4 flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
    >
      <Bell size={16} />
      {isLoading ? "Sending..." : text}
    </button>
  );
};

const meta: Meta<typeof MockPushNotificationButton> = {
  title: 'Chat/PushNotificationButton',
  component: MockPushNotificationButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A button component for sending push notifications via Twilio. This is a mocked version for Storybook that doesn\'t connect to Convex.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state',
    },
    text: {
      control: { type: 'text' },
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    text: "Send Push Notification",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    text: "Send Push Notification",
  },
};

export const CustomText: Story = {
  args: {
    isLoading: false,
    text: "Send Appointment Reminder",
  },
};

export const LoadingCustomText: Story = {
  args: {
    isLoading: true,
    text: "Send Appointment Reminder",
  },
};
