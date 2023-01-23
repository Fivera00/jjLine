const Filter =(props)=>{
    return (
        <div className="col-sm-3 ">
            <div className="input-group mb-3">
                <div className="">
                    <label className="input-group-text " for="inputGroupSelect01" >Ordenar:</label>
                </div>
                <select className="custom-select " id="inputGroupSelect01">
                    <option selected>______________</option>
                    <option value="1 ">Precio</option>
                    <option value="2">Mas vendido</option>
                    <option value="3">Promocion</option>
                </select>
            </div>
        </div>
        
    )
}
export default Filter