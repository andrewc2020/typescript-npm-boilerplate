
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

describe('Post', () => {
    it('create a post', (done) => {
        return request(app.app)
        .post('/posts')
        .send([{ author: 'Orwell', content: 'abcdefg', title: '1984 and all that' }])
        .end((err: any, res: any) => {
            expect(typeof res.body).toBe('object');
            done();

        });
    })
})
