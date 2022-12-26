import React from "react";
import { PhotoCard } from "../PhotoCard";

const { photos } = require('../../../api/db.json');

export const PhotoCardList = () => (
    <ul>
        {
            photos.map(photo => <PhotoCard key={ photo.id } { ...photo }/>)
        }
    </ul>
)