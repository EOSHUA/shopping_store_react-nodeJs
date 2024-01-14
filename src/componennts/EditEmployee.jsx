import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee({item}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='warning'  className='btn btn-outline-secondary btn-sm ' onClick={handleShow}>
        click my .........
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='text-center' closeButton >
          <Modal.Title>descreption</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <img class="img_ULj" src="https://images.quik.co.il/general-assets/imgs/product/nutrients/sugar.svg"
         title="סוכר בכמות גבוהה" alt="סוכר בכמות גבוהה" width="20%"></img>
          <h1>{item.name}</h1>
          <h3>price:  {item.price}</h3>
         <p>
         הנתונים המדויקים מופיעים על גבי המוצר, 
         אין להסתמך על הפירוט המופיע באתר, 
         יתכנו טעויות או אי התאמות, יש לקרוא את המופיע על גבי אריזת המוצר לפני השימוש.
          התמונות והתאריכים המופיעים הינם להמחשה בלבד ואין להסתמך עליהם.
         </p>
        <img src={item.image} width="100%"></img>
       
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default EditEmployee;