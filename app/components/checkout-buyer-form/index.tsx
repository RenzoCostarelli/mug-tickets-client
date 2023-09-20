import { Product } from '@/app/types/product';
import { MpButton } from '../mp-button';
import s from './checkout-buyer-form.module.scss'

interface BuyFormProps {
    eventId: string,
    price: number;
    quantity: number;
    total: number;
    type: string;
}

export default function CheckoutBuyerForm( {eventId, product}:{eventId: string, product: Product, user?: any} ) {

    // if user: autocompletar el form
    return (
<form action="/api/tickets" method="POST" className={s.buy_form}>            
            <input 
                type="hidden"
                name="id"
                value={eventId}/>
            <div className={s.columns}>
                <div className={s.form_area}>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder='Nombre'/>
                </div>
                <div className={s.form_area}>
                    <label htmlFor="dni">DNI</label>
                    <input 
                        type="text"
                        name="dni"
                        id="dni"
                        required
                        placeholder='DNI'/>
                </div>
                <div className={s.form_area}>
                    <label htmlFor="last-name">Apellido</label>
                    <input 
                        type="text" 
                        name="last-name" 
                        id="last-name"
                        required
                        placeholder='Apellido'/>
                </div>                    
                <div className={s.form_area}>
                    <label htmlFor="phone">Telefono</label>
                    <input 
                        type="phone"
                        name="phone"
                        id="phone"
                        required
                        placeholder='Telefono'/>
                </div>

            </div>
            <div className={s.form_area}>
                <label htmlFor="email">E-MAIL</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder='email'/>
            </div>
            <div className={s.form_area_inline}>
                <input
                    type="checkbox"
                    name="phone"
                    id="phone"
                    required
                    placeholder='Telefono'/> 
                <label htmlFor="phone">He leido y acepto los Terminos y condiciones</label>
            </div>
            <MpButton product={product}/> 
        </form>        
    )
}