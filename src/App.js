import React from 'react';
import { CategoryList } from './components/CategoryList';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardList } from './components/PhotoCardList'
import { Logo } from './components/Logo';

export const App = () => (
    <div>
        <GlobalStyle/>
        <Logo/>
        <CategoryList/>
        <PhotoCardList/>
    </div>
)
