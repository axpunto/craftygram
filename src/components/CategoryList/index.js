import React from 'react'
import { Category } from '../Category'
import { List } from './styles'

const { categories } = require('../../../api/db.json');

export const CategoryList = () => (
    <List>
        {
            categories.map(category => (
                <li key={category.id}>
                    <Category {...category}/>
                </li>
            ))
        }
    </List>
)