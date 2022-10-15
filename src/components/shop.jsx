import React from 'react';
import {useSelector} from 'react-redux'

const Shop = () => {
    const {cake, iceCream} = useSelector(state => state)
    // const state = useSelector(state => state)
    // console.log(state)
    return ( 
        <h2>
            {/* In our shop we have {2} Cakes and  Ice Creams */}
            In our shop we have {cake.numberOfCakes} Cakes and {iceCream.numberOfIceCreams}  Ice Creams.
        </h2>
     );
}
 
export default Shop;