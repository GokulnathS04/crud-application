// import React, { useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Example from "./border";

// export default function Crud() {

//   var [apidata, setapidata] = useState([]);
//   var [depValue,setDepValue] = useState(false);
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = (showData) =>{ 
//     setShow(true);
//     setsingledata({
//       id:showData.id,
//       location:showData.location,
//       name:showData.name,
//       phoneNo:showData.phoneNo,
//       qualification:showData.qualification,
//       emailID:showData.emailID
//     });
    
//   }
//   const [singledata,setsingledata]=useState({
//     id:null,
//     name:null,
//     emailID:null,
//     phoneNo:null,
//     qualification:null,
//     location:null

//   })
  
//   useEffect(() => {
//     fetch('https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData', {
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//     }).then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//     }).then(tasks => {
//       setapidata(tasks)
//     }).catch(error => {
      
//     })
//   }, [depValue])

//   const deleteUser = (xyz) =>{
  
//     fetch(`https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData/${ xyz.id}`, {
//       method: 'DELETE',
//     }).then(res => {
//       if (res.ok) {
//           return res.json();
//       }
//       // handle error
//     }).then(task => {
//       // Do something with deleted task
//       alert("Deleted Successfully")
//       setDepValue(!depValue)
//     }).catch(error => {
//       // handle error
//     })
    
//     }
    
// const addUser =() => {
//   setShow(true);
//   setsingledata({
//     id:null,
//     name:null,
//     emailID:null,
//     phoneNo:null,
//     qualification:null,
//     location:null
//   })
// }
  
//   return (
//     <div className="border-2">
//       <Button variant="warning" className="px-4 m-3 fw-bolder " onClick={() => addUser()}> Add New Data</Button>  
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th className="p-4">S.No</th>
//             <th className="p-4">Name</th>
//             <th className="p-4">Email-id</th>
//             <th className="p-4">phoneno</th>
//             <th className="p-4">qualification</th>
//             <th className="p-4">location</th>
//             <th className="p-4">action</th>
            
//           </tr>
//         </thead>
//          <tbody>
//           {apidata?.map((item, i) => {
//             return (
              
//               <tr>
//                 <td className="p-3">{i + 1}</td>
//                 <td className="p-3"> {item.name}</td>
//                 <td className="p-3">{item.emailID}</td>
//                 <td className="p-3">{item.phoneNo}</td>
//                 <td className="p-3">{item.qualification}</td>
//                 <td className="p-3">{item.location}</td>
//                 <td className="p-3">
//                   <Button variant="success" onClick={()=>handleShow(item)}>Edit</Button> 
//                   <Button variant="danger" onClick={() => deleteUser(item)}>Delete</Button></td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </Table>
//       <Example popupshow={show} close={handleClose} formData={singledata} setFormData={setsingledata} setDepValue = {setDepValue} depValue = {depValue} />
//     </div>
//   );
// }

import React, {useState,useEffect} from "react";
import {Table,Button} from 'react-bootstrap';
import Border from './border';



export default function Crud(){
    var [data,setData]=useState([])
    var [depvalue,setdepvalue]=useState(false);
    // functionality for poup show and close
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (showData) => {
      setShow(true);
      setUserData({
        ID:showData.ID,
        NAME:showData.NAME,
        EMAIL:showData.EMAIL,
        PHONE:showData.PHONE,
        ADDRESS:showData.ADDRESS,
      })
    }
    const [userData,setUserData]=useState(
      {
        ID:null,
      NAME:null,
      EMAIL:null,
      PHONE:null,
      ADDRESS:null,
      }
            )
    // fetch for api 
    useEffect(()=>{
        fetch('https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
    setData(tasks);
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})
    },[depvalue] )

    // for delete functionality
    const deleteDetails=(del)=>{
      fetch(`https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData/${del.ID}`, {
          method: 'DELETE',
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
          // handle error
        }).then(task => {
          setdepvalue(!depvalue);
          alert("DELETED SUCCESSFULLY😎");
        }).catch(error => {
          // handle error
        })
    }
    const addUser=()=>{
      setShow(true);
     setUserData( {
        ID:null,
      NAME:null,
      EMAIL:null,
      PHONE:null,
      ADDRESS:null,
      })
    }
         
    
return(
   <div>
   {/* table content */}
   <h1 className="header">CRUD APPLICATION</h1>
   <Button className="m-2" variant="success" onClick={()=>addUser()}>ADD NEW DATA</Button>
   <Table striped bordered hover size="sm" variant="dark" >
      <thead>
        <tr>
          <th>R.NO</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>ADDRESS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
            data?.map((item,i)=>{
                return(
                <tr>
                    <td>{i+1}</td>
                    <td>{item.NAME}</td>
                    <td>{item.EMAIL}</td>
                    <td>{item.PHONE}</td>
                    <td>{item.ADDRESS}</td>
                    <td><Button className="m-2" variant="success" onClick={()=>handleShow(item)}>EDIT</Button><Button className="m-2" variant="danger" onClick={()=>deleteDetails(item)}>DELETE</Button></td>
                  </tr>  
                )
            })
        }
        
      </tbody>
    </Table>
    <Border show={show} handleclose={handleClose} userData={userData}  setUserData={setUserData} depvalue={depvalue} setdepvalue={setdepvalue}/>
   </div>
)
}