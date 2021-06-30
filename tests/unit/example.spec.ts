import { mount } from '@vue/test-utils'
import findings from '@/views/findings.vue'

describe('findings.vue', () => {
  it('renders tab 1 view', () => {
    const wrapper = mount(findings)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
