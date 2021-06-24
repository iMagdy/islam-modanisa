const server = require('../server');
const fetch = require('node-fetch')

const testPort = 8000;
const testURL = `http://0.0.0.0:${testPort}`
const testTodoContent = 'Test todo item';


const createTODO = (shouldFail = false) => fetch(`${testURL}/todos`, {
  method: 'post',
  body: shouldFail ? '' : testTodoContent
});

describe('Create TODOs', () => {

  beforeEach((done) => {
    server.listen(8000, done);
  });

  afterEach((done) => {
    server.close(done);
  });

  it('GET /todos : Empty list', async () => {
    const res = await fetch(`${testURL}/todos`).then(res => res.json());
    expect(res).toEqual([]);
  });
  
  it('POST /todos : should succeed', async () => {
    const res = await createTODO();
    expect(res.status).toEqual(201);
  });
  
  it('POST /todos : should fail', async () => {
    const res = await createTODO(1);
    const json = await res.json();
    
    expect(res.status).toEqual(422);
    expect(json.error).toBe(true);
    expect(json.message).toEqual('Incorrect TODO content. Must post a non-empty string');
    
  });
  
  it('GET /todos : should return 1 item', async () => {
    const res = await fetch(`${testURL}/todos`).then(res => res.json());
    expect(res.length).toEqual(1);
    expect(res[0].createdAt.startsWith('2021-')).toBeTruthy();
    expect(typeof res[0].id === 'string').toBeTruthy();
    expect(res[0].text).toEqual(testTodoContent);
  });
  
})