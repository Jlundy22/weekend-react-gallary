import GalleryItem from './GalleryItem.jsx';

function GalleryList({
    galleryList,
    handleLikeClick

}) {
    return (
        <ul>
          {galleryList.map((galleryItem) => {
            return (
              <GalleryItem 
                key={galleryItem.id}
                galleryItem={galleryItem}
                handleLikeClick={handleLikeClick} />
            )
          })}
        </ul>
      )
}

export default GalleryList;