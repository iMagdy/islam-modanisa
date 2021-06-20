import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('can list todo items', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: {
        items: [
          'buy some milk',
          'buy some mango'
        ]
      }
    });

    const listElement = wrapper.find('ul');
    const listItems = wrapper.findAll('ul li');

    expect(listElement.exists()).toBe(true);
    expect(listItems.exists()).toBe(true);
  });
})
