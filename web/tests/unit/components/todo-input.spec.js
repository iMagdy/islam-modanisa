import { shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput.vue'

describe('TodoInput.vue', () => {
  it('has the basic input components', () => {
    const wrapper = shallowMount(TodoInput);

    const formElement = wrapper.find('form');
    const inputElement = wrapper.find('input[type="text"]');
    const buttonElement = wrapper.find('button');

    expect(formElement.exists()).toBe(true);
    expect(inputElement.exists()).toBe(true);
    expect(buttonElement.exists()).toBe(true);
  });

  it('can type new todo & trigger event "modanisa-create-todo" by clicking on the submit button', async () => {
    const wrapper = shallowMount(TodoInput);

    const inputElement = wrapper.find('input[type="text"]');
    const buttonElement = wrapper.find('button');

    inputElement.setValue('buy some milk');
    buttonElement.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['modanisa-create-todo'][0]).toEqual(['buy some milk']);
  });
  
  it('can type new todo & trigger event "modanisa-create-todo" by hitting enter', async () => {
    const wrapper = shallowMount(TodoInput);
    const formElement = wrapper.find('form');
    const inputElement = wrapper.find('input[type="text"]');

    inputElement.setValue('buy some milk');
    formElement.trigger('submit');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['modanisa-create-todo'][0]).toEqual(['buy some milk']);
  });
})
