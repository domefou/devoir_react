import React from 'react';

const Footer = () => {
    return(

<div className="container bg-primary w-100"> 
    <div className="row"> 
        <div className="col-12 col-md-4 col-sm-12"> 
            <div className="p-3 border bg-light">John DOES</div>
            <div className="p-3 border bg-light">Colonne 1</div>
            <div className="p-3 border bg-light">Colonne 1</div>
            <div className="p-3 border bg-light">Colonne 1</div> 
        </div> 
        <div className="col-12 col-md-4 col-sm-12"> 
            <div className="p-3 border bg-light">Lien utiles</div>
            <div className="p-3 border bg-light">Colonne 2</div>
            <div className="p-3 border bg-light">Colonne 2</div>
            <div className="p-3 border bg-light">Colonne 2</div>
            
        </div> 
        <div className="col-12 col-md-4 col-sm-12"> 
            <div className="p-3 border bg-light">Mes dernieres réalisation</div>
            <div className="p-3 border bg-light">Colonne 3</div> 
            <div className="p-3 border bg-light">Colonne 3</div> 
            <div className="p-3 border bg-light">Colonne 3</div>  
        </div> 
    </div>
</div>
    
    );
}

export default Footer;