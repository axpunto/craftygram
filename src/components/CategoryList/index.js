import React from 'react'
import { Category } from '../Category'
import { List } from './styles'

export const CategoryList = () => (
    <List>
        {
            [1,2,3,4,5,6,7,8,9].map(() => (
                <li>
                    <Category/>
                </li>
            ))
        }
    </List>
)