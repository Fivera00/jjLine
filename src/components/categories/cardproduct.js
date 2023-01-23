import Router, { useRouter } from 'next/router'

const ProductC = (props) => {

    const handleProductC = (e) => {
        // sube el scroll automaticamente :D
        // document.documentElement.scrollTop = 0;
        Router.push('/products/[pid]', `/products/${props.data.name}`)
    }

    return (
        <div onClick={(e) => handleProductC(e)} className="card-product">
            <div style={{ overflow: "hidden" }}>
                <img src={props.data.img} alt="Polos" style={{}} />
            </div>
            <div className="color-product  scroll-horizontal">
                {props.data.colors.map((color, id) => (<div className="cuadrado"
                    key={id} style={{ background: color.color }} />))}
            </div>
            <div className="name-product">
                <div className="text-small">
                    <p>
                        {props.data.name}
                    </p>
                    <p className="bold">
                        ${props.data.price}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProductC