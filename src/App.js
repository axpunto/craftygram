import React from 'react';
import { CategoryList } from './components/CategoryList';
import { GlobalStyle } from './GlobalStyles';
import { PhotoCardList } from './components/PhotoCardList'

export const App = () => (
    <div>
        <GlobalStyle/>
        <CategoryList/>
        <PhotoCardList/>
    </div>
)
