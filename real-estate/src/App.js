import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Auth from './pages/auth/Auth';
import Expense from './pages/expenseTracker/Expense';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth/>}/>
          <Route path="/expense-tracker" exact element={<Expense/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
