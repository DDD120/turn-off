import React, { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import VideoHeader from "./VideoHeader";
import ViewHistoryList from "./ViewHistoryList";
import SettingModal from "./SettingModal";
import IMG1URL from "images/act2/chapter4/thumbnail-1.webp";
import IMG2URL from "images/act2/chapter4/thumbnail-2.webp";
import IMG3URL from "images/act2/chapter4/thumbnail-3.webp";
import IMG4URL from "images/act2/chapter4/thumbnail-4.webp";
import IMG5URL from "images/act2/chapter4/thumbnail-5.webp";
import IMG6URL from "images/act2/chapter4/thumbnail-6.webp";
import IMG7URL from "images/act2/chapter4/thumbnail-7.webp";
import IMG8URL from "images/act2/chapter4/thumbnail-8.webp";
import IMG9URL from "images/act2/chapter4/thumbnail-9.webp";
import IMG10URL from "images/act2/chapter4/thumbnail-10.webp";

const Base = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
  position: relative;
`;

const Footer = styled.footer`
  height: 20px;
`;

let videos = [
  {
    thumbnail: IMG1URL,
    title: "π₯μ₯μνλ μλ¦¬ ASMR | [μ§μ€ν  λ, λΆλ©, μ€ν°λμλ―Έ, λ°±μμμ] ",
    running_time: "3:00:12",
    current_time: "30%",
  },
  {
    thumbnail: IMG2URL,
    title: "[κ³΅ν¬μ€ν] μλ¦λλ λ μ λ κ³΅ν¬μ° λͺ¨μ.zip",
    running_time: "22:12",
    current_time: "80%",
  },
  {
    thumbnail: IMG3URL,
    title:
      "νκ° μΌμΌν λ§€μ΄λ§ 5λ¨κ³ λ§λΌν λμ ! (ft. κΏλ°λ‘μ°) MUCBANG EATING SHOW",
    running_time: "6:53",
    current_time: "100%",
  },
  {
    thumbnail: IMG4URL,
    title: "INFPμ ESTJκ° λ§λλ€λ©΄? #MBTI #μκ°ν #μ²«λ§λ¨",
    running_time: "12:34",
    current_time: "20%",
  },
  {
    thumbnail: IMG5URL,
    title: "β¨ ππ₯ππ²π₯π’π¬π­ | μ§κΈμ μΌμ΄ν μ¬λ μ μ±κΈ°! μ΅μ κ³‘ λΈλ λͺ¨μ β¬ β¨",
    running_time: "48:32",
    current_time: "50%",
  },
  {
    thumbnail: IMG6URL,
    title: "μ§κ΅¬μ κ΄ν λλΌμ΄ 7κ°μ§ μ¬μ€",
    running_time: "8:22",
    current_time: "70%",
  },
  {
    thumbnail: IMG7URL,
    title: "λ¨μκ° λ°λ€κ±°λΆμ€νλ₯Ό λ¨Ήκ³  μμ΄ν μ΄μ λ? [λ°λ€κ±°λΆμ€ν]",
    running_time: "15:30",
    current_time: "60%",
  },
  {
    thumbnail: IMG8URL,
    title:
      "[VLOG] μΌμ λΈμ΄λ‘κ·Έ | κ°μμ΄κΈ° | κ²λ λμλ―Έ | νΌμμ νΈμΊμ€ | μ°λ¨λ μΉ΄νκ±°λ¦¬ | λ¨Ήλ°© λͺ¨μ",
    running_time: "18:45",
    current_time: "90%",
  },
  {
    thumbnail: IMG9URL,
    title: "μΌκ΅¬κ³΅ μ λ μλμ£Όλ μ½μ½ γγγγ",
    running_time: "1:27",
    current_time: "30%",
  },
  {
    thumbnail: IMG10URL,
    title: "HOT LIVE! Sun 'Ocean' [νμ€ λ λΌλμ€] | FHY 20221017 λ°©μ‘",
    running_time: "3:34",
    current_time: "60%",
  },
];

const VideoApp = ({ isActive, closeVideoApp }) => {
  const modalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveViewHistory, setIsActiveViewHistory] = useState(false);
  const [isActiveAlgorithm, setIsActiveAlgorithm] = useState(false);

  const handleSettingBtnClick = () => {
    if (isActiveViewHistory && isActiveAlgorithm) {
      return;
    }
    if (isActive) {
      modalRef.current.showModal();
    }
    return;
  };
  const handleApplyBtnClick = async () => {
    if (isActiveViewHistory && isActiveAlgorithm) {
      modalRef.current.close();
      setIsLoading(true);
      videos = [];
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setTimeout(() => {
        closeVideoApp();
      }, 3000);
    }
    return;
  };

  return (
    <Base>
      <VideoHeader />
      <ViewHistoryList
        videos={videos}
        isLoading={isLoading}
        onSettingBtnClick={handleSettingBtnClick}
      />
      <SettingModal
        modalRef={modalRef}
        isActiveViewHistory={isActiveViewHistory}
        setIsActiveViewHistory={setIsActiveViewHistory}
        isActiveAlgorithm={isActiveAlgorithm}
        setIsActiveAlgorithm={setIsActiveAlgorithm}
        onApplyBtnClick={handleApplyBtnClick}
      />
      <Footer />
    </Base>
  );
};

export default VideoApp;
