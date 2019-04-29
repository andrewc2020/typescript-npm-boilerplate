
import request from 'supertest';
import app from '../src/server';

describe('Get', () => {
    it('all posts', (done) => {
        return request(app.app)
        .get('/posts')
        .end((err, res: any) => {
            expect(typeof res.body).toBe('object');
            done();
        });
    });
});
