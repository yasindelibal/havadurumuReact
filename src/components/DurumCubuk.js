import "../css/durumekran.css";
import { useState } from "react";


function DurumCubuk() {

  const [havaDurumu, setHavaDurumu] = useState({});
  const api = {
    key: "3cd564775ee3a3cbc84068723edbdfd3",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [parametre, setParametre] = useState("");

  const ara = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${api.base}?q=${parametre}&units=metric&lang=tr&appid=${api.key}`
      )
        .then((veri) => veri.json())
        .then((sonuc) => {
          setParametre("");
          setHavaDurumu(sonuc);
        });
    }
  };



  return (


    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hava Durumu</h5>
        <div className="input-group mb-3">
          <input type="text"
            className="form-control"
            placeholder="Şehir Giriniz"
            aria-label="Şehir Giriniz"
            aria-describedby="button-addon2"
            onChange={(e) => setParametre(e.target.value)}
            value={parametre}
            onKeyPress={ara}>
          </input>
        </div>

        <>
          {typeof havaDurumu.main != "undefined" && (
            <>
              <>
                {havaDurumu.name}, {havaDurumu.sys.country}
              </>
              <br/>
              <>
                <>{Math.round(havaDurumu.main.temp)} °c</>
                <br/>
                <>{havaDurumu.weather[0].description}</>
              </>
            </>
          )}
        </>

      </div>
    </div>
  );
}

export default DurumCubuk