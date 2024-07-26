import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import img1 from './1.png';
import img2 from './2.png';
import Cookies from 'js-cookie';

import style from './chatbot.module.css';

function Chat() {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  const [conversation, setConversation] = useState([]);

  // useEffect(() => {
  //   const login = Cookies.get('login');
  //   if (login !== 'true') {
  //     navigate('/signin');
  //   }
  // }, [navigate]);

  const handleUserInput = (choice) => {
    switch (choice) {
      case t("How to contact"): 
        setConversation([
          ...conversation,
          { user: t("How to contact"), bot: t("You can contact through social media platforms")},
        ]);
        break;
      case t("Return and refund policy?"): 
        setConversation([
          ...conversation,
          { user: t("Return and refund policy?"), bot: t("The return must be made within 14 days, and the product must be in good condition.")},
        ]);
        break;
        case t("How can I purchase the product?"):
            setConversation([
                ...conversation,
                {user:t("How can I purchase the product?"),bot:t("You can purchase the product by adding it to the cart or buying it individually. You will be contacted after the purchase process.")}
            ])
            break;
      default:
        setConversation([
          ...conversation,
          { user: choice, bot: t('Sorry, I didn\'t understand. You can try again.') },
        ]);
    }
  };

  return (
    <div className={style.allchat}>
      <div className={style.cardchat}>
        <div className={style.header}>
          <img src={img1} alt="" />
          <strong>{t("Support Bot")}</strong>
        </div>
        <div className={style.conversation}>
        <p>
                <div className={style.imagechat}>
              <img src={img2} alt="" />
              {/* <strong>Support Bot</strong> */}
                </div>
                <span>{t("Hello! How can I help you?")}</span>

              </p>
          {conversation.map((item, index) => (
            <div key={index}>
              <p>
                <small>{t("Customer")}</small>
                <div className={style.user}>{item.user}</div> 
              </p>
              <p>
                <div className={style.imagechat}>
              <img src={img2} alt="" />
                </div>
                 <span>{item.bot}</span>
              </p>
            </div>
          ))}
           
        </div>
        <div className={style.choices}>
          <button onClick={() => handleUserInput(t("Return and refund policy?"))}>{t("Return and refund policy?")}</button>
          <button onClick={()=>handleUserInput(t("How can I purchase the product?"))}>{t("How can I purchase the product?")}</button>
          <button onClick={() => handleUserInput(t("How to contact"))}>{t("How to contact")}</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
