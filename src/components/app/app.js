import React from "react";
import { 
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

import { 
  SignInPage,
  SignUpPage,
  SchedulePage
} from '../pages';

import './app.css';


const App = () => {
  return(
    <div className="app">
      <Router>
        <Routes>
          <Route path="/authentication/sign-in" element={<SignInPage />} exact/>
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route path="/main/schedule" element={<SchedulePage />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;