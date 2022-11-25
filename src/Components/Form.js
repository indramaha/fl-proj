// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Container, Form } from 'react-bootstrap';
import {IoLogoWhatsapp} from 'react-icons/io'
import './Form.css'


function ContactForm() {
  const [state, handleSubmit] = useForm("xzbwqrvd");
  if (state.succeeded) {
      return(
        <div className='form-success'>
            <p className='form-success-p'>Thanks for joining!</p>
            <p className='form-success-p'>Silahkan Screen Shoot halaman ini untuk bukti</p>
            <p className='form-success-p'>Kontak Admin Untuk Melakukan Konfirmasi</p>
            <div className='form-success-button-bg'>
                <Button className='form-success-button' href='https://api.whatsapp.com/send/?phone=6282147054454&text&type=phone_number&app_absent=0'><IoLogoWhatsapp /> Admin</Button>
            </div>
        </div>
      );
  }
  return (
    <div className='form-section'>
        <Container>
            <div className='form-form-bg'>
                <div className='form-title'>
                    <h3 className='form-title-h3'>Registration Form</h3>
                </div>
                <Form onSubmit={handleSubmit} className='form-form'>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Full Name</Form.Label>
                        <Form.Control id="name" type='text' name="full-name" placeholder="Your Name"  required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="email">Email address</Form.Label>
                        <Form.Control id="email" type="email" name="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="number">Phone Number (WA)</Form.Label>
                        <Form.Control id="number" type='text' name="phone-number" placeholder='+62'  required/>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label htmlFor="number">Package Course</Form.Label>
                        <Form.Control id="number" type='text' name="Package-Course" placeholder='Please Type (EARLY BIRD 1899k)'  required/>
                    </Form.Group>
                    <Button className='form-button-submit' type="submit" disabled={state.submitting}>
                        Apply Now!
                    </Button>
                </Form>
            </div>
            
        </Container>
    </div>
  );
}

export default ContactForm;
// function App() {
//   return (
//     <ContactForm />
//   );
// }
// export default App;
