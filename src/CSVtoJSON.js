import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CsvToJSONConverter = (props) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://verticalconsinc.app.n8n.cloud/webhook-test/e0b3d927-830a-4464-be29-74e48ca53460?q=' +
            props.fileURL
        );
        const csvData = await response.text();
        console.log(csvData);
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            // `result.data` contains the parsed JSON
            setJsonData(result.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>CSV to JSON Converter</h1>
      {/* {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )} */}
    </div>
  );
};

export default CsvToJSONConverter;
