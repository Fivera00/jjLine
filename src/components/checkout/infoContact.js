
const InfoContact = () => {

    const change = (event) => {
        if (event.target != undefined) {
            let element = document.getElementById(event.target.id + "L");
            if (event.target.value != "") {
                element.classList.add("arriba");
            } else {
                element.classList.remove("arriba");
                element.classList.remove("invalid");
            }
        }
    }

    return (
        <div className="col-12 col-md-7 contact-info">

            <h1>Información de contacto</h1>

            <div className="checkout-head">
                <img src="/img/carousel_1.svg" alt="foto de perfil" />
                <p>José Ochoa (pepval001@gmail.com)</p>
            </div>

            <h2>Dirección de envio</h2>

            <form>
                
                <div className="input-checkout">
                    <div className="group">
                        <label id="nameCKL" className="arriba">Nombres</label>
                        <input onChange={change} type="text" id="nameCK"
                            aria-label="Nombres" defaultValue="José" required />
                    </div>
                </div>

                <div className="input-checkout">
                    <div className="group">
                        <label id="lastNameCKL" className="arriba">Apellidos</label>
                        <input onChange={change} type="text" id="lastNameCK"
                            aria-label="Apellidos" defaultValue="Ochoa" required />
                    </div>
                </div>

                <div className="input-checkout">
                    <div className="group">
                        <label id="addressCKL" >Dirección</label>
                        <input onChange={change} type="text" id="addressCK"
                            aria-label="Dirección" required />
                    </div>
                </div>

                <div className="input-checkout">
                    <div className="group">
                        <label id="addressCKL" >Casa, Apartamento, etc. (Opcional)</label>
                        <input onChange={change} type="text" id="addressCK"
                            aria-label="Casa, Apartamento"/>
                    </div>
                </div>

                <div className="input-checkout">
                    <div className="group">
                        <label id="cityCKL" >Ciudad</label>
                        <input onChange={change} type="text" id="cityCK"
                            aria-label="Ciudad" required />
                    </div>
                </div>

                <div className="input-checkout">
                    <div className="group">
                        <label id="phonrCKL" >Teléfono</label>
                        <input onChange={change} type="text" id="phonrCK"
                            aria-label="Teléfono" required />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default InfoContact