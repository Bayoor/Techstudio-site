import React from 'react'
import style from './ContactSection3.module.scss'
import contactModalIcon from '../../../../../assets/images/ContactModalImage.png'

const ContactSection3 = () => {
    return (
        <div className={style.ContactSection3}>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div class={`modal fade ${style.modalContainer}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class={`modal-dialog modal-dialog-centered ${style.modalContainerContent}`}>
                    <div class={`modal-content ${style.modalContain}`}>
                        <div className={`modal-header
                       d-flex
                       justify-content-center
                       ${style.modalHeader}`} >
                            <img src={contactModalIcon} alt="" />
                        </div>
                        <div class={`modal-body text-center ${style.modalBody}`}>
                            <h5 className={style.innerHeader}>Message Sent Successfully!</h5>
                            <p className={style.innerText}>Thank you for contacting us! Our team is reviewing your message and will respond promptly. Feel free to explore our website for more information in the meantime. We appreciate your patience!
                            </p>
                        </div>
                        <div className={`modal-footer d-flex justify-content-center ${style.modalFooter}`}>
                            <button type="button" class={style.btnClose} data-bs-dismiss="modal">Close this window</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection3