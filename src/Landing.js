import React , {useEffect,useState} from 'react';
import { getData } from './Services/api';
import EachCoin from './EachCoin';
import styles from './Landing.module.css';
import Loading from "./gif/loading.webp"

const Landing = () => {

    const [coins,setCoins] = useState([]);

    useEffect(()=>{
        const fetchAPI = async() =>{
            const data = await getData();
            console.log(data);
            setCoins(data);
        }

        fetchAPI();
    },[])

    return (
        <div className={styles.container}>
            <input type='text' placeholder='Search'/>
            {coins.length ?
            <div>
                    {
                     coins.map(item=><EachCoin key={item.id} image={item.image} price={item.current_price} name={item.name} symbol={item.symbol} marketCap={item.market_cap} priceChange={item.price_change_percentage_24h}/>)
                    }
            </div>:
             <img src={Loading} style={{width:"100%",height:"100%"}}/>
            }
        </div>
    );
};

export default Landing;