import {FiShoppingCart} from 'react-icons/fi'

import RestaurantContext from '../../RestaurantContext'
import './index.css'

const Header = props => {
  const {restaurantName} = props
  return (
    <RestaurantContext.Consumer>
      {value => {
        const {foodList} = value
        console.log(foodList)
        return (
          <div className="header-bg">
            <h1 className="header-heading">{restaurantName}</h1>
            <div className="header-ins">
              <p className="header-para">My Orders</p>
              <FiShoppingCart className="header-icon" />

              <div className="cart-div">
                <p className="cart-num">{foodList.length}</p>
              </div>
            </div>
          </div>
        )
      }}
    </RestaurantContext.Consumer>
  )
}

export default Header
