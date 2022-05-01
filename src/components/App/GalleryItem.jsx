import { useState } from 'react';

import './GalleryItem.css';

import Button from '@mui/material/Button';

function GalleryItem({ 
    galleryItem,
    handleLikeClick
}) {
    const [displayPicture, setDisplayPicture] = useState(true);

    const pictureClick = () => {
        setDisplayPicture(!displayPicture);
    }

    const updateLike = (id) => {
        handleLikeClick(id);
    }

    return (
        <div>
            {displayPicture &&
                <div className='container'>
                    <img onClick={pictureClick} src={galleryItem.path} alt=""/>
                    <div>    
                        <Button variant="contained" size="small" onClick={()=>updateLike(galleryItem.id)}>LIKE</Button>
                        <div>
                            Likes: {galleryItem.likes}
                        </div>
                    </div>
                </div>
            }
            {!displayPicture &&
                <div className='container'>
                    <div className='img-description' onClick={pictureClick}>{galleryItem.description}</div>
                    <Button variant="contained" size="small" onClick={()=>updateLike(galleryItem.id)} >LIKE</Button>
                    <div>
                        Likes: {galleryItem.likes}
                    </div>
                </div>
            }
        </div>
    )
}

export default GalleryItem;