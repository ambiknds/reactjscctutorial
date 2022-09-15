import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  
  return (
    <div className="App bg-slate-200">
    {showEmployees ? (
      <>  
        <input type = "text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <div className='flex flex-wrap justify-center'>
          <Employee 
            name="Ambi" 
            role="Intern" 
            img="https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=400"

          />
          <Employee 
            name="Abby" 
            role={role} 
            img="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <Employee 
            name="John"
            role={role}
            img="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=400"  
          />
          <Employee 
            name="Ambi" 
            role="Intern" 
            img="https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=400"

          />
          <Employee 
            name="Abby" 
            role={role} 
            img="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <Employee 
            name="John"
            role={role}
            img="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=400"  
          />
          <Employee 
            name="Ambi" 
            role="Intern" 
            img="https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=400"

          />
          <Employee 
            name="Abby" 
            role={role} 
            img="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <Employee 
            name="John"
            role={role}
            img="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=400"  
          />
        </div>
      </>
      ) : (
       <p>You cannot see the employempmes</p>
       )}
    </div>
  );
}

export default App;
