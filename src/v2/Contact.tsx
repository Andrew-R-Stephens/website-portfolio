import React, {Fragment} from "react";

function Contact() {



    return (
        <Fragment>
            <Fragment>
                <div className={'page-body'} style={{zIndex:0}}>
                    <div id={'contact-anchor'} className={'scroll-anchor'}/>
                    <div className={'contact-body'}>
                        <div className={'contact-body-top'}>
                            <div className={'contact-body-top-label'}>
                                <div className={'hero-label-name'} style={{animation:"none", opacity: 1, textAlign:"center", margin:'auto'}}>Contact Me</div>
                            </div>
                            <div className={'contact-socials-wrapper'}>
                                <div className={'contact-logo-wrapper'}>
                                    <a href={"https://github.com/Andrew-R-Stephens"} title={'github.com/Andrew-R-Stephens'}>
                                        <div className={'contact-logo-github'} />
                                    </a>
                                </div>
                                <div className={'contact-logo-wrapper'}>
                                    <a href={"https://www.linkedin.com/in/andrew-stephens-/"} title={'linkedin.com/in/andrew-stephens-'}>
                                        <div className={'contact-logo-linkedin'} />
                                    </a>
                                </div>
                            </div>
                            <div className={'contact-split-wrapper'}>
                                <div className={'contact-split-line'} ><hr/></div>
                                <div className={'contact-split-label'}><label>OR</label></div>
                                <div className={'contact-split-line'} ><hr/></div>
                            </div>
                        </div>

                        <fieldset>
                            <form className={'contact-form'} target="_blank"
                                  action={'https://formsubmit.co/16a4f900d28f4f8b26c6052334a2b22b'}
                                  method={'POST'}>
                                <input type="hidden" name="_captcha" value="false"></input>
                                <input type="hidden" name="_autoresponse"
                                       value="<p>Hello,</p><p>Thank you for taking interest in my portfolio!
                                       I'll be sure to get back with you shortly!</p>
                                       <p>Regards, Andrew Stephens</p>"></input>
                                <div className={'contact-name'}>
                                    <div className={'contact-inner'}>
                                        <div className={'contact-form-label-wrapper'}>
                                            <label className={'contact-form-label'} data-end="&nbsp;*">first name</label></div>
                                        <input inputMode={'text'} name={'first name'}
                                               placeholder={'first name'} required={true}></input>
                                    </div>
                                    <div className={'contact-inner'}>
                                        <div className={'contact-form-label-wrapper'}>
                                            <label className={'contact-form-label'}>last name</label></div>
                                        <input inputMode={'text'} name={'last name'}
                                               placeholder={'last name'}></input>
                                    </div>
                                </div>
                                <div className={'contact-addresses'}>
                                    <div className={'contact-inner'}>
                                        <div className={'contact-form-label-wrapper'}>
                                            <label className={'contact-form-label'} data-end="&nbsp;*">email</label></div>
                                        <input inputMode={'email'} name={'email'} type={'email'}
                                               placeholder={'email'} required={true}></input>
                                    </div>
                                    <div className={'contact-inner'}>
                                        <div className={'contact-form-label-wrapper'}>
                                            <label className={'contact-form-label'}>phone</label></div>
                                        <input type="tel" id="phone" name="phone"
                                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={'phone'}></input>
                                    </div>
                                </div>
                                <div className={'contact-inner'}>
                                    <div className={'contact-form-label-wrapper'}>
                                        <label className={'contact-form-label'} data-end="&nbsp;*">message</label></div>
                                    <input className={'contact-message-input'} name={'message'}
                                           inputMode={'text'}
                                           placeholder={'your message'} required={true}></input>
                                </div>
                                <div className={'contact-inner'}>
                                    <input className={'contact-submit'} type={'submit'} value={'Send!'}></input>
                                </div>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default Contact;