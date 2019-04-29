
import request from 'supertest';
import app from '../src/server';

describe('Get', () => {
    it('fetches Hello World!', (done) => {
        return request(app)
        .get('/')
        .end((err, res: any) => {
            expect(res.text).toBe('Hello World!');
            done();
        });
    });
});
