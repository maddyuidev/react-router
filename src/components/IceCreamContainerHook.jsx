import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyIceCream, makeIceCream,   } from '../redux'

const IceCreamContainerHooks = (props) => {
    // console.log(props)
    const iceCream = useSelector(state => state.iceCream)
    // console.log(cake)
    const dispatch = useDispatch();
    return ( 
        <div>
            <h2>Number of Ice Creams : {iceCream.numberOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
            <button onClick={() => dispatch((makeIceCream()))}>Make Ice Cream</button>
        </div>
     );
}

 
export default IceCreamContainerHooks;