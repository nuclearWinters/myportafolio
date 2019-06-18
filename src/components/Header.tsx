import React from "react"
import { NavLink } from "react-router-dom"

const styles = {
    headerOption: {
        display: "flex",
        flex: 1
    }
}

const Home: React.FC = props => {
    return (
        <div style={{backgroundColor: "gray", height: 80, flexDirection: "row", display: "flex"}}>
            <div style={styles.headerOption}>
                <NavLink to="/" style={styles.headerOption}>
                    Logo
                </NavLink>
            </div>
            <div style={styles.headerOption}>
                <NavLink to="/" style={styles.headerOption}>
                    PRECIOS
                </NavLink>
                <NavLink to="/proyectosrealizados" style={styles.headerOption}>
                    PROYECTOS REALIZADOS
                </NavLink>
                <NavLink to="/contacto" style={styles.headerOption}>
                    CONTACTO
                </NavLink>
            </div>
        </div>
    )
}

export default Home