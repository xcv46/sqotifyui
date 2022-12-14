import React, { useRef, useEffect, useState } from 'react';
import '../Search/index.css';
import DDD from '../BrowseCategories';
const Search = () => {
    const [limiter, setLimiter] = useState(0)
    const mainInnerRef = useRef()
    const dataCategories = [
        {
            id: 1,
            name: '瀏覽全部',
        }
    ]

    useEffect(() => {
        const handleWindowResize = () => {
            const calculation = Math.floor(
                mainInnerRef.current.getBoundingClientRect().width / 45
            )
            setLimiter(calculation)
        }
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <div className='SearchcardsmainInner' ref={mainInnerRef}>
                <input className='INPUT' placeholder="想聽什麼？"></input>
            {dataCategories.map((category, id) => (
                <div className='SearchcardsWrap' key={id}>
                    <h2>{category.name}</h2>
                    <DDD category_id={category.id} limiter={limiter} />
                </div>
            ))}
        </div>
    )
}

export default Search
