import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { Ul } from './styles'

const { categories } = require('../../../api/db.json')

// custom hook must be declared before functional component 
const initApiCall = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        !loading && setTimeout(() => setLoading(true), 2000)
    }, [])
    
    // custom hooks must return something
    return loading
}

export const CategoryList = () => {
    const loader = initApiCall()
    
    // state hook
    const [showFixed, setShowFixed] = useState(false)

    // effect hook
    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)
    })

    const renderCategoryList = (fixed) => {
        return (
            <Ul fixed={fixed}>
                {
                    categories.map(category => (
                        <li key={category.id}>
                            { loader ? <Category {...category}/> : <Category/> }
                        </li>
                    ))
                }
            </Ul>
        )
    }

    return (
        <Fragment>
            { renderCategoryList() }
            { showFixed && renderCategoryList(true)}
        </Fragment>

    )
}