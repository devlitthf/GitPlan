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
      <div className="container">
        <TextForm title="Enter Text for Editing" />
      </div>
    </>
  );
}

export default App;
