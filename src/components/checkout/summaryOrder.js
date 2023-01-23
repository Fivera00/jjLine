import Router from 'next/router'

import ItemSummary from './itemSummary'

const SummaryOrder = ({data}) => {

    const handleBackCart = (e) => {
        Router.back()
    }

    const handleEndBuy = (e) => {
        alert("finaliza la compra XD")
    }

    const getSubtotal = (array) => {
        let total = 0;
        array.forEach(element => {
            total += element.total
        });
        return total.toFixed(2);
    }

    // calculos faster jsjs
    const subtotal = getSubtotal(data);
    const total = parseFloat(subtotal)  + 5;

    return (
        <div className="col-12 col-md-5">
            <div className="summary">
                {data.map((product, id) => (
                    <ItemSummary item={product} key={id}/>
                ))}
            </div>

            <div className="summary-total">
                <div className="item-summary-total">
                    <h2>Subtotal:</h2>
                    <p>${subtotal}</p>
                </div>
                <div className="item-summary-total">
                    <h2>Envio:</h2>
                    <p>$5</p>
                </div>
            </div>

            <div className="summary-end">
                <div className="item-summary-total">
                    <h2 className="bold">Total:</h2>
                    <p>${total.toFixed(2)}</p>
                </div>
            </div>

            <div className="summary-buttons">
                <button onClick={(e) => handleEndBuy(e)}>Realizar Pedido</button>
                <button onClick={(e) => handleBackCart(e)}>Volver al carrito</button>
            </div>
        </div>
    )
}

export default SummaryOrder