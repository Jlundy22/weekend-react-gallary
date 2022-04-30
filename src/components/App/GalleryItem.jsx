
function GalleryItem({ galleryItem }) {
    return (
        <div>
            <img src={galleryItem.path} width="100" height="100" />
            {galleryItem.description}
            <button>LIKE</button>
            Likes: {galleryItem.likes}
        </div>
    )




}

export default GalleryItem;