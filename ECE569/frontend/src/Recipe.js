import React,{Component} from 'react';

import {Button,ButtonToolbar} from 'react-bootstrap';

export class Recipe extends Component{

    constructor(props){
        super(props);
        this.state={recipes:[]}
    }

    refreshList(){ 
        fetch()     //////////////////
        .then(response=>Response.json())
        .then(date=>{
            this.setState({recipes: data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {recipes}=this.state;
        let UpdateRecipeList=()=>this.setState();
        return(
        <div>
            <Table recipeName="mt-4" striped bordered hover size="med">
            <thead>
                <tr>RecipeName</tr>
                <tr>RecipeIngredients</tr>
                <tr>TimeRequired</tr>
                <tr>Options</tr>
            </thead>
            <tbody>
                {recipes.map(recipe=>
                     <tr key={recipe.recipeID}>
                        <td>{recipe.recipeName}</td>
                        <td>{recipe.recipeIngredients}</td>
                        <td>{recipe.TimeRequired}</td>
                        <td>Update Recipes</td>
                    </tr>)}
            </tbody>

        </Table>

        <ButtonToolbar>
            <Button variant='primary'
            onClick={()=>this.setState()}>
            Add Food</Button>

            <AddFoodModal show ={this.state.addModalShow}
            onHide={addModalClose}>
            </AddFoodModal>
         </ButtonToolbar>
      </div>
        )
    }
}


