import Link from 'next/link';
import s from './evento.module.scss'

interface BuyFormProps {
    price: number;
    quantity: number;
    type: string;
}

async function getEventById(id: string) {
    const res = await fetch(`${process.env.apiUrl}/events/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch dataa');
    } 
    return res.json();
}

export function BuyForm({price, quantity, type}: BuyFormProps) {
    return (
        <form action="" className={s.buy_form}>
        <div className={`${s.columns}`}>
            <div className={s.form_area}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder='Nombre'/>
            </div>
            <div className={s.form_area}>
                <label htmlFor="last-name">Apellido</label>
                <input type="text" name="last-name" id="last-name" placeholder='Apellido'/>
            </div>
            <div className={s.form_area}>
                <label htmlFor="dni">DNI</label>
                <input type="text" name="dni" id="dni" placeholder='DNI'/>
            </div>
            <div className={s.form_area}>
                <label htmlFor="phone">Telefono</label>
                <input type="phone" name="phone" id="phone" placeholder='Telefono'/>
            </div>

        </div>
        <div className={s.form_area}>
            <label htmlFor="email">E-MAIL</label>
            <input type="email" name="email" id="email" placeholder='email'/>
        </div>
        <div className={s.form_area_inline}>
            <input type="checkbox" name="phone" id="phone" placeholder='Telefono'/> 
            <label htmlFor="phone">He leido y acepto los Terminos y condiciones</label>
        </div>
        <Link href={`/success`}>Finalizar compra</Link>
    </form>
    )
}

export default async function Event({params}: {params: {id: string}}) {
    const { event }  = await getEventById(params.id);
    const date = new Date(event.date)
    let dateStr = date.toLocaleDateString(); 
    let timeStr = date.toLocaleTimeString(); 
    
    return (<>
        <div className={s.header}>
            {/* agregrar imagen */}
        </div>
        <div className={s.event_wrapper}>
            <div className={`${s.inner}`}>
                <div className={s.event_info}>
                    <h1>{event.title}</h1>
                    <div className={`${s.date_area}`}>
                        <div className={s.date}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.3499999 7.93750025" version="1.1" x="0px" y="0px"><g transform="translate(0,-290.64999)"><path d="M 5.9863281 0.98242188 A 1.0001001 1.0001001 0 0 0 4.9980469 2.0019531 L 4.9980469 2.9980469 L 4.0019531 2.9980469 C 2.3572439 2.9980469 0.99609371 4.3592071 0.99609375 6.0039062 L 0.99609375 20 C 0.99609375 21.644699 2.3572439 23.003906 4.0019531 23.003906 L 19.998047 23.003906 C 21.642756 23.003906 23.001953 21.644699 23.001953 20 L 23.001953 6.0039062 C 23.001953 4.3592071 21.642756 2.9980469 19.998047 2.9980469 L 19.001953 2.9980469 L 19.001953 2.0019531 A 1.0001001 1.0001001 0 0 0 17.982422 0.98242188 A 1.0001001 1.0001001 0 0 0 17 2.0019531 L 17 2.9980469 L 13 2.9980469 L 13 2.0019531 A 1.0001001 1.0001001 0 0 0 11.988281 0.98242188 A 1.0001001 1.0001001 0 0 0 10.998047 2.0019531 L 10.998047 2.9980469 L 6.9980469 2.9980469 L 6.9980469 2.0019531 A 1.0001001 1.0001001 0 0 0 5.9863281 0.98242188 z M 4.0019531 5 L 4.9980469 5 L 4.9980469 6.0039062 A 1.0002461 1.0002461 0 1 0 6.9980469 6.0039062 L 6.9980469 5 L 10.998047 5 L 10.998047 6.0039062 A 1.0002461 1.0002461 0 0 0 13 6.0039062 L 13 5 L 17 5 L 17 6.0039062 A 1.0002461 1.0002461 0 0 0 19.001953 6.0039062 L 19.001953 5 L 19.998047 5 C 20.569347 5 21.001953 5.4325929 21.001953 6.0039062 L 21.001953 9 L 2.9960938 9 L 2.9960938 6.0039062 C 2.9960938 5.4325929 3.4306526 5 4.0019531 5 z M 2.9960938 11 L 21.001953 11 L 21.001953 20 C 21.001953 20.571276 20.569347 21.003906 19.998047 21.003906 L 4.0019531 21.003906 C 3.4306526 21.003906 2.9960938 20.571276 2.9960938 20 L 2.9960938 11 z M 6 13 A 1.0000001 1.0000001 0 0 0 5 14 A 1.0000001 1.0000001 0 0 0 6 15 A 1.0000001 1.0000001 0 0 0 7 14 A 1.0000001 1.0000001 0 0 0 6 13 z M 12 13 A 1.0000001 1.0000001 0 0 0 11 14 A 1.0000001 1.0000001 0 0 0 12 15 A 1.0000001 1.0000001 0 0 0 13 14 A 1.0000001 1.0000001 0 0 0 12 13 z M 18 13 A 1.0000001 1.0000001 0 0 0 17 14 A 1.0000001 1.0000001 0 0 0 18 15 A 1.0000001 1.0000001 0 0 0 19 14 A 1.0000001 1.0000001 0 0 0 18 13 z M 6 17 A 1.0000001 1.0000001 0 0 0 5 18 A 1.0000001 1.0000001 0 0 0 6 19 A 1.0000001 1.0000001 0 0 0 7 18 A 1.0000001 1.0000001 0 0 0 6 17 z M 12 17 A 1.0000001 1.0000001 0 0 0 11 18 A 1.0000001 1.0000001 0 0 0 12 19 A 1.0000001 1.0000001 0 0 0 13 18 A 1.0000001 1.0000001 0 0 0 12 17 z M 18 17 A 1.0000001 1.0000001 0 0 0 17 18 A 1.0000001 1.0000001 0 0 0 18 19 A 1.0000001 1.0000001 0 0 0 19 18 A 1.0000001 1.0000001 0 0 0 18 17 z " transform="matrix(0.26458334,0,0,0.26458334,0,290.64999)"/></g></svg>
                            </span>
                            {dateStr}
                        </div>
                        <div className={s.time}>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px"><path d="m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm0,28c-7.168,0-13-5.832-13-13S8.832,3,16,3s13,5.832,13,13-5.832,13-13,13Zm5.625-9.781c.432.345.501.974.156,1.405-.197.247-.488.375-.781.375-.219,0-.44-.072-.624-.219l-5-4c-.237-.189-.375-.477-.375-.781v-5c0-.552.448-1,1-1s1,.448,1,1v4.52l4.625,3.7Z"/></svg>
                            </span>
                            {timeStr}hs
                        </div>
                        <div className={s.address}>
                            <span>
                            <svg viewBox="0 0 48 60" version="1.1" xmlSpace="preserve" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><g transform="matrix(1,0,0,1,-48,-48)"><g><path d="M72,51C81.383,51 89,58.617 89,68C89,72.886 86.562,77.915 83.501,82.138C79.227,88.036 73.882,92.336 73.882,92.336C73.882,92.336 73.882,92.337 73.882,92.337C72.783,93.221 71.217,93.221 70.118,92.337C70.118,92.337 70.118,92.336 70.118,92.336C70.118,92.336 64.773,88.036 60.499,82.138C57.438,77.915 55,72.886 55,68C55,58.617 62.617,51 72,51ZM72,61C68.137,61 65,64.137 65,68C65,71.863 68.137,75 72,75C75.863,75 79,71.863 79,68C79,64.137 75.863,61 72,61Z"/></g></g></svg>
                            </span>
                            {event.address}
                        </div>
                    </div>                    
                    <p className={s.description}>{event.description}</p>                
                </div>
                <div className={s.image_area}>
                    <div className={s.box}></div>
                </div>
            </div>
            <div className={s.buy_area}>
                <h1>Compra tu entrada</h1>
                {/* ACA VA EL FORM */}
                <BuyForm price={5000} quantity={1} type={"General"} />
                <div className={s.price_grid}>
                    <div className={s.grid_header}>
                        <div className={s.type}>Tipo</div>
                        <div className={s.price}>Precio</div>
                        <div className={s.quantity}>Cantidad</div>
                        <div className={s.total}>Total</div>

                    </div>
                    <div className={`${s.grid_content}`}>
                        <div className={s.type}>General</div>
                        <div className={s.price}>$5000</div>
                        <div className={s.quantity}>
                            <select name="quantity" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className={s.total}>$500</div>
                    </div>
                    <div className={s.buy}>
                       <button>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}