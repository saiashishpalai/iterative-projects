import React from 'react'
import './Discount.css'

const Discount = () => {
    return (
        <div className='sidebar'>
            {/* KEEP CATEGORY PART INSIDE THIS CLASS ONLY */}

            <section className="checklist">
                <h3>Filter</h3>
                <h3>DISCOUNT</h3>

                <form className="formcheck" id="discountForm">
                    <span className="inFilter">
                        <input type="checkbox" name="check" className='disable' id="Discount1" />
                        <label for="Discount1">10% or more</label>
                    </span>

                    <span className="inFilter">
                        <input type="checkbox" name="check" className='disable' id="Discount2" />
                        <label for="Discount2">20% or more</label>
                    </span>

                    <span className="inFilter">
                        <input type="checkbox" name="check" className='disable' id="Discount3" />
                        <label for="Discount3">30% or more</label>
                    </span>

                    <span className="inFilter">
                        <input type="checkbox" name="check" className='disable' id="Discount4" />
                        <label for="Discount4">40% or more</label>
                    </span>

                    <span className="inFilter">
                        <input type="checkbox" name="check" className='disable' id="Discount5" />
                        <label for="Discount5">Below 10%</label>
                    </span>

                </form>
            </section>
        </div>
    )
}

export default Discount;