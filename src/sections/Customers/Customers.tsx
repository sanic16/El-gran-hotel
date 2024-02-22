import CommonHeader from '@/components/CommonHeader/CommonHeader'
import React from 'react'
import { customers } from './data'
import './customers.css'

const Customers = () => {
  return (
    <section className='customers' id='customers'>
        <CommonHeader title='Nuestros Clientes'/>
        <p className='customers-paragraph'>
            Nuestros clientes son nuestra prioridad, por eso nos esforzamos en brindarles el mejor servicio posible.
            Esto es lo que dicen de nosotros:
        </p>

        <div className='customers-card-wrapper'>
            {
                customers.map(customer => (
                <div className='customer-card' key={customer.id}>
                    <div className="customer-image-wrapper">
                        <img src={customer.image} className='customer-image' />
                    </div>
                    <div className="customer-info">
                        <h3 className="customer-fullname">
                            {customer.name}
                        </h3>
                        <p className='customer-paragraph-1'>
                            {customer.review1}
                        </p>
                        <p className='customer-paragraph-2'>
                            {customer.review2}
                        </p>
                    </div>
                </div>
                ))
            }
        </div>
    </section>
  )
}

export default Customers