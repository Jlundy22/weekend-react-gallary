import { useState } from 'react';

function GalleryItem({ galleryItem, handleLikeClick}) {
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
                <div>
                    <img onClick={pictureClick} src={galleryItem.path} alt="" width="100" height="100" />
                    <button onClick={()=>updateLike(galleryItem.id)}>LIKE</button>
                    Likes: {galleryItem.likes}
                </div>
            }
            {!displayPicture &&
                <div>
                    <div onClick={pictureClick}>{galleryItem.description}</div>
                    <button  onClick={()=>updateLike(galleryItem.id)} >LIKE</button>
                    Likes: {galleryItem.likes}
                </div>
            }
        </div>
    )
}

export default GalleryItem;