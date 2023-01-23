const CardSales = (props)=>{
    return(
        <div className="card">
            <div className="card-header">
                {props.tventa}
            </div>
            <ul className="card-body ">
                <svg viewBox="0 0 24 24">
                    <path d={props.icon} />
                </svg>
            </ul>
            <div className="card-body">
               {props.total}
            </div>
        </div>
    )
};
export default CardSales;