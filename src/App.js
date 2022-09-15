import './App.css';
import Employee from './components/Employee';


function App() {
  const showEmployees = true;
  return (
    <div className="App">
    {showEmployees ? 
      <>  
        <Employee name="Ambi" role="Intern"/>
        <Employee name="Abby
        "/>
        <Employee name="John"/>
      </>
       :
       <p>You cannot see the employempmes</p>
    }
    </div>
  );
}

export default App;
