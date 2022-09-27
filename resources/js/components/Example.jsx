import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
 
//function Example(){
  //  const get_name[]=>{
    //    axios.get("https://localhost/topicos22/public/")

    //}
//}

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        

                        <Button variant="primary">pri</Button>{' '}
                        <div className="card-header">Example components </div>

                        <div className="card-body">esto es la página prinipal</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

