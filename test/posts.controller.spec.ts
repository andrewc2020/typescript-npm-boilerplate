import PostsController from '../src/posts/posts.controller';

describe('postsController', () => {
    it('should be initialized', (done) => {
        const p = new PostsController();
        p.intializeRoutes();
        expect(p.path).toBe('/posts');
        done();

    });
});
