import {Component} from 'react'

import RestaurantContext from '../../RestaurantContext'
import './index.css'

class CategoryItem extends Component {
  state = {}

  render() {
    const {categoryItem, decrement, increment} = this.props
    const {
      dishAvailability,
      dishName,
      dishImage,
      dishPrice,
      dishCurrency,
      dishCalories,
      dishDescription,
      addonCat,
      dishId,
      count,
    } = categoryItem
    const z = addonCat.length > 0
    return (
      <RestaurantContext.Consumer>
        {value => {
          const {foodList, onIncrement, onDecrement} = value

          const addListPage = foodList.filter(
            eachItem => eachItem.dishId === dishId,
          )

          const onClickSub = () => {
            onDecrement(dishId)
            decrement(dishId)
          }
          const onClickAdd = () => {
            onIncrement({...categoryItem, quality: 1})
            increment(dishId)
          }
          const cartValue = addListPage.length > 0 ? addListPage.length : count
          return (
            <>
              <li className="li">
                <div className="kkl">
                  <h1 className="li-heading">{dishName}</h1>
                  <p className="li-price">
                    {dishCurrency} {dishPrice}
                  </p>
                  <p className="li-para">{dishDescription}</p>
                  {dishAvailability ? (
                    <div className="bg-btn">
                      <button
                        className="oo-btn"
                        type="button"
                        onClick={onClickSub}
                      >
                        -
                      </button>
                      <p className="add-count">{cartValue}</p>
                      <button
                        className="oo-btn"
                        type="button"
                        onClick={onClickAdd}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <p className="calcries">Not available</p>
                  )}
                  {z && <p className="csk">Customizations available</p>}
                </div>
                <p className="calcries">{dishCalories} calcries</p>
                <img src={dishImage} alt={dishName} className="item-img" />
              </li>
              <hr />
            </>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default CategoryItem
