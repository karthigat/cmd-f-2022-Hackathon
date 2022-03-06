import React,{Component} from 'react';

export class Recipe extends Component{

    constructor(props){
        super(props);
        this.state={items:[], AddFoodModal:false}
    }

    componentDidUpdate(){
        this.getFoodItems();
    }

    getFoodItems(){
        fetch("http://localhost:8000/api/get_recipes")
        .then(response=>Rrsponse.json())
        .then(data=>{
            this.setState({items: data});
        })

    }

    render(){
        return(<div className='mt-5 d-flex justify-content-left'>
            <li>
                {items.map((item,i) => { return(<li>{item.foodname}
                <div class="checkbox checkbox-circle checkbox-color-scheme">
                        <label class="checkbox-checked">
                            <input type="checkbox" value={item.foodname} checked={item.isChecked} onChange={this.onAddingItem(i)}/>
                        </label>
                    </div></li>)})}
            </li>
        </div>
        )
    }
}