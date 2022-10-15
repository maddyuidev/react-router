import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyCake, makeCake } from '../redux'

const CakeContainerHooks = (props) => {
    // console.log(props)
    const cake = useSelector(state => state.cake)
    // console.log(cake)
    const dispatch = useDispatch();
    return ( 
        <div>
            <h2>Number of Cakes : { cake.numberOfCakes }</h2>
            <button onClick={(() => dispatch(buyCake()))}>Buy Cake</button>
            <button onClick={(() => dispatch(makeCake()))}>Make Cake</button>
        </div>
     );
}

 
export default CakeContainerHooks;