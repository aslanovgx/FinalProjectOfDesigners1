import './components/sass/Layout.scss';
import Home from './components/Pages/Home/Home';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
      <div className="App">

        <Spline className="spline-container" scene="https://prod.spline.design/8xeFBFOozjHkVaye/scene.splinecode" />

        <Home className="home" />


      </div>

    </>

  );
}

export default App;