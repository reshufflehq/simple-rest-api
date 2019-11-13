import express from 'express';
import { get } from '@reshuffle/db';
import * as db from '@reshuffle/db';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express();

// API endpoints
const allPetsQuery = db.Q.filter(db.Q.key.startsWith('pets/'));

//GET /collection - gets all entries in the collection, query string is the filter attributes like /collection?param1=foo
app.get('/api/pets', async (req, res) => {
    try {
        const result = await db.find(allPetsQuery);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

// POST /collection - create an new entry. The ID will return as the “id” field in the Json response 
app.post('/api/pets', express.json(), async (req, res) => {
  try {
      const value = req.body;
      var id = value.id;
      if(!id || id == 0){
          id = uuidv4();
          value.id  = id;
      }
      var response =  await db.update(`pets/${id}`, (prev_value) => { return value; });
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(response));
  } catch (e) {
      res.sendStatus(500);
      console.error(e);
  }
});

//GET /collection/:id - gets just one entry. This is the proper way to get a single ID and not using a filter command.
app.get('/api/pets/:id', express.json(), async (req, res) => {
  try {
      const id = req.params.id;
      var key = `pets/${id}`;
      const result = await db.get(key);
      
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
  } catch (e) {
      res.sendStatus(500);
      console.error(e);
  }
});

//PUT /collection/:id - updates an entry. Should return the updated entry.
app.put('/api/pets/:id', express.json(), async (req, res) => {
  try {
      var value = req.body;
      var id = req.params.id;
      value.id = id;
      var oldEntry = await db.get(`pets/${id}`);
      if(oldEntry){
        var response =  await db.update(`pets/${id}`, (prev_value) => { return value; });
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(oldEntry));
      }else{
        res.sendStatus(204);
      }
      
  } catch (e) {
      res.sendStatus(500);
      console.error(e);
  }
}); 

//DELETE /collection/:id - I’ll let you figure that one out on your own :) should return a 204 no content if successful.
app.delete('/api/pets/:id', express.json(), async (req, res) => {
  try {
      const id = req.params.id;
      if (!id) {
        res.sendStatus(400);
    }else{
        const result = await db.remove(`pets/${id}`);
        res.sendStatus(204);
    }  
  } catch (e) {
      res.sendStatus(500);
      console.error(e);
  }
});

// other endpoints and functions 

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

app.get('/hello', async (_, res) => {
  try {
    const val = await get('hello') || 'World';
    res.end('Hello ', val);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('/', (_, res) => {
  res.redirect('/api-docs');
});

var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

app.use('/api-docs', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  if(req.protocol == "https"){
      swaggerDocument.schemes = ["https", "http"]
  }else{
      swaggerDocument.schemes = ["http", "https"]
  }
  next();
}, swaggerUi.serve, swaggerUi.setup(null, options));

export default app;
