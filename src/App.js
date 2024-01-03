import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="weather-app">
          <header>
            <form>
              <input
                type="search"
                placeholder="Enter a city.."
                required
                className="search-input"
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
          </header>
          <main>
            <div>
              <h1 className="current-city">Paris</h1>
              <p className="current-details">
                London, England: light cloud <br />
                Humidity: 40%, Wind: 30mph
              </p>
            </div>
            <div>
              <div className="current-temperature">
                <span>☀️ 24°C</span>
              </div>
            </div>
          </main>

          <footer>
            <p>
              This project was coded by{" "}
              <a href="https://github.com/annadowding" target="_blank">
                Anna Dowding
              </a>
              and is
              <a href="https://github.com/annadowding/weatherapp">
                open-sourced
              </a>
              .
            </p>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default App;
