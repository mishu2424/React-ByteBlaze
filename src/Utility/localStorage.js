import toast from "react-hot-toast";

const getStoredCart=()=>{
    const getCart = localStorage.getItem('blogs');
    if(getCart){
        return JSON.parse(getCart);
    }
    return [];
}

const addToStorage=id=>{
    const storedCart = getStoredCart();
    if(storedCart.includes(id)){
        console.log('It already exists');
        toast.error('It already exists!');
        return;
    }else{
        storedCart.push(id);
    }
    localStorage.setItem('blogs',JSON.stringify(storedCart));
    toast.success('It has been added!')
}

const removeFromCart=id=>{
    const getStoredCarts=getStoredCart();
    const filteredCarts=getStoredCarts.filter(cartId=>cartId!==id);
    localStorage.setItem('blogs',JSON.stringify(filteredCarts));
    toast.success('This item has been deleted!')
}

export {getStoredCart, addToStorage, removeFromCart}