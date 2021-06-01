import React, {Component} from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';
class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
      }
    render(){
        
          
        const {title, img, instructions,id,onDelete}=this.props;
        // or title= this.props.title
        const ingredients= this.props.ingredients.map((ing, index)=>(
          <li key={index}> {ing} </li>
        ));
        return (
            <div className="recipe-card">
            <div className="recipe-card-img"><img src={img} alt={title}/>
            </div>
            <div className="recipe-card-content">
           <h3 className="recipe-title"> Recipe {title} </h3>
           <h4>ingredients</h4>
           <ul>
               {ingredients}
           </ul>
           <h4>instructions</h4>
           <p>{instructions}</p>
           <button type="button" onClick={()=>this.props.onDelete(id)}> DELETE</button>

           </div>
           
           </div>
        );
    }
}

export default Recipe;