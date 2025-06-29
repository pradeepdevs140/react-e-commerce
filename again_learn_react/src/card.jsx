import React from 'react';
import './card.css';
import { Outlet } from 'react-router-dom';
const Card = () =>{
    return(
        <>
        <Outlet />
        <div className="card-container">
           
            <section>
                <header className="card-header">
                    <span className ="avatar"> M</span><h1>Pradeep</h1>
                    
                </header>
                <main>
                    <ul>
                        <li><span>Brithday</span> 1,2005</li>
                        <li><span>Age</span> 18</li>
                        <li><span>Address</span>sample</li>
                    </ul>
                </main>
            </section>
           
        </div>
        </>

    )
}
export default Card;