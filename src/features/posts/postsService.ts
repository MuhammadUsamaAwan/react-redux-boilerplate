import { api } from '../../app/api';

const postsApi = api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<Post[], void>({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),
    addPost: build.mutation<Post, Post>({
      query: body => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    removePost: build.mutation<Post, number>({
      query: id => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePost: build.mutation<Post, Post & { id: number }>({
      query: body => ({
        url: `posts/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useRemovePostMutation, useUpdatePostMutation } = postsApi;
