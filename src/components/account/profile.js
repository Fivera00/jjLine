import Link from 'next/link';
import Router from 'next/router'

const Profile = ({data}) => {

    const handleBackHome = () => {
        Router.push("/")
    }

    const handleRouterAccount = (id) => {
        Router.push("/account/[acid]", `/account/${id}`)
    }

    return (
        <div>
            <div className="header-search">
                <h1>Mi cuenta</h1>
                <div className="line" />
            </div>
            <div className="profile">
                <div className="photo-profile">
                    <img src="/img/carousel_2.svg" alt="Foto de perfl" />
                </div>
                <div className="info-profile">
                    <div className="field-profile">
                        <h2>Nombres:</h2>
                        <p>{data.firstName}</p>
                    </div>
                    <div className="field-profile">
                        <h2>Apellidos:</h2>
                        <p>{data.lastName}</p>
                    </div>
                    <div className="field-profile">
                        <h2>Correo eléctronico:</h2>
                        <p>{data.email}</p>
                    </div>
                    <div className="field-profile">
                        <h2>Teléfono:</h2>
                        <p>Sin número</p>
                    </div>
                </div>
            </div>
            <div className="cart-buttons">
                <button onClick={(e) => handleRouterAccount("edit_account")}>Editar Perfil</button>
                <button onClick={(e) => handleRouterAccount("history")}>Ver historial</button>
            </div>
            <div className="profile-button">
                <button onClick={(e) => handleBackHome(e)} >Volver al HomePage</button>
            </div>
        </div>
    )
}

export default Profile