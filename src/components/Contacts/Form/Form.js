import {useState} from 'react'

function Form({addContact,contacts}){


const initialFormValues={fullname:"",phone_number:""}
 const [form,setForm]=useState(initialFormValues)

 const onChangeInput=(event)=>{
    setForm({...form,[event.target.name]:event.target.value})
 }




 const onSubmit=(e)=>{
    e.preventDefault();
 
    if(form.fullname==="" || form.phone_number===""){
        return false;
    }

    addContact([...contacts,form]);

setForm(initialFormValues)

 }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input
                name ="fullname"
                placeholder='Full Name'
                value={form.fullname}
                onChange={onChangeInput}/>
        </div>
        <div>
            <input
                name ="phone_number"
                placeholder='Phone Number' 
                value={form.phone_number}
                onChange={onChangeInput}   />
        </div>
        <div className='Btn'>
            <button className='Btn-btn' >Add</button>
        </div>
    </form>
  ) 
}

export default Form;