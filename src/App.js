/**
 * The App function returns a JSX element that renders the Header, BehanceList, and Footer components
 * within a main div.
 * @returns The App component is returning a JSX fragment containing a div with the class name "main"
 * and the CSS classes "relative" and "overflow-hidden". Inside the div, it renders the Header
 * component, the BehanceList component, and the Footer component.
 */
import "./App.css";
import Header from './components/Header';
import BehanceList from './components/BehanceList';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="main relative overflow-hidden">

    <Header/>
    <BehanceList/>
    <Footer/>
    
    </div>
    </>
  );
}

export default App;
