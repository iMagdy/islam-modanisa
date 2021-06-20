import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import App from '@/App.vue';
import { API_URL } from '@/config';

describe('App.vue', () => {
  let wrapper;
  let postTODOSpy;
  const sandbox = sinon.createSandbox();
  
  beforeEach(() => {
    postTODOSpy = sandbox.spy(App.methods, 'postTODO');
    wrapper = shallowMount(App);
  });

  afterEach(() => {
    sandbox.restore();
  });
  
  it('renders application title and core components', () => {
    const title = wrapper.find('h1');

    const inputComponent = wrapper.findComponent({ name: 'TodoInput' });
    const listComponent = wrapper.findComponent({ name: 'TodoList' });
    
    expect(title.text()).toMatch('Modanisa Todos');
    expect(inputComponent.exists()).toBe(true);
    expect(listComponent.exists()).toBe(true);
  });

  it('can receive "modanisa-create-todo" and triggers postTODO method to dispatch XHR to the API', async () => {
    window.fetch = (url, options) => {
      expect(url).toEqual(`${API_URL}/todos`);
      expect(options.method).toEqual('post');
      expect(options.body).toEqual('My test todo item');
    };
    
    const inputWrapper = wrapper.findComponent({ name: 'TodoInput' });
    
    inputWrapper.vm.$emit('modanisa-create-todo', 'My test todo item');

    await inputWrapper.vm.$nextTick();

    expect(inputWrapper.emitted()['modanisa-create-todo'][0]).toEqual([ 'My test todo item' ]);

    expect(postTODOSpy.callCount).toEqual(1);
    expect(postTODOSpy.getCall(0).args[0]).toEqual('My test todo item');
  })
})
