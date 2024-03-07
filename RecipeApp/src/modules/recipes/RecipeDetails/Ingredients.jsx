export const Ingredients = ({ recipe }) => {
    const ingredientIndexes = Array.from({length: 20}, (_, i) => i + 1);

    return (
        <ul>
            {
                ingredientIndexes.map(index => (
                    recipe[`strIngredient${index}`] !== "" && recipe[`strIngredient${index}`] !== null ?
                        <li>{recipe[`strIngredient${index}`]} {recipe[`strMeasure${index}`]} </li> : null
                ))
            }
        </ul>
    )
}