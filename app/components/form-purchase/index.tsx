'use client'
import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import s from './form-purchase.module.scss';

interface BuyFormProps {
    eventId: string,
    price: number;
    quantity: number;
    total: number;
    type: string;
}

export function BuyForm({ eventId, price, quantity, type, total }: BuyFormProps) {
    const callApi = async () => {
        await fetch('/api/tickets', {
            method: 'POST',
            body: JSON.stringify({ price, quantity, type, total }),
        });
    }

    return (
        <>
        <div>{total}</div>
            <form action="/api/tickets" method="POST" className={s.buy_form}>
                <input 
                    type="hidden"
                    name="id"
                    value={eventId}/>
                <div className={`${s.columns}`}>
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
                {/* <Link href={`/success`}>Finalizar compra</Link> */}
                <button type="submit">FINALIZAR</button>
            </form>      
        </>
    )
}

export default function FormPurchase ({event}: any) {
  const date = new Date(event.date)
  let dateStr = date.toLocaleDateString(); 
  let timeStr = date.toLocaleTimeString();

  console.log('event', event.price)

  const [quantity, setQuantity] = useState<number>(1)
  const [total, setTotal] = useState<number>(event.price)
  const [showCheckout, setShowCheckout] = useState(false)

  const handleCheckoutClick = () => {
    setShowCheckout(true)
  }

  const calculateTotal = (e: ChangeEvent<HTMLSelectElement>) => {
    const qty = parseInt(e.target.value);
    setQuantity(qty)
    setTotal(qty * event.price)
  }

  return (
      <div className={s.price_grid}>
          <div className={s.grid_header}>
              <div className={s.type}>Tipo</div>
              <div className={s.price}>Precio</div>
              <div className={s.quantity}>Cantidad</div>
              <div className={s.total}>Total</div>
          </div>
          <div className={`${s.grid_content}`}>
              <div className={s.type}>General</div>
              <div className={s.price}>$ {event.price}</div>
              <div className={s.quantity}>
                  <select name="quantity" 
                          id="quantity" 
                          value={quantity}
                          onChange={calculateTotal}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
              </div>
              <div className={s.total}>$ {total}</div>
          </div>
          { !showCheckout && <div className={s.buy}>
            <button onClick={handleCheckoutClick}>Comprar</button>
          </div> }

            { showCheckout && 
                <BuyForm 
                    eventId={event.eventId}
                    price={event.price} 
                    total={total} 
                    quantity={quantity} 
                    type={"General"} />
            }
      </div>
  )
}
