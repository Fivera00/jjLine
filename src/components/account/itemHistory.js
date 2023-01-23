const ItemHistory = ({num, city, date, count, total}) => {
    return (
        <div className="history-item">
            <h2>Pedido #{num}</h2>
            <div className="history-description">
                <div className="field-history">
                    <h3>Ciudad:</h3>
                    <p>{city}</p>
                </div>
                <div className="field-history">
                    <h3>Fecha:</h3>
                    <p>{date}</p>
                </div>
                <div className="field-history">
                    <h3>Items:</h3>
                    <p>{count}</p>
                </div>
                <div className="field-history">
                    <h3>Total:</h3>
                    <p>${total}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemHistory