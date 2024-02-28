// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// function Example(sample) {
//   const saveChanges = () => {
//     sample.handleclose();
//     fetch(`https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData/${sample.formData.id}`,
//       {
//         method: 'PUT', // or PATCH
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(sample.formData)
//       }).then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         // handle error
//       }).then(task => {
//         // Do something with updated task
//         sample.setDepValue(!sample.depValue);
//       }).catch(error => {
//         // handle error
//       })
//   }

  
//   const addnew = () => {
//     if (sample.formData.name!= null && sample.formData.id!= null && sample.formData.emailID!= null
//       && sample.formData.phoneNo!= null && sample.formData.qualification!= null && sample.formData.location!= null) { 
//       fetch('https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData',
//         {
//           method: 'POST',
//           headers: { 'content-type': 'application/json' },
//           // Send your data in the request body as JSON
//           body: JSON.stringify(sample.formData)
//         }).then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           // handle error
//         }).then(task => {
//           // do something with the new task
//           sample.setDepValue(!sample.depValue);
//         }).catch(error => {
//           // handle error
//         })
//       sample.handleclose();
//     }
//      else {
//       alert("enter a all value")
//     }
//   }
//   return (
//     <>


//       <Modal show={sample.popupshow} onHide={sample.close}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="enter your name"
//                 defaultValue={sample.formData.name}
//                 onChange={(e) => sample.setFormData({ ...sample.formData, name: e.target.value })}
//                 autoFocus
//               />
//               <Form.Label>Email-id</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="enter your email-id"
//                 defaultValue={sample.formData.emailID}
//                 onChange={(e) => sample.setFormData({ ...sample.formData, emailID: e.target.value })}
//                 autoFocus
//               />
//               <Form.Label>phoneno</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="enter a phone-no"
//                 defaultValue={sample.formData.phoneNo}
//                 onChange={(e) => sample.setFormData({ ...sample.formData, phoneNo: e.target.value })}
//                 autoFocus
//               />
//               <Form.Label>qualification</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="enter a text"
//                 defaultValue={sample.formData.qualification}
//                 onChange={(e) => sample.setFormData({ ...sample.formData, qualification: e.target.value })}
//                 autoFocus
//               />
//               <Form.Label>location</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="enter a location"
//                 defaultValue={sample.formData.location}
//                 onChange={(e) => sample.setFormData({ ...sample.formData, location: e.target.value })}
//                 autoFocus
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={sample.close}>
//             Close
//           </Button>
//           {sample.formData.id == null ? <Button variant="success" onClick={addnew}>Add User</Button>
//             :
//             <Button variant="primary" onClick={saveChanges}>Save Changes</Button>}
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalPop(sample) {
  const updateApiCall=()=>{
    sample.handleclose();
    fetch(`https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData/${sample.userData.ID}`,{
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify(sample.userData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      sample.setdepvalue(!sample.depvalue)
    }).catch(error => {
      // handle error
    })
  }

  // add new row
  const addnew=()=>{
    if(sample.userData.NAME!=null && sample.userData.PHONE!=null && sample.userData.EMAIL!=null && sample.userData.ADDRESS!=null){
    fetch('https://65c35b0539055e7482c0ac41.mockapi.io/crud/userData', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(sample.userData)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    sample.setdepvalue(!sample.depvalue)
    alert("Added Successfully😍😎")
  }).catch(error => {
    // handle error
  })
  sample.handleclose();
}
else{
  alert("Please Full All Details");
}
  }   
  
  return (
    <>
      <Modal show={sample.show} onHide={sample.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gokulnath"
                autoFocus
                defaultValue={sample.userData.NAME}
                onChange={(e)=>sample.setUserData({...sample.userData,NAME:e.target.value})}
              />
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                defaultValue={sample.userData.EMAIL}
                autoFocus
                onChange={(e)=>sample.setUserData({...sample.userData,EMAIL:e.target.value})}
              />
               <Form.Label>PHONE</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+91 90988 98000"
                defaultValue={sample.userData.PHONE}
                autoFocus
                onChange={(e)=>sample.setUserData({...sample.userData,PHONE:e.target.value})}
              />
              <Form.Label>ADDRESS</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your City"
                defaultValue={sample.userData.ADDRESS}
                onChange={(e)=>sample.setUserData({...sample.userData,ADDRESS:e.target.value})}
                autoFocus
              />
            </Form.Group>  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={sample.handleclose}>
            Close
          </Button>
          {sample.userData.ID==null ?<Button variant="warning" onClick={addnew}>ADD</Button> :<Button variant="primary" onClick={updateApiCall}>Save Changes</Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}
