import React from 'react'
import { Anchor, Image } from './styles';

export const Category = ({cover, path, emoji }) => {
    return (
        <Anchor href={path}>
            <Image src={!cover ? 'https://media.tenor.com/guhB4PpjrmUAAAAC/loading-loading-gif.gif' : cover }/>
            {emoji}
        </Anchor>
    )
}