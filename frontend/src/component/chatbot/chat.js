import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import img1 from './1.png';
import img2 from './2.png';
import Cookies from 'js-cookie';

import style from './chatbot.module.css';

// home
import styless from "../css/Home.module.css"

import back from '../video/1.mp4'

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
      case t("كيف تستخدم الموقع؟"): 
        setConversation([
          ...conversation,
          { user: t("كيف تستخدم الموقع؟"), bot: t("موقع الدعم التقني, تم إنشاؤه لي يسهل على موظفين المختبر الإقليمي التواصل مع القسم التقني بسهولة وسرعة حيث انه يمكن للمستخدم لدخول على صفحة التقارير واختيار القسم والجهاز وتحديد مشكلة الجهاز وسيتم الرد والتواصل من قبل الفريق التقني.")},
        ]);
        break;
      case t("عن المختبر؟"): 
        setConversation([
          ...conversation,
          { user: t("عن المختبر؟"), bot: t("المختبر الإقليمي بمنطقة جازان يستقبل عينات من جميع مستشفيات المنطقة يعد احد المشاريع الصحية التخصصيةبالمنطقة ويسهم في فحوصات عينات فيروس كورونا المستجد")},
        ]);
        break;
        case t("عن تقنية المعلومات؟"):
            setConversation([
                ...conversation,
                {user:t("عن تقنية المعلومات؟"),bot:t("يستقبل قسم تقنية المعلومات التقارير من جمع الاقسام المتواجدة في المختبر الاقليمي،ويقومون بالرد عليهم في اسرع وقت ممكن")}
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
      <video className={styless.videoBackground} autoPlay muted loop>
        <source src={back} type="video/mp4" />
      </video>
      <div className={style.cardchat}>
        <div className={style.header}>
          <img src={img1} alt="" />
          <strong>{t("الدعم")}</strong>
        </div>
        <div className={style.conversation}>
        <p>
                <div className={style.imagechat}>
              <img src={img2} alt="" />
              {/* <strong>Support Bot</strong> */}
                </div>
                <span>{t("كيف يمكنني مساعدتك؟")}</span>

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
          <button onClick={() => handleUserInput(t("كيف تستخدم الموقع؟"))}>{t("كيف تستخدم الموقع؟")}</button>
          <button onClick={()=>handleUserInput(t("عن المختبر؟"))}>{t("عن المختبر؟")}</button>
          <button onClick={() => handleUserInput(t("عن تقنية المعلومات؟"))}>{t("عن تقنية المعلومات؟")}</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
