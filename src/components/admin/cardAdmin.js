import Router, { useRouter } from 'next/router'
const CardAdmin = (props) =>{

    const handleNav=(product)=>{
        Router.push('/admin/[aid]', `/admin/${product}`)
    }
    return(
        <div className="card" onClick={() => handleNav(props.url)} style={{cursor:'pointer'}}>
            <div className="card-header">
                {props.title}
            </div>
            <ul className="card-body ">
                <svg viewBox="0 0 24 24">
                    <path d={props.icon} />
                </svg>
            </ul>
            <div className="card-body">
               {props.datos}
            </div>
        </div>
    );

};
export default CardAdmin;