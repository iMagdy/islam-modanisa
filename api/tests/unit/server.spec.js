const server = require('../../server');
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
    console.log(res);
    expect(res.status).toEqual(201);
  });
  
  it('POST /todos : should fail', async () => {
    let res = await createTODO(1);
    console.log(res);
    expect(res.status).toEqual(422);
    
    res = await res.json();

    expect(res.error).toBe(true);
    expect(res.message).toEqual('Incorrect TODO content. Must post a non-empty string');
    
  });
  
  it('GET /todos : should return 1 item', async () => {
    const res = await fetch(`${testURL}/todos`).then(res => res.json());
    expect(res.length).toEqual(1);
    expect(res.createdAt).toBeInstanceOf(Date);
    expect(res.id).toExist();
    expect(res.text).toEqual(testTodoContent);
  });
  
})