import { mount } from '@vue/test-utils'
import BaseButton from '@/components/atoms/baseButton/BaseButton.vue'

type PropsType = {
  disabled?: boolean,
  filled?: boolean
  height?: string
  outlined?: boolean
  rounded?: string
  width?: string
}

const factory = (props?: PropsType) => {
  return mount(BaseButton, {
    propsData: {
      ...props,
    },
  })
}

describe('BaseButton.vue', () => {
  it('renders successfully', () => {
    const wrapper = factory()

    expect(wrapper.find('[data-base-button]').exists()).toBe(true)
    factory()
  })

  it('event click successfully', async () => {
    const wrapper = factory()
    const button = wrapper.find('button')

    await button.trigger('click')

    const clickCalls = wrapper.emitted('click')
    expect(clickCalls).toHaveLength(1)
  })

  it('button is outlined', async () => {
    const wrapper = factory({ outlined: true })
    const button = wrapper.find('button')

    expect(button.classes()).toContain('base-button--outlined')
  })
})
