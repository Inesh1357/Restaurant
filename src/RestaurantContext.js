import React from 'react'

const RestaurantContext = React.createContext({
  foodList: [],
  onIncrement: () => {},
  onDecrement: () => {},
})

export default RestaurantContext
