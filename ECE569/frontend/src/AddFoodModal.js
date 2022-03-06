import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddFoodModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventdefault();
        fetch( { // ADD URL HERE
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                FoodID:null,
                FoodName:event.target.FoodName.value,
                FoodDatePurchased:event.target.FoodDatePurchased.value,
                FoodQuantity:event.target.FoodQuantity
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">
<Modal{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>  
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                 Add Food
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlID="FoodName">
                            <Form.Label>FoodName</Form.Label>
                            <Form.Control type="text" name="FoodName" required
                            placeholder="FoodName"/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add Food
                            </Button>
                        </Form.Group>

                    </Form>

                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group FoodDatePurchased="FoodDatePurchased">
                            <Form.Label>FoodDatePurchased</Form.Label>
                            <Form.Control type="text" name="FoodDatePurchased" required
                            placeholder="FoodDatePurchased"/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add purchase date
                            </Button>
                        </Form.Group>
                        </Form>

                    <Form onSubmit={this.handleSubmit}>
                     <Form.Group FoodQuantity="FoodQuantity">
                            <Form.Label>FoodQuantity</Form.Label>
                            <Form.Control type="text" name="FoodQuantity" required
                            placeholder="FoodQuantity"/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add quantity
                            </Button>
                        </Form.Group>
                        </Form>

                </Col>
            </Row>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
</Modal>
        </div>


     )
    }
}