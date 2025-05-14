'use client';
import { useState } from 'react';
import styles from './MailButton.module.css';
import { BARISTA_EMAIL, BARISTA_NAME, ORDERER_NAME } from '../config-example'; 



export const MailButton = ({ drinkType, brewMethod }: { drinkType: string, brewMethod: string }) => {
  const [now] = useState(new Date().toLocaleString('nl-NL'));

  const subject = encodeURIComponent('Nieuwe koffiebestelling!');
  const body = encodeURIComponent(
    `BESTELLING op ${now}!
    \n
    Beste ${BARISTA_NAME}, 
    \n
    Ik wil graag een ${drinkType} (${brewMethod}) drinken. Wil je die voor me maken?
    \n
    \n
    Groetjes, ${ORDERER_NAME}`
  );

  const mailtoLink = `mailto:${BARISTA_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <a href={mailtoLink}>
      <button className={styles.mailbtn}>Bestel drankje via e-mail ✉️</button>
    </a>
  );
};
