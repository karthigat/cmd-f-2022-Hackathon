import React,{Component} from 'react';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddFoodModal} from './AddFoodModal';

export class Food extends Component{

    constructor(props){
        super(props);
        this.state={foods:[]}

    }

    refreshList(){ 
        fetch(process.env.REACT_APP_API+'food')
        .then(response=>Rrsponse.json())
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
        return(
        <div foodName="mt-4" striped bordered hover size="med">
            <thread>
                <tr>FoodName</tr>
                <tr>FoodQuantity</tr>
                <tr>DatePurchased</tr>
                <tr>Options</tr>
            </thread>
            <tbody>
                {foods.map(food=>
                    <tr key={food.foodName}>
                        <td>{food.foodQuantity}</td>
                        <td>{food.datePurchased}</td>
                        <td>Edit / Delete</td>

                    </tr>)}
            </tbody>
        </div>
        )
    }
} 