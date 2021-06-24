const http = require('http');

// Todos in-memory store
const db = new Map();

const server = http.createServer((req, res) => {
  
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([...db.entries()].map(([ id, data ]) => ({ id, ...data }))));
    return;
  }
  
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => body += chunk);

    req.on('end', () => {
      if(body.length === 0) {
        res.writeHead(422, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: true, message: 'Incorrect TODO content. Must post a non-empty string' }));
      }
      
      const id = Math.random().toString(36).substr(2, 9);
      db.set(id, { text: body, createdAt: new Date().toISOString() });
      res.writeHead(201);
      res.end();
    });
    return;
  }
  
  res.writeHead(405, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify({ error: true, message: 'Unsupported method' }));
});

module.exports = server;