import React,{Component} from 'react';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddFoodModal} from './AddFoodModal';

export class Food extends Component{

    constructor(props){
        super(props);
        this.state={foods:[], AddFoodModal:false}
    }

    refreshList(){ 
<<<<<<< HEAD
        fetch("http://localhost:8000/api/get_recipes")
        .then(response=>Response.json())
=======
        //fetch(process.env.REACT_APP_API+'food')
        fetch("http://localhost:8000/api/get_recipes")
        .then(response=>Rrsponse.json())
>>>>>>> dae027480195cb70818f0e9fcb64b30a9cde8ea7
        .then(date=>{
            this.setState({foods: data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {foods}=this.state;
        let AddFoodModal=()=>this.setState({addModalShow:false});
        return(
        <div>
            <Table foodName="mt-4" striped bordered hover size="med">
            <thead>
                <tr>FoodName</tr>
                <tr>FoodQuantity</tr>
                <tr>DatePurchased</tr>
                <tr>Options</tr>
            </thead>
            <tbody>
                {foods.map(food=>
                     <tr key={food.foodName}>
                        <td>{food.foodQuantity}</td>
                        <td>{food.datePurchased}</td>
                        <td>Edit / Delete</td>

                    </tr>)}
            </tbody>

        </Table>

        <ButtonToolbar>
            <Button variant='primary'
            onClick={()=>this.setState({addModalShow:true})}>
            Add Food</Button>

            <AddFoodModal show ={this.state.addModalShow}
            onHide={addModalClose}>
            </AddFoodModal>
         </ButtonToolbar>
      </div>
        )
    }
} 