import React from "react"
import Header from "../ClientsComponents/Header/Header";
import Clients from "./Clients/Clients"

const ClientsComponents = () => {
    return (
        <section id="clients" class="wow fadeInUp">
            <div class="container">
                <Header />

                <Clients />

            </div>
        </section>
    );
}

export default ClientsComponents;

