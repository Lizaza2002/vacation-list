import imageOne from './couple.jpg';
import imageTwo from './family.jpg'
import './App.css';
import { List } from './List';



function App() {
  return (
    <div className='box'>
    <div className='app'>
      <div className='leftImg'>
        <img src={imageOne} width="200px" alt=""/>
      </div>
      <h1>Что взять с собой на море?</h1>
      <List />
      <div className='rightImg'>
        <img src={imageTwo} width="200px" alt=""/>
      </div>
    </div>
    </div>
  );
}

export default App;

