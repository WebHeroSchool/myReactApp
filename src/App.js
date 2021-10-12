import logo from './logo.svg';
import './App.css';

let name = 'Jane';
let flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{
          color: 'yellow',
          fontSize: 46
        }}>
          Hello, my name is {name}
        </p>
        <p style = {{
          color: 'yellow'
        }}>
          I have {2} apples. My friend has {2+2} apples. {flag && 'Flag is true'}
          {flag ? <p>We are happy!</p> : <p>We are unhappy</p>}
        </p>
        <div>{undefined}</div>
        <div>{null}</div>
        <div>{false}</div>
        <div>{true}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
