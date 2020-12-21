import logo from './logo.svg';
import './App.css';
import Checkboxes from "./layouts/Checkboxes";
import Search from "./layouts/Search";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Checkboxes/>
                <Search/>
            </header>
        </div>
    );
}

export default App;
