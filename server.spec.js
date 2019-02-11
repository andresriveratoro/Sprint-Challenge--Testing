const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('POST', () => {
    it('returns a 200 (OK) status code', async () => {
      const body = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      const response = await request(server).post('/games').send(body);
      expect(response.statusCode).toBe(200);
    });

    it('returns a 422 (Unprocessable Entity) status code', async () => {
      const body = {
        title: 'World of Warcraft',
        releaseYear: 2004
      };
      const response = await request(server).post('/games').send(body);
      expect(response.statusCode).toBe(422);
    });

    it('returns content-type application/json', async () => {
      const body = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      const response = await request(server).post('/games').send(body);
      expect(response.type).toBe('application/json');
    });

    it('returns a JSON object', async () => {
      const body = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      const response = await request(server).post('/games').send(body);
      expect(response.body).toEqual(body);
    });
  });

  describe('GET', () => {
    it('returns a 200 (OK) status code', async () => {
      const response = await request(server).get('/games');
      expect(response.statusCode).toBe(200);
    });

    it('returns content-type application/json', async () => {
      const response = await request(server).get('/games');
      expect(response.type).toBe('application/json');
    });

    it('returns an array', async () => {
      const response = await request(server).get('/games');
      expect(response.body).toEqual(expect.any(Array));
    });
  });
});
