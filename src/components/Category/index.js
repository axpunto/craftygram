import React from 'react'
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'

export const Category = ({cover = DEFAULT_IMAGE, path, emoji }) => (
    <Anchor href={path}>
        <Image src={cover} />
        {emoji}
    </Anchor>
)