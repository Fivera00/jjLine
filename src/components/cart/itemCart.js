const ItemCart = ({ data, id, callback, changeCount }) => {

    const onChangeCount = () => {
        const value = document.getElementById("countCart" + id).value
        if (value !== "" && value > 0) {
            const total = parseFloat(data.price) * parseInt(document.getElementById("countCart" + id).value, 10)
            changeCount(value, total, id)
        }
    }

    return (
        <div className="cart-item">
            <div>
                <img src={data.img} alt="" />
            </div>
            <div className="cart-description">
                <h2>{data.name}</h2>
                <p>Talla: {data.size}</p>
                <p>Precio: ${data.price}</p>
            </div>
            <div className="cart-count">
                <input type="number" id={"countCart" + id} placeholder="1" defaultValue={data.count}
                    onChange={onChangeCount}
                    min="1" max="49" aria-valuemax="49" aria-valuemin="1" aria-label="Cantidad de articulo" />
            </div>
            <div className="cart-total">
                <p>Total: ${data.total.toFixed(2)}</p>
            </div>
            <div className="cart-delete" onClick={(e) => callback(id, e)}>
                <svg viewBox="0 0 24 24">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
            </div>
        </div>
    )
}

export default ItemCart