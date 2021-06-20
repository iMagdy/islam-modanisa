import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('can list todo items', () => {
    const items = [
      {
        id: '1',
        text: 'buy some milk',
      },
      {
        id: '2',
        text: 'buy some mango',
      }
    ];
    const wrapper = shallowMount(TodoList, { propsData: { items } });

    const listElement = wrapper.find('ul');
    const listItems = wrapper.findAll('ul li');

    expect(listElement.exists()).toBe(true);
    expect(listItems.exists()).toBe(true);
    items.forEach((item, i) => {
      expect(listItems.at(i).text()).toEqual(item.text);
    })
  });
})
