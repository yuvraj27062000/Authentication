import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Loader } from './Loader';
import { Error } from './Error'
// import PropTypes from 'prop-types'


function Activity(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const FetchingApis = async() => {

        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            
                    console.log("object")
                    setData(data.products)
                    setLoading(false)
                    setError(false)
                
        }
        catch (e) {
            console.log(e, "error");
            setLoading(false)
            setError(true)


        }
    }

    useEffect(() => {
        FetchingApis()

    }, [])

    return (
        <div  >
            <h3>Activity page</h3>
            <h3>Name of the iphones Brands</h3>
            {loading ? <Loader /> : <div className='design'>
                {
                    data.map((value, i) => {
                        return (
                            <div key={i}  >
                                <h3   >{value.brand}</h3>
                            </div>
                        )
                    })
                } 
            </div>}
            {error && <Error />}

        </div>
    )

}
export { Activity }

