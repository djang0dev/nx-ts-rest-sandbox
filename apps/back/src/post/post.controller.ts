import { Controller } from '@nestjs/common';
import { Api, ApiDecorator, initNestServer } from '@ts-rest/nest';
import { PostService } from './post.service';
import { contract } from '@nx-test-rest/contracts';

// #https://ts-rest.com/docs/nest
const s = initNestServer(contract);
type ControllerShape = typeof s.controllerShape;
type RouteShape = typeof s.routeShapes;
@Controller()
export class PostController implements ControllerShape {
  constructor(private readonly postService: PostService) {}

  @Api(s.route.getPost)
  async getPost(@ApiDecorator() { params: { id } }: RouteShape['getPost']) {
    const post = await this.postService.getPost(id);

    return { status: 200 as const, body: post };
  }

  @Api(s.route.createPost)
  async createPost(@ApiDecorator() { body }: RouteShape['createPost']) {
    const post = await this.postService.createPost({
      title: body.title,
      body: body.body,
    });

    return { status: 201 as const, body: post };
  }
  @Api(s.route.testRoute)
  async testRoute() {
    return {
      status: 200 as const,
      body: {
        id: '1',
        title: 'title',
        body: 'body',
      },
    };
  }
}
