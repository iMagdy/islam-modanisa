import { shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput.vue'

describe('TodoInput.vue', () => {
  it('has the basic input components', () => {
    const wrapper = shallowMount(TodoInput);

    const formElement = wrapper.find('form');
    const inputElement = wrapper.find('input[type="text"]');
    const buttonElement = wrapper.find('button[type="submit"]');

    expect(formElement.exists()).toBe(true);
    expect(inputElement.exists()).toBe(true);
    expect(buttonElement.exists()).toBe(true);
  });
})
