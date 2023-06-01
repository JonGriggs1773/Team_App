import './App.css';
// import PlayerList from './components/PlayerList'
import Main from './views/Main';






function App() {
    return (
        <div className="App">
            <h2 className = "text text-primary mt-5 fs-3">
                <a href = "/">Player List | </a> 
                <a href = "/status/1">Manage Players | </a>
                <a href = "/chart">Positions</a>
            </h2>
            <Main/>
        </div>
    );
}

export default App;
