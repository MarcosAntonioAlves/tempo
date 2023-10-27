import { useState } from 'react';

function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setweatherForecast] = useState(null);

  const handleChange = (e) => {
      setCity(e.target.value)
  }

  const handleSearch = () =>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=d9e55b49db114c61bbe203842231008&q=${city}&lang=pt`)
    .then((responce) =>{
      if(responce.status === 200){
        return responce.json()
      }
    })
    .then ((data) =>{
      setweatherForecast(data);
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-braand text-white" href="#top">
          {city}
        </a>
      </nav>
      
      <main className="container">
        
        <div className="jumbotron">
          <h1>
            Verifique agora a previsão do tempo na sua cidade.
          </h1>
        
          <p className="leed">
            Digite o nome da sua cidade e em seguida clique em pesquisar.
          </p>

          <div className="row mb-4">
            <div className="col-mb-6">
              <input 
              onChange={handleChange}
              className="form-control" 
              value={city}/>
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">Pesquisar</button>

          {
            weatherForecast ? (
            <div>

              <div className="mt-4 d-flex aling-items-center">

                <div>
                  <img src={weatherForecast.current.condition.icon} alt='Tempo'/>
                </div>

                <div>
                  <h3>Hoje o Dia está: {weatherForecast.current.condition.text}</h3>
                  <p className='lead'>tempo: {weatherForecast.current.temp_c}C°</p>
                </div>

              </div>

            </div>
            ) : null
          }
          
        </div>
        
      </main>
      
    </div>
  );
}

export default App;
 