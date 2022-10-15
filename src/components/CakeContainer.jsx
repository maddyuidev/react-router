import React from 'react';
import {connect} from 'react-redux'
import { buyCake, makeCake } from '../redux'

const CakeContainer = (props) => {
    // console.log(props)
    return ( 
        <div>
            <h2>Number of Cakes : { props.numberOfCakes }</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.makeCake}>Make Cake</button>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake :()=> dispatch(buyCake()),
        makeCake :()=> dispatch(makeCake()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);