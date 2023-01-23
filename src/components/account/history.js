import Link from 'next/link'
import Router from 'next/router'
import ItemHistory from "./itemHistory";

const History = () => {

    const handleBackAccount = (e) => {
        Router.push("/account")
    }

    return (
        <div>
            <div className="header-search">
                <h1>Mis Pedidos</h1>
                <div className="line" />
            </div>
            <div className="history">
                <ItemHistory num={1} city={"Piñas"} date={"06/08/2020"} count={"5"} total={"150"} />
                <ItemHistory num={2} city={"Machala"} date={"07/08/2020"} count={"2"} total={"50"} />
                <ItemHistory num={3} city={"Guayaquil"} date={"10/08/2020"} count={"7"} total={"200"} />
                <ItemHistory num={4} city={"Riobamba"} date={"14/08/2020"} count={"1"} total={"25"} />

                <div className="profile-button" style={{ marginTop: "25px" }}>
                    <button onClick={(e) => handleBackAccount(e)} >Volver al perfil</button>
                </div>
            </div>
        </div>
    )
}

export default History