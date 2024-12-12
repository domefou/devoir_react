import React from 'react';
/* Components */
import Banner from '../components/Banner/Banner';

/* Styles */
import '../styles/main.css';

/* Images */
import freshFood from '../assets/img/portfolio/fresh-food.jpg';
import sushi from '../assets/img/portfolio/restaurant-japonais.jpg';
import code from '../assets/img/portfolio/coder.jpg';
import bienEtre from '../assets/img/portfolio/espace-bien-etre.jpg';
import screen from '../assets/img/portfolio/screens.jpg';
import seo from '../assets/img/portfolio/seo.jpg';

const Portfolio = () => {
    return(
    <main>
        <div>
            <section>
                <Banner/>
            </section>
            <section className='pages-body'>
                <article className='pages_title'>
                    <div className='border-bottom'></div>
                    <h2>Mon offre de services</h2>
                    <p>Voici les préstations sur lesquelles je peux intervenir</p>

                </article>

            <article className='pages-container'>
                    <div className="portfolio-row row row-cols-1 row-cols-md-3 g-3">

                        <div className="portfolio-col col">
                            <div className="portfolio_card">
                                <img src={freshFood} className="card-img-top" alt="sushi"></img>
                                <div className="portfolio_body_card card-body">
                                    <h5 className="portfolio_card-title">Fresh Food</h5>
                                    <div className="portfolio_card-text">
                                        <p>Site de vente de produits frais en ligne</p>
                                    </div>
                                    <div className='btn_container'>
                                        <a href="./Portfolio" className="portfolio-button btn btn-primary">Voir le site</a>
                                    </div>
                                </div>
                                <div className='footer__portfolio_card'>
                                    <p>Site réalisé avec PHP et MySQL</p>
                                </div>
                            </div>
                        </div>


                        <div className="portfolio-col col">
                            <div className="portfolio_card">
                                <img src={sushi} className="card-img-top" alt="sushi"></img>
                                <div className="portfolio_body_card card-body">
                                    <h5 className="portfolio_card-title">Restaurant Akira</h5>
                                    <div className="portfolio_card-text">
                                        <p>Site de vente de produits frais en ligne</p>
                                    </div>
                                    <div className='btn_container'>
                                        <a href="./Portfolio" className="portfolio-button btn btn-primary">Voir le site</a>
                                    </div>
                                </div>
                                <div className='footer__portfolio_card'>
                                    <p>Site réalié avec WordPress</p>
                                </div>
                            </div>
                        </div>


                        <div className="portfolio-col col">
                            <div className="portfolio_card">
                                <img src={bienEtre} className="card-img-top" alt="sushi"></img>
                                <div className="portfolio_body_card card-body">
                                    <h5 className="portfolio_card-title">Espace bien-être</h5>
                                    <div className="portfolio_card-text">
                                        <p>Site de vente de produits frais en ligne</p>
                                    </div>
                                    <div className='btn_container'>
                                        <a href="./Portfolio" className="portfolio-button btn btn-primary">Voir le site</a>
                                    </div>
                                </div>
                                <div className='footer__portfolio_card'>
                                    <p>Site réalisé avec LARAVEL</p>
                                </div>
                            </div>
                        </div>


                        <div className="portfolio-col col">
                            <div className="portfolio_card">
                                <img src={seo} className="card-img-top" alt="sushi"></img>
                                <div className="portfolio_body_card card-body">
                                    <h5 className="portfolio_card-title">SEO</h5>
                                    <div className="portfolio_card-text">
                                        <p>Amélioration du référencement d'un site e-commerce</p>
                                    </div>
                                    <div className='btn_container'>
                                        <a href="./Portfolio" className="portfolio-button btn btn-primary">Voir le site</a>
                                    </div>
                                </div>
                                <div className='footer__portfolio_card'>
                                    <p>Utilisation des outils SEO</p>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-col col">
                            <div className="portfolio_card">
                                <img src={code} className="card-img-top" alt="sushi"></img>
                                <div className="portfolio_body_card card-body">
                                    <h5 className="portfolio_card-title">Création d'une API</h5>
                                    <div className="portfolio_card-text">
                                        <p>Création d'une API RESTFULL publique</p>
                                    </div>
                                    <div className='btn_container'>

                                        <a href="./Portfolio" className="portfolio-button btn btn-primary">Voir le site</a>
                                    </div>

                                </div>
                                <div className='footer__portfolio_card'>
                                    <p>PHP - SYMPHONY</p>
                                </div>
                            </div>  
                        </div>

                        <div className="portfolio-col col">
                            <div className="portfolio_card">
                                <img src={screen} className="card-img-top" alt="sushi"></img>
                                <div className="portfolio_body_card card-body">
                                    <h5 className="portfolio_card-title">Maquette d'un site web</h5>
                                    <div className="portfolio_card-text">
                                        <p>Création du prototype d'un site,Création du prototype d'un site</p>
                                        
                                    </div>
                                    <div className='btn_container'>

                                        <a href="./Portfolio" className="portfolio-button btn btn-primary">Voir le site</a>
                                    </div>
                                    

                                </div>
                                <div className='footer__portfolio_card'>
                                    <p>Réalisé avec FIGMA</p>
                                </div>
                            </div>  
                        </div>



                    </div>
                </article>


        </section>
        </div>
    </main>   
    );
}

export default Portfolio;