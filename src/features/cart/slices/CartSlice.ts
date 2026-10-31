import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartResponse} from "../../network/models/response/cart/CartResponse.ts";
import {ProductDto} from "../../network/models/response/product/ProductDto.ts";

interface CartState {
    response: CartResponse
}


export const initialCartState: CartState = {
    response: {
        status: 'idle',      // Safe default status string (e.g., 'idle', 'success', or '')
        numOfCartItems: 0,   // Empty state defaults to 0 items
        cartId: '',          // Empty string fallback for ID
        data: {
            products: [],    // Safe empty array initialization
            totalCartPrice: 0 // Free/Zero total price
        }
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addToCart(state, action: PayloadAction<ProductDto>) {
            const product = action.payload
            const products = state.response.data.products
            const existingProduct = products.find((item) => item.product.id === product.id)

            if (existingProduct) {
                existingProduct.count += 1
            } else {
                products.push({
                    count: 1,
                    product: product,
                    price: product.price ?? 0
                })
            }
            /// calculate total price for cart
        },
        removeFromCart(state, action: PayloadAction<ProductDto>) {
            const product = action.payload
            state.response.data.products.filter((item) => item.product.id !== product.id)
            /// calculate total price for cart

        },
        updateCartQty(state, action: PayloadAction<{ productDto: ProductDto, count: number }>) {
            const product = action.payload.productDto
            const count = action.payload.count
            const products = state.response.data.products
            const existingProduct = products.find((item) => item.product.id === product.id)
            if (existingProduct) {
                existingProduct.count = count
            }

        },
    }
})


export const {addToCart, removeFromCart, updateCartQty} = cartSlice.actions
export default cartSlice.reducer

//
// export const selectCartItems = (state) =>


