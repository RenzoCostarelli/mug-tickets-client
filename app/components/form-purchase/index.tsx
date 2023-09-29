'use client'
import { ChangeEvent, useEffect, useState } from 'react';
import s from './form-purchase.module.scss';
import { Product } from '@/app/types/product';
import { MpButton } from '../mp-button';
import CheckoutBuyerForm from '../checkout-buyer-form';

interface Quantities {
    [ticketType: string]: number;
}

export default function FormPurchase ({event}: any) {
  const date = new Date(event.date)

  const [quantity, setQuantity] = useState<number>(1)
  const [total, setTotal] = useState<number>(event.price)
  const [showCheckout, setShowCheckout] = useState<boolean>(false)
  const [quantities, setQuantities] = useState<Quantities>({});
  const [globalTotal, setGlobalTotal] = useState(0);
  const [product, setProduct] = useState<Product>({
    id: 123,
    title: "Nombre del evento",
    img: "img",
    quantity: 1,
    price: event.price,
    description: 'Descripción del evento'
  });

  useEffect(() => {
    setProduct({
      ...product,
      quantity: quantity,
      price: event.price,
    });
  }, []); 
  
  const handleCheckoutClick = () => {
    // llamar a la api de crear ticket con un email que sea pendiente@tickets.com o algo similar
    // guardar el id que viene en la respuesta y usarlo para generar el objeto Product y cargarlo en el store
    // crear el Product con los datos correspondientes
    // redirigir a pagina para cargar los datos del cliente (agregar un timer de 15min)
    // si el timer llega a 00, el ticket se elimina
    // si la respuesta de mercadopago es success, se guardan los datos del usuario en el ticket
    // si es un error, el ticket se elimina de la db y del state

    setShowCheckout(true)
  } 

  const handleQuantityChange = (type: any, price: any, event: any, ticketsTypeList: any[]) => {
    const selectedQuantity = parseInt(event.target.value)
        
    setQuantities(prev => {
        const updatedQuantities: Quantities = { ...prev, [type]: selectedQuantity }
        const newTotal = Object.keys(updatedQuantities).reduce((acc, ticketType) => {
            const ticketPrice = ticketsTypeList.find(ticket => ticket.type === ticketType)?.price || 0;
            return acc + (updatedQuantities[ticketType] || 0) * ticketPrice;
        }, 0)
        setGlobalTotal(newTotal)
        
        return updatedQuantities
    });
  };

  return (
      <div className={s.price_grid}>
          <div className={`${s.ticket_form} d-flex`}>
          <div className="input-area">
            <label htmlFor="ticketType">Tipo de entrada</label>
            <div className="select-wrapper">
                <select className='custom-select' name="ticketType" id="ticketType">
                    <option value="0" disabled selected>Seleccionar</option>
                    {event.ticketsTypeList.map((ticket: any) => (
                        <option value={ ticket.type }>{ ticket.type } - $ { ticket.price } </option>
                    ))}
                </select>
            </div>
          </div>
            <div className="input-area">
                <label htmlFor="quantity">Cantidad</label>
                <div className="select-wrapper">
                    <select className='custom-select' name="quantity" id="quantity">
                        <option value="0" disabled selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
          </div>
          <div>Total: $ {globalTotal}</div>
          {!showCheckout && 
            <div className={s.buy}>
              <button type="submit" onClick={handleCheckoutClick}>Continuar</button>
            </div>
          }
          {showCheckout && 
            <CheckoutBuyerForm
                orderId='123'
                eventId={event.eventId}
                product={product}/>
          }
      </div>
  )
}
