import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const contract = c.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: 'Create a post',
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: 'Get a post by id',
  },
  testRoute: {
    method: 'GET',
    path: `/test`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: 'Fucking hell its dope',
    description: 'This is a test route',
  },
});
