import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act1/cut9-1.webp";
import IMG2URL from "images/act1/cut9-2.webp";
import IMG3URL from "images/act1/cut9-3.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 10px;
`;

const Img = styled.div`
  background-image: ${({ isChange }) =>
    isChange ? `url(${IMG2URL})` : `url(${IMG1URL})`};
  width: 100%;
  height: 240px;
  background-repeat: no-repeat;
  background-position: 0 0;
  position: relative;
  background-size: contain;
  overflow: hidden;
  animation: opacity 2s 2s;
  cursor: ${({ isChange }) => isChange && "pointer"};

  @keyframes opacity {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 240px;
    background-image: ${({ isChange }) =>
      isChange ? `url(${IMG2URL})` : `url(${IMG1URL})`};
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.5;
    animation: move 2s 2s;

    @keyframes move {
      0% {
        background-position: 0 0;
        filter: hue-rotate(5deg);
      }

      10% {
        background-position: 5px 0;
      }
      20% {
        background-position: -4px 0;
      }
      30% {
        background-position: 15px 0;
      }
      50% {
        background-position: -29px 0;
      }

      70% {
        background-position: -30px 0;
      }

      80% {
        background-position: 5px 0;
      }
      90% {
        background-position: 5px 0;
      }

      100% {
        background-position: 5px 0;
        filter: hue-rotate(360deg);
      }
    }
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 240px;
  padding: 0 10px;

  & > img {
    width: 100%;
  }
`;

const Cut9 = () => {
  const [isChange, setIsChange] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsChange(true);
    }, 3000);
  }, []);

  const handleClickImg = () => {
    isChange && setIsShow(true);
  };

  return (
    <Base>
      <Img isChange={isChange} onClick={handleClickImg} />
      {isShow && (
        <>
          <ImgWrapper>
            <img src={IMG3URL} alt="눈을 든 멍게" />
          </ImgWrapper>
          <StepBtn />
        </>
      )}
    </Base>
  );
};

export default Cut9;