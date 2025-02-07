const request = require('supertest');
const chai = require('chai');
const app = require('../index'); // Importamos la app sin iniciar el servidor

const expect = chai.expect;

describe('API Tests', () => {
  it('should return a random animal song on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.match(/George Orwell had a farm/);
  });

  it('should return all animals on GET /api', async () => {
    const res = await request(app).get('/api');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('cat', 'meow');
    expect(res.body).to.have.property('dog', 'bark');
  });

  it('should handle 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.status).to.equal(404);
  });
});
