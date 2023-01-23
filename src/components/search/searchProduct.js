import ProductC from '../categories/cardproduct'

const SearchProduct = (props) => {
    return (
        <div className="product-container">
            {/*<h1>Soy Categories {id}</h1>*/}
            <ul className="custom-row justify-content-center">
                {props.data.map((product, id) => (
                    <ProductC key={id} data={product} />)
                )}
            </ul>
        </div>
    )
}

export default SearchProduct