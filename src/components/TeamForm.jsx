import React, { useRef, useContext } from 'react';
import "../styles/teamform.css"

const TeamForm = () => {
    const form = useRef(null);
    return (
        <div className="Information-team">
          <div className="Information-content">
            <div className="Information-head">
              <h2>La información de tu equipo:</h2>
            </div>
            <div className="Information-form">
              <form className='Team-form' form={form}>
                <input type="text" placeholder="Nombre del equipo" name="team-name" />
                <input type="number" max="10" min="4" placeholder="N° de miembros del equipo" name="team-mates" />
                <input type="text" placeholder="Rango de edad" name="age-range" />
                <label htmlFor="">Sube el logo de tu equipo</label>
                <input type="file" placeholder="Logo" name="logo" />
                <input type="text" placeholder="Roles buscados" name="searched-rols" />
                <input type="text" placeholder="Rango buscado" name="searched-ranks" />
                <input type="text" placeholder="Disponibilidad/Horarios de entrenamiento" name="disponibility" />
                <input type="text" placeholder="Expectativas/Beneficios" name="expectations" />
              </form>
            </div>
            <div className="Information-buttons">
              <div className="Information-next">
                {/* <Link to="/checkout/payment"> */}
                  <button type='button' className='Publish-button'/* onClick={handleSubmit} */>Publicar Equipo</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
    );
}

export default TeamForm;