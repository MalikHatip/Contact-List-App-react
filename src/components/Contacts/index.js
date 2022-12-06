import {useEffect, useState} from 'react'
import List from './List/List';
import Form from './Form/Form';
import  "./style.css";

function Contacts() {
    const [contacts,setContacts]=useState([{
        fullname:"Selin",
        phone_number:"111111"
    },
    {
        fullname:"Ayşe",
        phone_number:"2222222"
    },{
        fullname:"Mehmet",
        phone_number:"3333333333"
    },
    {
        fullname:"Ahmet",
        phone_number:"444444"    },
        {
            fullname:"Abdullah",
            phone_number:"05067889907"    }

]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])

  return (
    <div id='container'>
        <h1 className='Header'>Contact List</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>

        </div>
  )
}

export default Contacts;                                                                                                                                                                                                                                                            