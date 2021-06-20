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

  it('can type new todo & trigger event "modanisa.createTODO" by clicking on the submit button', () => {
    const wrapper = shallowMount(TodoInput);

    const inputElement = wrapper.find('input[type="text"]');
    const buttonElement = wrapper.find('button[type="submit"]');

    inputElement.setValue('buy some milk');
    buttonElement.trigger('click');

    expect(wrapper.emitted()['modanisa.createTODO'][1]).toEqual(['buy some milk']);
  });
  
  it('can type new todo & trigger event "modanisa.createTODO" by hitting enter', () => {
    const wrapper = shallowMount(TodoInput);

    const inputElement = wrapper.find('input[type="text"]');

    inputElement.setValue('buy some milk');

    inputElement.trigger('keydown.enter');

    expect(wrapper.emitted()['modanisa.createTODO'][1]).toEqual(['buy some milk']);
  });
})
