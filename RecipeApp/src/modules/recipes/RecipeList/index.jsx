import { Link } from 'react-router-dom';
import { ListItem } from '../ListItem';
import { Grid } from '@mui/material';
import { Main } from '../../../Components/Main';
import './styles.css';

export const RecipeList = ({ recipes, searchError }) => {
	return (
		<Main className='recipe-container'>
			{recipes.length > 0 ?
				(<Grid container spacing={4} className='recipes__list'>
					{
						recipes.map((recipe => <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}> <Link to={`/recipes/${recipe.idMeal}/details`} id={recipe.idMeal}><ListItem
						strMealThumb={recipe.strMealThumb}
						strMeal={recipe.strMeal}/></Link>
						</Grid>))
					}
				</Grid>) : (<p className='search-error-message'>{searchError}</p>)}
		</Main>
	);
};