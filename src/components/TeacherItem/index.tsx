import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFnIerrbpYH4w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=ZGTPFPwaQfP_tl64PxJ3x1UikQ6KSKJZIqztA50xzW8" alt="David Artagnan"/>
                        <div>
                            <b>David Artagnan</b>
                            <span>Desenvolvedor Web Front End</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias para a Web.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <footer>
                        <p>
                         Preço/Hora
                         <b>R$ 20,00</b>
                        </p>
                        <button>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    )
}

export default TeacherItem;