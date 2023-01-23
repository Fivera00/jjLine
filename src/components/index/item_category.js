import Router, {useRouter} from 'next/router'

const ItemCategory = (props) => {

    const handleItemCategory = (e) => {
        // sube el scroll automaticamente :D
        // document.documentElement.scrollTop = 0;
        Router.push('/products/[pid]', `/products/${props.item.name}`)
    }

    return (
        <div onClick={(e) => handleItemCategory(e)} className="card-item">
            <div>
                <img src={props.item.img} alt=""/>
            </div>
            <div className="name-category">
                <p>
                    {props.item.name}
                </p>
            </div>
        </div>
    )
}

export default ItemCategory