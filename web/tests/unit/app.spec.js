import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import App from '@/App.vue';

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

  it('can receive "modanisa.createTODO" and triggers postTODO method to dispatch XHR to the API', async () => {
    window.fetch = () => true;
    
    wrapper.vm.$emit('modanisa.createTODO', 'My test todo item');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['modanisa.createTODO'][0]).toEqual([ 'My test todo item' ]);

    expect(postTODOSpy.callCount).toEqual(1);
    expect(postTODOSpy.getCall(0).args[0]).toEqual('My test todo item');
  })
})
