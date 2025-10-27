import type { Meta, StoryObj } from "@storybook/react";
import ProductDetailImageGrid from "@/components/product-detail-image-grid";

const meta = {
  title: "Components/ProductDetailImageGrid",
  component: ProductDetailImageGrid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      description: "Object containing three image URLs for the grid layout",
    },
    alt: {
      control: "text",
      description: "Alt text for the product images",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for customization",
    },
  },
} satisfies Meta<typeof ProductDetailImageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: {
      topLeft: "https://placehold.co/600x600/1a1a1a/808080?text=Person+with+Headphones",
      bottomLeft: "https://placehold.co/600x600/1a1a1a/808080?text=Product+Flat+Lay",
      right: "https://placehold.co/600x900/1a1a1a/808080?text=Headphones+Close-up",
    },
    alt: "Premium Headphones",
  },
};

export const HeadphonesProduct: Story = {
  args: {
    images: {
      topLeft: "https://placehold.co/600x600/2d2d2d/a0a0a0?text=Lifestyle+Shot",
      bottomLeft: "https://placehold.co/600x600/2d2d2d/a0a0a0?text=Product+Details",
      right: "https://placehold.co/600x900/2d2d2d/a0a0a0?text=Hero+Shot",
    },
    alt: "XX99 Mark II Headphones",
  },
};

export const SpeakerProduct: Story = {
  args: {
    images: {
      topLeft: "https://placehold.co/600x600/1a1a1a/808080?text=Home+Setup",
      bottomLeft: "https://placehold.co/600x600/1a1a1a/808080?text=Speaker+Angle",
      right: "https://placehold.co/600x900/1a1a1a/808080?text=Speaker+Details",
    },
    alt: "ZX9 Speaker",
  },
};

export const EarphonesProduct: Story = {
  args: {
    images: {
      topLeft: "https://placehold.co/600x600/2d2d2d/a0a0a0?text=Case+View",
      bottomLeft: "https://placehold.co/600x600/2d2d2d/a0a0a0?text=Charging+Station",
      right: "https://placehold.co/600x900/2d2d2d/a0a0a0?text=Earphones+Detail",
    },
    alt: "YX1 Wireless Earphones",
  },
};

export const LightBackgrounds: Story = {
  args: {
    images: {
      topLeft: "https://placehold.co/600x600/f5f5f5/333333?text=Product+View+1",
      bottomLeft: "https://placehold.co/600x600/f5f5f5/333333?text=Product+View+2",
      right: "https://placehold.co/600x900/f5f5f5/333333?text=Hero+Image",
    },
    alt: "Product with light backgrounds",
  },
};
