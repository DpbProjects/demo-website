import type { Meta, StoryObj } from '@storybook/nextjs';
import { Testimonials } from '../components/sections/testimonials';

const meta: Meta<typeof Testimonials> = {
  title: 'Homepage/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Display style variant',
    },
    heading: {
      control: 'text',
      description: 'Main heading text',
    },
    subheading: {
      control: 'text',
      description: 'Subheading text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTestimonials = [
  {
    quote: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    avatar: "SJ",
  },
  {
    quote: "Outstanding support and incredible features. We've seen a 200% increase in efficiency since switching.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    avatar: "MC",
  },
  {
    quote: "The best investment we've made this year. Easy to use, powerful features, and exceptional customer service.",
    author: "Emily Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "ER",
  },
];

export const Default: Story = {
  args: {
    testimonials: sampleTestimonials,
    variant: 'default',
    heading: 'What our customers say',
    subheading: "Don't just take our word for it",
  },
};

export const Compact: Story = {
  args: {
    testimonials: sampleTestimonials,
    variant: 'compact',
    heading: 'What our customers say',
    subheading: "Don't just take our word for it",
  },
};

export const CustomHeadings: Story = {
  args: {
    testimonials: sampleTestimonials,
    variant: 'default',
    heading: 'Loved by teams worldwide',
    subheading: 'Real stories from real customers',
  },
};

export const ManyTestimonials: Story = {
  args: {
    testimonials: [
      ...sampleTestimonials,
      {
        quote: "Incredible value for money. The ROI was apparent within the first month of implementation.",
        author: "David Park",
        role: "Director of Operations",
        company: "Enterprise Solutions",
        avatar: "DP",
      },
      {
        quote: "The user interface is intuitive and beautiful. Our entire team was up and running in days, not weeks.",
        author: "Lisa Thompson",
        role: "Head of Design",
        company: "Creative Studio",
        avatar: "LT",
      },
      {
        quote: "Game-changing technology. This is exactly what we needed to scale our operations effectively.",
        author: "James Anderson",
        role: "Founder",
        company: "GrowthCo",
        avatar: "JA",
      },
    ],
    variant: 'default',
    heading: 'What our customers say',
    subheading: "Don't just take our word for it",
  },
};

export const TwoTestimonials: Story = {
  args: {
    testimonials: sampleTestimonials.slice(0, 2),
    variant: 'default',
    heading: 'What our customers say',
    subheading: "Don't just take our word for it",
  },
};

