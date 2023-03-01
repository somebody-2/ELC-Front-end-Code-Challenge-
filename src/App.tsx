import './App.css';
import popup from './components/popup';
import SubComponent from './components/subComponent';
import deBounce from './util'

function App() {

  const clickHandler = () => {
    popup.success('popup from parent component')
  };

  return (
    <div className="App">
      <header className="App-header">

        <h3>It's parent component here</h3>
        <p>
          <button onClick={deBounce(clickHandler,200)}>click here to show popup status success</button>
        </p>
        <p>
          <button onClick={() => {
              popup.error("popup from parent component");
            }}>click here to show popup status error</button>
        </p>
        <p>
          <button onClick={() => {
              popup.warning("popup from parent component");
            }}>click here to show popup status warning</button>
        </p>
        <p>
          <button onClick={() => {
              popup.info("popup from parent component");
            }}>click here to show popup status info</button>
        </p>
        <SubComponent />

      </header>
    </div>
  );
}

export default App;
