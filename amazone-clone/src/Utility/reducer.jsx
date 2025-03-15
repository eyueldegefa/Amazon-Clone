import { Type } from './actionType'

export const initialState = {
    basket: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            // Check if the item is already in the basket
            const existingItemIndex = state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
            if (existingItemIndex === -1) {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, amount: 1 }]
                }
            } else {
                const updatedBasket = state.basket.map((item) => {
                    return item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
                })
                return {
                    ...state,
                    basket: updatedBasket
                }
            }
        case Type.REMOVE_FROM_BASKET:
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                if (newBasket[index].amount > 1) {
                    newBasket[index].amount -= 1;
                } else {
                    newBasket.splice(index, 1);
                }
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}