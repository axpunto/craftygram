import React from "react";
import { PhotoCard } from "../PhotoCard";
import { Ul } from "./styles";

const { photos } = require('../../../api/db.json');

export const PhotoCardList = () => (
    <Ul>
        {
            photos.map(photo => <PhotoCard key={ photo.id } { ...photo }/>)
        }
    </Ul>
)