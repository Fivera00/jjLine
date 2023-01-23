import Router from 'next/router'

const ModalProduct = () => {

    const handleContinueBuy = () => {
        // Router.push('/categories/[]')
        // alert("no se que hacer xD")
        Router.back()
    }

    const handleGoCart = () => {
        Router.push('/cart')
    }

    return (
        <div className="modal fade" id="productModal" tabIndex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal-container">
                        <h5>Se añadio con exito su producto</h5>
                        <div>
                            <button data-dismiss="modal" onClick={(e) => handleContinueBuy(e)}>
                                Continuar Comprando
                            </button>
                        </div>
                        <div>
                            <button data-dismiss="modal" onClick={(e) => handleGoCart(e)}>
                                Ver Carrito de Compras
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProduct