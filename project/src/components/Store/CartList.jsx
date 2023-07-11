import {useSelector} from 'react-redux';

export default function CartList(){
    let list = useSelector((state)=> state.cart);

    return(
        <div className={style.cartlist}>
            list.map((item)=> {
                return <CartItem key={item.id} item={item}/>;}
       </div>

    );
}