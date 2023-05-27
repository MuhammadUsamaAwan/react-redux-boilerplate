import Counter from './features/counter/pages/Counter';
import Posts from './features/posts/pages/Posts';

export default function App() {
  // add routing here or in another component
  return (
    <main>
      <h1>Example of using Redux as State Managment</h1>
      <Counter />
      <h1>Example of RTK Query</h1>
      <Posts />
    </main>
  );
}
