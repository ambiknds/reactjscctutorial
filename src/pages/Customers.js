import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../shared';
function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    // console.log('Fetching...')
    const url = baseUrl + 'api/customers/'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCustomers(data.customers);
    })
  }, [])
  return (
    <div className='flex flex-col justify-items-center content-center'>
      <h1>Here are our Customers</h1>
      
      {customers ?
        customers.map((customer) => {
        return (
          <ul>
            <li>
              <Link to={"/customers/" + customer.id}>{customer.name}</Link>
            </li>
          </ul>
          )
        
          
      })
      : <p>Unable to load customer</p>
      }
    </div>
  )
}

export default Customers