import { ChangeEvent, ReactNode } from 'react'
import s from './ui-dropdown.module.scss'

type DropDown = {
    children: JSX.Element | JSX.Element[],
    id: string,
    name: string,
    onChangeEvent?: ChangeEvent
}

export default function DropDown({children, id, name}: DropDown) {
    return (
        <select name={name} id={id}>
            {children}
        </select>
    )
}