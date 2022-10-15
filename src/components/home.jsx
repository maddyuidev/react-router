import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Home Page</div>
            <button className='btn btn-primary btn-sm' onClick={() => navigate('order-summary')}>Place Order</button>
        </>
    )
}