

import React from 'react'
import { useSelector } from 'react-redux'

import Menhome from './Menhome'


const Home = () => {


 const store = useSelector((store) => store);

 console.log("Store",store)





    return (
        <>

            <Menhome />




        </>
    )
}

export default Home