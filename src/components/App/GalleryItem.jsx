import { useState } from 'react';

function GalleryItem({ galleryItem }) {
    const [displayPicture, setDisplayPicture] = useState(true);

    const pictureClick = () => {
        setDisplayPicture(!displayPicture);
    }

    return (
        <div>
            {displayPicture &&
                <div>
                    <img onClick={pictureClick} src={galleryItem.path} alt="" width="100" height="100" />
                    <button>LIKE</button>
                    Likes: {galleryItem.likes}
                </div>
            }
            {!displayPicture &&
                <div>
                    <div onClick={pictureClick}>{galleryItem.description}</div>
                    <button>LIKE</button>
                    Likes: {galleryItem.likes}
                </div>
            }
        </div>
    )
}

export default GalleryItem;