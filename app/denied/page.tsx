import Link from "next/link";

export default function Denied() {

    return (
        <section>
            <h1>Acceso denegado</h1>
            <p>¿Qué haces acá?</p>
            <Link href="/">Home</Link>
        </section>
    )
}

