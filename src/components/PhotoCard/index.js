import React from "react";
import { ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({id, likes, src}) => (
    <article>
        <a href={`/detail/${src}`}>
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
        </a>
        <Button>
            <MdFavoriteBorder size="20px" />{likes} Likes
        </Button>
    </article>
)