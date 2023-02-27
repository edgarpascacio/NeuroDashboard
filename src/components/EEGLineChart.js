import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import firebase from "./firebase"
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function EEGLineChart() {
  const [eegData, setEEGData] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('neurodata')
                         .limit(101).
                         orderBy("timestamp")
                         .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc, index) => {
        const value = parseInt(doc.data().value);
        const timestamp = doc.data().timestamp.toDate().toLocaleString();
        return {
          id: doc.id,
          value: value,
          timestamp: timestamp
        };
      });

      data.reverse()
      setEEGData(data);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'timestamp',
    text: 'Timestamp'
  }, {
    dataField: 'value',
    text: 'Value'
  }];

  return (
    <div className="line-chart">
      <h3 className="mb-4">EEG Data</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} height={300} data={eegData}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <BootstrapTable keyField='id' data={eegData} columns={columns} striped hover condensed />
    </div>
  );
}

export default EEGLineChart;
