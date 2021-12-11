import  Header from './components/Header';
import { useState } from 'react';
import { AddCustomerForm } from './components/AddCustomerForm';
import { CustomerList } from './components/CustomerList';

function App() {
  const[customers, setCustomers] = useState([
    { id: '1kjb32kjnr5kj', name: 'Joakim' }
  ])

  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm />
        <CustomerList customers={customers} />
      </div>
    </div>
  );
}

export default App;
