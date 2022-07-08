import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProductsData } from '../../Redux/Products/action';

import "./filter.css"

export default function SimpleAccordion() {


    const [searchParams, setSearchParems] = useSearchParams();


    const [sort ,setSort] = useState(searchParams.get("sort")  || "desc"  )

 const [category , setCategory] = useState(searchParams.getAll("category") || []);



    
  const dispatch = useDispatch();

  

   useEffect(()=>{
          
    if (category || sort) {

        setSearchParems({ category: category, sort: sort });
  
        let params = {
          category: searchParams.getAll("category"),
          _sort: "price",
          _order: `${sort}`
        };
  
  
        dispatch(getProductsData(params));
  
      }
  
  


   },[dispatch , setSearchParems, searchParams,sort,category])









    return (
        <>

           
           <div className="filterBox">

               <div className="sortBox">

                      <h3 className='title'>SORT BY PRICE</h3>

                     <button  className='Sortbtn'   disabled={sort === "asc"}   onClick={()=>setSort("asc")}    >Low to High</button>
                     <button  className='Sortbtn'    disabled={sort === "desc"}   onClick={()=>setSort("desc")}     >High to Low</button>


               </div>



               
           </div>


           





        </>
    );
}
