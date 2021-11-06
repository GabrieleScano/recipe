import React, { useState } from 'react'

import {Card} from '../UI/Card'
import './IngredientForm.css'

export const IngredientForm = React.memo(({onAddIngredient}) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    onAddIngredient({ 
      title: enteredTitle, 
      amount: enteredAmount 
    })
  }

  const onTitleChangeHandler = event => {
    setEnteredTitle(event.target.value)
  }
  
  const onAmountChangeHandler = event => {
    setEnteredAmount(event.target.value)
  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={onTitleChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={onAmountChangeHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  )
})
