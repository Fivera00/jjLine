
const CarouselProduct = ({ images }) => {
    return (
        <div className="bg-carousel-product col-12 col-md-6">
            <div id="carouselProducts" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {images.map((item, id) => (
                        <li data-target="#carouselProducts" data-slide-to={id} className={id == 0 ? "active" : null} />
                    ))}
                </ol>
                <div className="carousel-inner">
                    {images.map((image, id) => (
                        <div className={"carousel-item " + (id == 0 ? "active" : null)} >
                            <img className="d-block w-100 product-img"
                                src={image.img} alt={image.name} />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselProducts" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselProducts" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div >
    )
}

export default CarouselProduct