import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
// Give it a try 😎
export class PostService {
  async getPost(id: string) {
    return {
      id: '1',
      title: 'title',
      body: 'body',
    };
  }
  async createPost({ title, body }: { title: string; body: string }) {
    return {};
  }
}
