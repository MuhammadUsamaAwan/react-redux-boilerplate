import { useGetPostsQuery } from '../postsService';

export default function Posts() {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <section>
      {data?.map(post => (
        <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </section>
  );
}
