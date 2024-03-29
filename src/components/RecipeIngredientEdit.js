import React from "react";

function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        onChange={e => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        className="recipe-edit__input"
        type="text"
        onChange={e => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button
        onClick={() => handleIngredientDelete(ingredient.id)}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}

export default RecipeIngredientEdit;
