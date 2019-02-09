const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('POST', () => {
    it('returns a 200 (OK)', async () => {
      const response = await request(server).post('/games');
      expect(response.statusCode).toBe(200);
    });

    it('returns content-type application/json', async () => {
      const response = await request(server).post('/games');
      expect(response.type).toBe('application/json');
    });

    it('returns a JSON object', async () => {
      const expectedBody = {
        title: 'Pacman', // required
        genre: 'Arcade', // required
        releaseYear: 1980 // not required
      };
      const response = await request(server).post('/games');
      expect(response.body).toEqual(expectedBody);
    });
  });
});
