// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

/**
 * 
 * Two ways to create component in reactjs with the help of JSX
 * 1. Inside of JSX fragment <> </>
 * 2. only in parenthisis
 */

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" />
      <div className="container my-3">
        <TextForm title="Enter Text for Analysis" />
      </div>
    </>
  );
}

export default App;
