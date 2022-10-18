import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

 
function BasicExample(){
  const [formValue, setFormValue,]=useState({
    email:'',
    password:''

  })

  const [name, setName] = useState('')
  const [students, setStudents] = useState([])

  const onChange = (e) => {
    e.persist();
    setFormValue({...formValue, [e.target.name]: e.target.value})

  }

  const handleSubmit = (e) =>{

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData()
    formData.append("email", formValue.email)
    axios.post("http://localhost:8888/topicos22/public/api/show_test",
    formData,
    {
      headers: {'Content-Type': 'multipart/formData',
      'Accept': 'aplication/json'}}
    ).then(response => {
      if(response.status == 200){
        console.log(response.data)
        setStudents(response.data)


      }else console.log("Status", response.status)  


      
    }).catch(error => {
      console.log(error)
    });
  }

    return (
     <Container>
        <Row>
          <Col md={10}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" 
                   name="email" value={formValue.email} onChange={onChange}/>
                    <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                name="password"  />
                </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
          <Button variant="dark" type="submit">
             ingresar
          </Button>
    </Form>
    </Col>

    <Col md={4}>

      {students.map((student)=>(
        <Card style={{ width: '18rem' }} key={student.id}> 
        
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{student.email}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

))}

</Col>
 
    </Row>
    </Container>
    );
}

export default BasicExample;

