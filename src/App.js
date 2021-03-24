import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
import CodeOfConductScreen from './screens/CodeOfConductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScheduleScreen from './screens/ScheduleScreen';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path='/react-conference/location' component={LocationScreen} />
        <Route path='/react-conference/schedule' component={ScheduleScreen} />
        <Route path='/react-conference/code' component={CodeOfConductScreen} />
        <Route path='/react-conference' component={HomeScreen} exact />
      </div>
    </Router>
  );
}

export default App;
