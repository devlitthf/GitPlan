// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

/**
 * 
 * Two ways to create component in reactjs with the help of JSX
 * 1. Inside of JSX fragment <> </>
 * 2. only in parenthisis
 */

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About"/>
    </>
  );
}

export default App;
