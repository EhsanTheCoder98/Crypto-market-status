import React , {useEffect,useState} from 'react';
import { getData } from './Services/api';

const Landing = () => {

    useEffect(()=>{
        const fetchAPI = async() =>{
            const data = await getData();
            console.log(data);
        }

        fetchAPI();
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Landing;