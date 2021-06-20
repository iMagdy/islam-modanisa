import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

// When I write "buy some milk" to <text box> and click on <add button>
// Then I should see item in ToDo list 

describe('App.vue', () => {
  it('renders application title and core components', () => {
    const wrapper = shallowMount(App);

    const title = wrapper.find('h1');

    const inputComponent = wrapper.findComponent({ name: 'TodoInput' });
    const listComponent = wrapper.findComponent({ name: 'TodoList' });
    
    expect(wrapper.name()).toMatch('ModanisaApp');
    expect(title.text()).toMatch('Modanisa Todos');
    expect(inputComponent.exists()).toBe(true);
    expect(listComponent.exists()).toBe(true);
  })
})
