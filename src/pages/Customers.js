import {useState, useEffect} from 'react'

function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    console.log('Fetching...')
    fetch('http://localhost:8000/api/customers/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCustomers(data.customers);
    })
  }, [])
  return (
    <div>
      <h1>Here are our Customers</h1>
      
      {customers ?
        customers.map((customer) => {
        return (
          <div>
            <table >
              <tr>
                <td className='border-black border-2'>{customer.name}</td>
                <td className='border-black border-2'>{customer.industry}</td>
              </tr>
            </table>
          </div>
        )
      })
      : <p>Unable to load customer</p>
      }
    </div>
  )
}

export default Customers