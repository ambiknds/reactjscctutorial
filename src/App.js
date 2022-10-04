import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  // const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { 
        id:1,
        name:"Ambi", 
        role:"Dev", 
        img: "https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg"
      },
      {
        id:2,
        name:"John", 
        role:"None", 
        img:"https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg"
      },
      {
        id:3,
        name:"Jack",
        role:"None",
        img:"https://images.pexels.com/photos/5648100/pexels-photo-5648100.jpeg"
      },
      {
        id:4,
        name:"Alan",
        role:"None",
        img:"https://images.pexels.com/photos/3894495/pexels-photo-3894495.jpeg"
      },{
        id:5,
        name:"Tom",
        role:"None",
        img:"https://images.pexels.com/photos/4041089/pexels-photo-4041089.jpeg"
      },{
        id:6,
        name:"Alice",
        role:"None",
        img:"https://images.pexels.com/photos/13328567/pexels-photo-13328567.jpeg"
      }
    ]
  )
  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) =>{
      if(id == employee.id) {
          return {...employee , name:newName, role:newRole}
      }
      return employee
    });
    setEmployees(updatedEmployees)
  }

  const showEmployees = true;
  return (
    <div className="App bg-slate-200">
    {showEmployees ? (
      <>  
        {/* <input type = "text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        /> */}
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            return (
              <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img ={employee.img}
              updateEmployee={updateEmployee}
            />
            )
          })}
        </div>
      </>
      ) : (
       <p>You cannot see the employempmes</p>
       )}
    </div>
  );
}

export default App;
