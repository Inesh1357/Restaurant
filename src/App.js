import {Component} from 'react'

import RestaurantContext from './RestaurantContext'
import Restaurant from './components/Restaurant'
import './App.css'

class App extends Component {
  state = {foodList: []}

  onIncrement = foodItem => {
    this.setState(prevState => ({
      foodList: [...prevState.foodList, foodItem],
    }))
  }

  onDecrement = id => {
    const {foodList} = this.state

    let countVal = 0
    const filterDataListAdd = foodList.map(eachItem => {
      if (countVal === 0 && eachItem.dishId === id) {
        countVal += 1
        return null
      }
      return eachItem
    })
    const dataFilterValue = filterDataListAdd.filter(
      eachItem => eachItem !== null,
    )

    this.setState({
      foodList: dataFilterValue,
    })
  }

  render() {
    const {foodList} = this.state
    return (
      <RestaurantContext.Provider
        value={{
          foodList,
          onIncrement: this.onIncrement,
          onDecrement: this.onDecrement,
        }}
      >
        <Restaurant />
      </RestaurantContext.Provider>
    )
  }
}

export default App
