import React, { useState } from "react";

const App: React.FC = () => {
  const [datas, setDatas] = useState<object>({});
  const [location, setLocation] = useState<string>("");
  const apiKey = process.env.REACT_APP_APIKEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=${apiKey}`;

  return <div></div>;
};

export default App;
