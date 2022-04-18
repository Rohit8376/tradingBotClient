import SignIn from './Screens/SigninScreen'
import Header from './component/Header';
import DashBoard from './Screens/DashBoard';
import OrderScreen from './Screens/OrderScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolios from './Screens/Portfolio';

import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './HOC/privateRoute';
import Strategy from './Screens/strategy';
import AuthenticateBroker from './Screens/Auth.broker';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  
          <Routes> 
              <Route path="/" exact element={<PrivateRoute  test="working fine" Component={DashBoard}/>} />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/portfolio" element={<PrivateRoute Component={Portfolios}/>} />
              <Route path="/order" element={<PrivateRoute Component={OrderScreen}/>} />
              <Route path="/strategy" element={<PrivateRoute Component={Strategy} />} />
              <Route path="/authBroker" element={<PrivateRoute Component={AuthenticateBroker} />} />
          </Routes>
      </Router>
    </div>
  );
}
//https://www.youtube.com/watch?v=i8K4ITKzEKE
export default App;