import { shallowMount, mount } from '@vue/test-utils';
import sinon from 'sinon';
import App from '@/App.vue';
import { API_URL } from '@/config';

describe('App.vue', () => {
  let wrapper;
  let postTODOSpy;
  let getTODOsSpy;
  const sandbox = sinon.createSandbox();
  
  beforeEach(() => {
    postTODOSpy = sandbox.spy(App.methods, 'postTODO');
    getTODOsSpy = sandbox.spy(App.methods, 'getTODOs');
    wrapper = shallowMount(App);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders application title and core components', () => {
    const logo = wrapper.find('img');
    const inputComponent = wrapper.findComponent({ name: 'TodoInput' });
    const listComponent = wrapper.findComponent({ name: 'TodoList' });
    
    expect(logo.exists()).toBe(true);
    expect(inputComponent.exists()).toBe(true);
    expect(listComponent.exists()).toBe(true);
  });

  it('can receive "modanisa-create-todo" and triggers postTODO method to dispatch XHR to the API', async () => {
    window.fetch = async (url, options = {}) => {
      expect(url).toEqual(`${API_URL}/todos`);
      if (options.method) expect(options.method).toEqual('post');
      if (options.body) expect(options.body).toEqual('My test todo item');
      return { json: () => [] }
    };
    
    const inputWrapper = wrapper.findComponent({ name: 'TodoInput' });
    
    inputWrapper.vm.$emit('modanisa-create-todo', 'My test todo item');

    await inputWrapper.vm.$nextTick();

    expect(inputWrapper.emitted()['modanisa-create-todo'][0]).toEqual([ 'My test todo item' ]);

    expect(postTODOSpy.callCount).toEqual(1);
    expect(postTODOSpy.getCall(0).args[0]).toEqual('My test todo item');
  })

  it('fetches todo list on mount and after submitting a new todo item', async () => {
    const todoItems = [
      {
        id: '1',
        text: 'buy some milk',
      },
      {
        id: '2',
        text: 'buy some mango',
      }
    ];
    
    window.fetch = async (url) => {
      expect(url).toEqual(`${API_URL}/todos`);
      return {
        json: () => todoItems
      }
    };

    wrapper = mount(App);

    await wrapper.vm.$nextTick();

    const listWrapper = wrapper.findComponent({ name: 'TodoList' });

    await listWrapper.vm.$nextTick();
    
    expect(listWrapper.props('items')).toEqual(todoItems);

    expect(getTODOsSpy.callCount).toEqual(2);
    
    // now after submitting

    window.fetch = async () => ({ json: () => [] });

    wrapper = mount(App);
    
    const inputWrapper = wrapper.findComponent({ name: 'TodoInput' });

    inputWrapper.vm.$emit('modanisa-create-todo', 'My test todo item');

    await inputWrapper.vm.$nextTick();

    expect(getTODOsSpy.callCount).toEqual(4);
  })
})
