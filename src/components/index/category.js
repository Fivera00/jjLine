import ItemCategory from './item_category'

const Category = (props) => {

    return (
        <div className="container-category">
            <h1>{props.gender == 0 ? "Para él" : "Para ella"}</h1>
            <div className="scroll-horizontal">
                {props.data.map((item, id) => (
                    <ItemCategory key={id} item={item} />
                )
                )}
            </div>
        </div>
    )
}

export default Category