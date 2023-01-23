import Router from 'next/router'

const DefaultPage = () => {
    const Redirect = (e) => {
        Router.push('/')
    }

    return (
        <div className="default-page">
            <img src="https://media.giphy.com/media/4bAEIAB84zPwc/source.gif" alt="gatitoooos" />
            <h1> Ups! Algo nos falto </h1>
            <h4>Si vez esta página es que nos falto tiempo para diseñar esta sección. Contacta con el equipo de desarrollo.</h4>
            <button onClick={(e) => Redirect(e)}>Volver al HomePage</button>
        </div>
    )
}

export default DefaultPage