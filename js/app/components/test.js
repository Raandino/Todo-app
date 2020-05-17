import { h} from 'preact';

function TodoItems() {
  return (
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  )
}

export default TodoItems;
//const App = (
//  <ul>
//    <TodoItems />
//    <li>D</li>
//  </ul>
//);

//render(App, container);
// Renders:
// <ul>
//   <li>A</li>
//   <li>B</li>
//   <li>C</li>
//   <li>D</li>
// </ul>