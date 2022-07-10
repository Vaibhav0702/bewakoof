import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProductsData } from '../../Redux/Products/action';



import "./filter.css"

export default function SimpleAccordion() {


    const [searchParams, setSearchParems] = useSearchParams();


    const [sort, setSort] = useState(searchParams.get("sort") || "desc")

    const [category, setCategory] = useState(searchParams.get("category") || "shirt");

    const [gender, setGender] = useState(searchParams.get("gender") || "male")


    const dispatch = useDispatch();



    useEffect(() => {

        if (category || sort || gender) {

            setSearchParems({ category: category, sort: sort, gender: gender });

            let params = {
                category: searchParams.get("category"),
                gender: searchParams.get("gender"),
                _sort: "price",
                _order: `${sort}`
            };


            dispatch(getProductsData(params));

        }




    }, [dispatch, setSearchParems, searchParams, sort, category, gender])




    const categoryHandler = (value) => {

        console.log(value);
        setCategory(value.target.value);


    }



    const genderHandler = (value) => {

        console.log("value", value);

        setGender(value.target.value);


    }






    return (
        <>


            <div className="filterContainer">

                <div className="sortBox">

                    <h3 className='title'>SORT BY PRICE</h3>

                    <button className='Sortbtn' disabled={sort === "asc"} onClick={() => setSort("asc")}    >Low to High</button>
                    <button className='Sortbtn' disabled={sort === "desc"} onClick={() => setSort("desc")}     >High to Low</button>


                </div>


                <div className="filterBox">


                    <h3 className='title'>FILTER BY GENDER</h3>


                    <select className='select' name="gender" id="gender" value={gender} onChange={genderHandler}     >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                </div>




                <div className="filterBox">


                    <h3 className='title'>FILTER BY CATEGORY</h3>

                    <div className='selectBox'>

                        <select className='select' name="category" id="category" value={category} onChange={categoryHandler}     >
                            <option value="shirt"> Shirt </option>
                            <option value="Tshirt">T-Shirt</option>
                            <option value="kurta">Kurta</option>
                        </select>
                    </div>

                </div>

























            </div>








        </>
    );
}
