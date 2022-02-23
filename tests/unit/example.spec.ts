import { mount } from '@vue/test-utils'
import Tab1Page from '@/page/main/MainPage.vue'

describe('MainPage.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(Tab1Page)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
