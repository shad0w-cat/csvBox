import CSVBox from './csvbox';
import './App.css';
import { useEffect, useState } from 'react';
import CsvToJSONConverter from './CSVtoJSON';

function App() {
  const [uploaded, setUploaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    console.log(data);
    console.log(uploaded);
  }, [data, uploaded]);
  return (
    <div className="App">
      {!uploaded ? (
        <CSVBox
          setUploaded={() => setUploaded(true)}
          updateData={(dataRaw) => setData(dataRaw)}
        />
      ) : (
        <CsvToJSONConverter fileURL={data} />
      )}
    </div>
  );
}

export default App;
