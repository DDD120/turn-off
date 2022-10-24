import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import IMG1URL from "images/act2/chapter1/cut16-1.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #ffffff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

const Chat = styled(motion.div)`
  width: 56%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 60%;
`;

const Cut16 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>앗 그러면 지금 컴퓨터 내가 사용할 수 있나?</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={293}
          height={325}
          src={IMG1URL}
          alt="설레하는 뭉게"
        />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut16;
