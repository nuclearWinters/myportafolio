import React from "react";

const Precios: React.FC = props => {
    return(
        <div>
            <div>Precios</div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{flex: 1}}>
                    <div>Plan Página Web</div>
                    <div>Te entregamos una página web.</div>
                    <div>$3,000 MXN</div>
                    <div>Proceso: 1. Se hace una propuesta del diseño, 2. Se realiza el contrato y los depositos, 3. Se cumple en tiempo con el contrato, 4. Se publican las páginas y se entregan los activos.</div>
                    <div>Incluye: SEO organico en Google y Google Maps y diseño adaptado a pantallas y celulares</div>
                    <div>Tecnología Front-End: ReactJS</div>
                    <div>Tecnología Back-End: N/A</div>
                    <div>Recomendaciones: Hosting gratis con Firebase, dominios con GoDaddy por $20 el primer año.</div>
                </div>
                <div style={{flex: 1}}>
                    <div>Plan Aplicación Web</div>
                    <div>Te entregamos una página web con servicios de base de datos.</div>
                    <div>$6,000 MXN</div>
                    <div>Proceso: 1. Se entrega una propuesta del sistema, 2. Se realiza el contrato y los depositos, 3. Se cumple en tiempo con el contrato, 4. Se publica la pagina y se entregan los activos.</div>
                    <div>Incluye: SEO organico en Google y Google Maps y diseño adaptado a pantallas y celulares</div>
                    <div>Tecnología Front-End: ReactJS</div>
                    <div>Tecnología Back-End: Firebase Realtime Database</div>
                    <div>Recomendaciones: Hosting gratis con Firebase, base de datos gratis con Firebase, dominio con GoDaddy por $20 el primer año.</div>
                </div>
                <div style={{flex: 1}}>
                    <div>Plan Aplicación Móvil</div>
                    <div>Te entregamos una app donde quieras publicarla</div>
                    <div>$6,000 MXN</div>
                    <div>Proceso: 1. Se entrega una propuesta del sistema, 2. Se realiza el contrato y los depositos, 3. Se cumple en tiempo con el contrato, 4. Se publica la pagina y se entregan los activos.</div>
                    <div>Incluye: SEO organico en Google y Google Maps y diseño adaptado a pantallas y celulares</div>
                    <div>Tecnología Front-End: React Native</div>
                    <div>Tecnología Back-End: Firebase Realtime Database</div>
                    <div>Recomendaciones: Publicala en la Google Play Store ó la App Store, base de datos gratis con Firebase</div>
                </div>
            </div>
        </div>
    )
}

export default Precios