import { StrongButton } from './StrongButton'

import type { StrongButtonProps } from './StrongButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'BTW-Custom/StrongButton',
  component: StrongButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#121212' }
      ]
    }
  },
  args: {
    children: 'Button',
    disabled: false,
    className: ''
  },
  argTypes: {
    colorTheme: { control: false },
    className: { control: false }
  }
} satisfies Meta<typeof StrongButton>

export default meta

type Story = StoryObj<typeof StrongButton>

const TemplateStory: Story = {
  render: (args: StrongButtonProps) => {
    return <StrongButton {...args}>{args.children}</StrongButton>
  }
}

export const Light: Story = {
  ...TemplateStory,
  args: {
    colorTheme: 'light'
  }
}

export const Dark: Story = {
  ...TemplateStory,
  args: {
    colorTheme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const LightDisabled: Story = {
  ...TemplateStory,
  args: {
    colorTheme: 'light',
    disabled: true
  }
}

export const DarkDisabled: Story = {
  ...TemplateStory,
  args: {
    colorTheme: 'dark',
    disabled: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}
