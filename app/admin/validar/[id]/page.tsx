// ESTA ES LA PAGINA PARA VALIDAR LOS TICKETS
// PEDIR PASSWORD
// ABRIR CAMARA
// Y VALIDAR



export default async function ValidateTicket( { params }: { params: { id: string } }) {    
    const i = params.id
    return(   
        <main>QR Scan {i}</main>
    )
}