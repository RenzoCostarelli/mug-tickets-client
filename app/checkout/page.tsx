"use client"
// si el usuario está logueado muestra el purchase-form con datos autocompletados
// si no está logueado, redirige a pantalla de login/registro

import FormPurchase from "../components/form-purchase";

export default function Checkout() {
    return <>
        <FormPurchase />
    </>
}