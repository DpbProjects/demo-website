import type { Meta, StoryObj } from "@storybook/react";

import CategoryCard from "@/components/category-card";

const meta = {
  title: "Components/CategoryCard",
  component: CategoryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
      description: "Image URL for the category",
    },
    title: {
      control: "text",
      description: "Title of the category",
    },
    href: {
      control: "text",
      description: "Link destination",
    },
  },
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headphones: Story = {
  args: {
    image: "/premium-headphones-product-shot.jpg",
    title: "HEADPHONES",
    href: "/headphones",
  },
};

export const Speakers: Story = {
  args: {
    image: "/premium-speaker-product-shot.jpg",
    title: "SPEAKERS",
    href: "/speakers",
  },
};

export const Earphones: Story = {
  args: {
    image: "/premium-earphones-product-shot.jpg",
    title: "EARPHONES",
    href: "/earphones",
  },
};

export const WithPlaceholder: Story = {
  args: {
    image: "/placeholder.svg",
    title: "NEW CATEGORY",
    href: "/new-category",
  },
};


