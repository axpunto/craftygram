import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List } from './styles'

const { categories } = require('../../../api/db.json')

export const CategoryList = () => {
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
    })

    const renderList = (fixed) => {
        return (
            <List fixed={fixed}>
                {
                    categories.map(category => (
                        <li key={category.id}>
                            <Category {...category}/>
                        </li>
                    ))
                }
            </List>
        )
    }

    return (
        <Fragment>
            {renderList()}
            { showFixed && renderList(true)}
        </Fragment>

    )
}