import React, { useState } from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper/index.js';

function App() {
  const [data, setData] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    console.log("body", body)
    return body;
  };

  callBackendAPI().then(res => setData(res.express))
    .catch(err => console.log(err));

  return (
    <div className="App">
      <PageWrapper/>
    </div>
  );
}

export default App;
