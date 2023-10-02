import React from 'react';
import styles from "./Eachcoin.module.css";

const EachCoin = ({price,name,symbol,image,marketCap,priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={name}/>
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{priceChange}</span>
            <span>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default EachCoin;