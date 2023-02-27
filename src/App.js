import Dashboard from './components/Dashboard';
import EEGLineChart from './components/EEGLineChart';

function App() {
  // Create an instance of the EEGLineChart component with sample data
  const eegLineChart = (
    <EEGLineChart/>
  );

  return (
    <Dashboard>
      {eegLineChart}
    </Dashboard>
  );
}

export default App;
