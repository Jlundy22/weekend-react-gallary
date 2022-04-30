import GalleryItem from './GalleryItem.jsx';

import './GalleryList.css';

function GalleryList({
    galleryList,
    handleLikeClick
}) {

    return (
    <div className='item-contatiner'>
        {galleryList.map((galleryItem) => {
            return (
            <GalleryItem
                key={galleryItem.id}
                galleryItem={galleryItem}
                handleLikeClick={handleLikeClick} />
            )
        })}
    </div>
    )
}

export default GalleryList;