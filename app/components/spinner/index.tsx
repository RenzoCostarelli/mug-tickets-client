import s from './spinner.module.scss'

export default function Spinner() {
    return (
        <div className={s.lds_dual_ring}></div>
    )
}