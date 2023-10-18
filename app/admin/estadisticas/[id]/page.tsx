import s from './estadisticas.module.scss'

interface EstadisticasProps {
    id: string;
}

export default function Estadisticas({params} : { params: EstadisticasProps } ) {
    const id = params.id
    return (
        <div className={`admin-container`}>
            <h1>Estadisticas del evento</h1>
            <h2>{id}</h2>
        </div>
    )
}