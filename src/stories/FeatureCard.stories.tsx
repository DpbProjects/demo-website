import type { Meta, StoryObj } from "@storybook/react";
import FeatureCard from "@/components/feature-card";

const meta = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
      description: "URL or path to the product image",
    },
    title: {
      control: "text",
      description: "Product title or heading",
    },
    description: {
      control: "text",
      description: "Product description text",
    },
    href: {
      control: "text",
      description: "URL for the 'See Product' button link",
    },
    isNew: {
      control: "boolean",
      description: "Whether to display the 'NEW PRODUCT' badge",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for customization",
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "https://placehold.co/400x400/e5e5e5/525252?text=ZX9+Speaker",
    title: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.",
    href: "/products/zx9-speaker",
    isNew: true,
  },
};

export const WithoutNewBadge: Story = {
  args: {
    image: "https://placehold.co/400x400/e5e5e5/525252?text=XX99+Speaker",
    title: "XX99 MARK II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    href: "/products/xx99-headphones",
    isNew: false,
  },
};

export const AlternateSpeaker: Story = {
  args: {
    image: "https://placehold.co/400x400/e5e5e5/525252?text=ZX7+Speaker",
    title: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    href: "/products/zx7-speaker",
    isNew: true,
  },
};

export const LongTitle: Story = {
  args: {
    image: "https://placehold.co/400x400/e5e5e5/525252?text=Product",
    title: "EXTRA LONG PRODUCT TITLE THAT SPANS MULTIPLE LINES",
    description:
      "This example demonstrates how the component handles longer product titles and ensures proper text wrapping and spacing for optimal readability.",
    href: "/products/long-title-product",
    isNew: true,
  },
};

export const ShortDescription: Story = {
  args: {
    image: "https://placehold.co/400x400/e5e5e5/525252?text=YX1+Earphones",
    title: "YX1 WIRELESS EARPHONES",
    description: "Tailor your listening experience with bespoke dynamic drivers.",
    href: "/products/yx1-earphones",
    isNew: false,
  },
};
