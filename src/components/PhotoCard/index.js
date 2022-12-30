import React, { Fragment, useEffect, useState, useRef }from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({id, likes, src}) => {
    
    // ref hook an element from the DOM
    // ref hook use by passing it as prop
    const domElement = useRef (null)
    const [showImage, setShowImage] = useState(false)

    // Lazy loading option using useEffect, useState and useRef.
    useEffect(() => {
        Promise.resolve(() => {
            // IntersectionObserver from browser api has isIntersecting 
            // to know if the DOM element is visible through view port.
            // some browsers doesn't support IntersectionObserver
            // if it's undefined, then import it as a pollyfill 
            // npm i intersection-observer needed as a production dependency
            typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
        }).then(() => {
            const observer = new window.IntersectionObserver(entries => {
                const { isIntersecting } = entries[0]
                isIntersecting && (setShowImage(true), observer.disconnect())
            })
            observer.observe(domElement.current);
        })
    }, [domElement])

    return (
        <Article ref={domElement}>
            {
                showImage && 
                <Fragment>
                    <a href={`/detail/${src}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size="20px" />{likes} Likes
                    </Button>
                </Fragment>
            }
        </Article>
    )
}