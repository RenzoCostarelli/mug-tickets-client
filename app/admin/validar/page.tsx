// ESTA ES LA PAGINA PARA VALIDAR LOS TICKETS
// PEDIR PASSWORD
// ABRIR CAMARA
// Y VALIDAR

import QrReader from "@/app/components/qr-reader";

export default async function AdminValidate() {    
    return(   
        <main>
            <QrReader />
        </main>
    )
}