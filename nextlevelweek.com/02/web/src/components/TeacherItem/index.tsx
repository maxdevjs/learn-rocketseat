import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/22229196?s=460&v=4" alt="maxdevjs" />
        <div>
          <strong>maxdevjs</strong>
          <span>Snoringology</span>
        </div>
      </header>
      <p>
        bla bla bla
            <br />
            etc etc etc
          </p>
      <footer>
        <p>
          Price/Hour
              <strong>$500</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
              Contact me
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;