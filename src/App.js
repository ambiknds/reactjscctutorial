import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  
  return (
    <div className="App">
    {showEmployees ? (
      <>  
        <input type = "text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <Employee name="Ambi" role="Intern"/>
        <Employee name="Abby" role={role}/>
        <Employee name="John"/>
      </>
      ) : (
       <p>You cannot see the employempmes</p>
       )}
    </div>
  );
}

export default App;
