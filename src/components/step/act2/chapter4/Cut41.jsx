import React from "react";
import IMG1URl from "images/act2/chapter4/cut41-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
`;

const CutContainer = styled(motion.div)`
  width: 90%;

  img {
    width: 100%;
  }
`;

const Cut41 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URl} alt="어리둥절한 뭉게" />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>음... 모르는 말이 가득하네</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut41;
