
const ItemSummary = ({ item }) => {
    return (
        <div className="summary-item">
            <div className="img-description">
                <div className="img-summary">
                    <div className="summary-count"><p>{item.count}</p></div>
                    <img src={item.img} alt="" />
                </div>

                <div className="description-summary">
                    <p>{item.name}</p>
                    <p>{item.size}</p>
                </div>
            </div>
            <div className="price-summary">
                <p>${item.total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ItemSummary