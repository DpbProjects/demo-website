import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';

// Mock the Convex hook for Storybook
const MockPushNotificationButton = () => {
  const handleSendNotification = fn();
  
  return (
    <button
      onClick={handleSendNotification}
      className="my-4 flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      Send Push Notification
    </button>
  );
};

const MockPushNotificationButtonLoading = () => {
  return (
    <button
      disabled
      className="my-4 flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      Sending...
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
        component: 'A button component for sending push notifications via Twilio. Note: This is a mocked version for Storybook that doesn\'t connect to Convex.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  render: () => <MockPushNotificationButtonLoading />,
  parameters: {
    docs: {
      description: {
        story: 'Shows the button in loading state when sending a notification.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <button
      disabled
      className="my-4 flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors opacity-50 cursor-not-allowed"
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      Send Push Notification
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows the button in disabled state.',
      },
    },
  },
};

export const CustomText: Story = {
  render: () => (
    <button
      onClick={fn()}
      className="my-4 flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-lg transition-colors"
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      Send Appointment Reminder
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example with custom button text for appointment reminders.',
      },
    },
  },
};
