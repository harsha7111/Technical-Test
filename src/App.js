import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState();
  const [selectedZone, setSelectedZone] = useState(null);
  const [zone, setZone] = useState(null);

  useEffect(() => {
    fetch(`http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=Europe/*&fields=zoneName`)
      .then(response => response.json())
      .then(response => response.zones)
      .then(setData)
  }, [])

  useEffect(() => {
      const intervalId = setInterval(() => {
        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=${selectedZone}`)
        .then(response => response.json())
        .then(setZone)
      },5000)

      return () => {
        clearInterval(intervalId);
    }
  }, [selectedZone])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!data ? <p>Loading..</p> :
          <>
            <p>Select TimeZone</p>
            <div className="drop-down" onChange={(e) => setSelectedZone(e.target.value)}>
              <select>
                {data.map((option, key) => <option key={key} >{option.zoneName}</option>)}
              </select>
            </div>
            <p>{selectedZone}</p>
            <p>{zone? zone.formatted: ''}</p>
          </>
        }
      </header>
    </div>
  );

}

export default App;
