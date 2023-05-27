import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { decrement, increment } from '../counterSlice';

export default function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
