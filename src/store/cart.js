function initState(){
    return{
        //localStorage에서 역직렬화 하여 데이터 추출
        productsInCart: JSON.parse(localStorage.getItem('productsInCart')) || [],
        totalQuantity: localStorage.getItem('totalQuantity') || 0,
    }
}

const practice={
    state: initState,
    mutations:{
        addCart(state, product){
            const existProduct = state.productsInCart.find(p => p.id === product.id);
            if(existProduct){
                existProduct.quantity += product.quantity;
            }else{
                state.productsInCart.push(product);
            }
            state.totalQuantity = parseInt(state.totalQuantity) + product.quantity;
            //localStorage에 데이터 직렬화하여 사용
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
            localStorage.setItem('totalQuantity', state.totalQuantity);
        },
        clearCart(state){
            state.productsInCart = [];
            state.totalQuantity =0;
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('totalQuantity');
        }
    },
    actions:{
        addCart(context, product){
            context.commit('addCart', product);
        },
        clearCart(context){
            context.commit('clearCart');
        },
        
    },
    getters:{
        getTotalQuantity : state => state.totalQuantity,
        getProductsInCart : state => state.productsInCart
    }
}

export default practice;