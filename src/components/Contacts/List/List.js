import {useState} from 'react'

function List({contacts}) {

    const [filterText,setFilterText]=useState("");
    const filtered=contacts.filter((item)=>{
        return (
            Object.keys(item).some((key)=>{
                return(
                    item[key].toString().toLowerCase().includes(filterText)
                )
            })
        )
    })
    
  return (
    <div>
        <input placeholder='Use Filter' 
        value={filterText} 
        onChange={(event)=>setFilterText(event.target.value)}/>
       
        <ul className='list'>
            {
                filtered.map((concact,index)=>{
                    return <li  className="list-li" key={index}>
                       <span>Person:{concact.fullname}</span>

                       
                       <span>Number:{concact.phone_number}</span>

                        </li>
                })
            }
        </ul>
        <p>Total Contacts({filtered.length})</p>
    </div>
  )
}

export default List;


