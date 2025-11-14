import './App.css';
import Clock from './Clock';
import MyWeather from './MyWeather';
import Todolist from './Todolist';

function App() {
  return (
    <div className='container'>
      {/* <Clock /> */}
      <MyWeather weather='맑음'>일기예보</MyWeather>
      <Todolist />
    </div>
  );
}

export default App;
