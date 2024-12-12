import React from 'react';

/* Styles */
import '../styles/main.css';

const Contact = () => {
    return(
        <main>
            <section className='pages-body'>
                <article className='pages_title'>
                    <div className='border-bottom'></div>
                    <h2>Contact</h2>
                    <p>Voici les préstations sur lesquelles je peux intervenir</p>

                </article>

                <article className='pages-container'>
                    <div className="contact-grid g-3 ">
                        <div className='contact_form col'>
                            <div className='contact-title'>
                                <h3>Formulaire de contact</h3>
                            </div>
                            <div className='form'>

                                <div class="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label"></label>
                                    <input type="text" name='name' className="form-control" id="name" placeholder="Votre nom"></input>
                                </div>

                                <div class="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label"></label>
                                    <input type="email" name='email' className="form-control" id="email" placeholder="Votre adresse email"></input>
                                </div>

                                <div class="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label"></label>
                                    <input type="tel" name='phone' className="form-control" id="phone" placeholder="Votre numéro de téléphone"></input>
                                </div>

                                <div class="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label"></label>
                                    <input type="text" name='object' className="form-control" id="object" placeholder="Sujet"></input>
                                </div>

                                <div class="mb-2">
                                    <label for="exampleFormControlTextarea1" className="form-label"></label>
                                    <textarea  name='message' className="form-control" id="message" rows="10" placeholder="Votre message"></textarea>
                                </div>

                                <div class="submit">
                                    <label for="exampleFormControlInput1" className="form-label"></label>
                                    <input type="submit" name='submit' className="form-control" id="submit" ></input>
                                </div>


                            </div>

                        </div>

                        <div className='contact_location col'>
                            <div className='contact-title'>
                                <h3>Mes coordonnées</h3>
                            </div>

                        </div>

                    </div>
                </article>
                
        </section>
        </main>
    );
}

export default Contact;