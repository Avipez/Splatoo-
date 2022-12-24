import React, { useRef, useContext } from 'react';
/* import { Link, Navigate, useNavigate } from 'react-router-dom'; */
import "../styles/playerform.css"

const PlayerForm = () => {
    const form = useRef(null);

    return (
        <div className="Information-player">
          <div className="Information-content">
            <div className="Information-head">
              <h2>Tu información de jugador:</h2>
            </div>
            <div className="Information-form">
              <form className='Player-form' form={form}>
                <input type="text" placeholder="Apodo/Tag/Nickname" name="nickname" />
                <input type="text" placeholder="Código Amigo" name="friendcode" />
                <input type="text" placeholder="Rango Actual (Caótico)" name="rank" />
                <input type="text" placeholder="Arsenal/Estilo de juego" name="playstyle" />
                <input type="text" placeholder="¿Puedes usar Chat de voz?" name="vc" />
                <input type="text" placeholder="¿Estás familiarizado con el lenguaje de equipo (callouts)?" name="callouts" />
                <input type="text" placeholder="En una escala de 1 a 10 ¿Qué tan activo eres?" name="activity" />
                <input type="text" placeholder="Expectativas/Metas" name="goals" />
              </form>
            </div>
            <div className="Information-buttons">
              <div className="Information-next">
                {/* <Link to="/checkout/payment"> */}
                  <button type='button' className='Publish-button'/* onClick={handleSubmit} */>Publicar formulario de jugador libre</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      );
              };

export default PlayerForm;