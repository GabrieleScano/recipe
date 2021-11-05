import { useState } from 'react'

import {IngredientForm} from './IngredientForm'
import IngredientList from './IngredientList'
import Search from './Search'

export const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([])

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { 
        id: Math.random().toString(),
        ...ingredient 
      }
    ])
  }

  const removeIngredientHandler = ingredientId => {
    setUserIngredients(prevIngredients => {
      return prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    })
  }

  return (
    <>
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </>
  )
}