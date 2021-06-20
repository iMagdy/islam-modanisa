import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(App);

    const title = wrapper.find('h1');

    const inputComponent = wrapper.findComponent({ name: 'TodoInput' });
    const listComponent = wrapper.findComponent({ name: 'TodoList' });
    
    expect(title.text()).toMatch('Modanisa Todos');
    expect(inputComponent.exists()).toBe(true);
    expect(listComponent.exists()).toBe(true);
  })
})
