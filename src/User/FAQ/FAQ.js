import React, { useRef, useState } from 'react'
import "./FAQ.css"
import { IoIosArrowDown } from "react-icons/io";
import Header from '../../Admin/Header/Header';


const faqs = [
    {
        id: 1,
        header: "How can I confirm that you have received my reservation?",
        text: `After completing your reservation, you should receive an immediate confirmation message on the booking platform. If you don't receive a confirmation, 
      please reach out to our reservations team for assistance.`
    },
    {
        id: 2,
        header: "Up to what age are they considered children?",
        text: `Children are considered to be between the ages of 0 and 12 years old.`
    },
    {
        id: 3,
        header: "Do you have any discount code?",
        text: `Our resort occasionally offers promotional discount codes through various channels. Please check our website or contact our reservations team directly
       to inquire about any available discount codes for your stay.`
    },
    {
        id: 4,
        header: "Can I cancel my reservation?",
        text: `Yes, you can cancel your reservation. Please refer to the cancellation policy outlined in your booking confirmation for details on any applicable fees or deadlines.`
    },
    {
        id: 5,
        header: "Do you have resort with a spa?",
        text: `Yes, we offer resort with spa facilities. You can explore our website or contact our reservations team for more information on resort with spa amenities.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="user-rc-accordion-card">
            <div className="user-rc-accordion-header">
                <div className={`user-rc-accordion-toggle ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="user-rc-accordion-title">{header}</h5>
                    <i className="user-rc-accordion-icon"><IoIosArrowDown /></i>
                </div>
            </div>
            <div ref={contentEl} className={`user-rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="user-rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}


function FAQ({ isChecked }) {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }


    return (
        <><Header
            isChecked={isChecked}
            header="F.A.Q."
        />
            <section className="section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 mt-2">
                            {faqs.map((faq, index) => {
                                return (
                                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ
