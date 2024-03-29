import React, { useState } from "react"
import styled from "styled-components"
import Window from "components/common/Window"
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle"
import { FcPlus, FcHome } from "react-icons/fc"
import VideoApp from "./VideoApp"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import useToast from "hooks/useToast"
import { motion, AnimatePresence } from "framer-motion"
import StepBtn from "components/common/StepBtn"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Animation = styled(motion.div)`
  padding: 10px;
  width: 80%;
  position: absolute;
`

const Chapter4Cut6 = () => {
  const [isCompleted, setIsCompleted] = useState(false)
  useToast("실행을 종료할 방법을 찾아보자!")

  return (
    <Base>
      <Window>
        <Bottom>
          <ul>
            <li>
              <IconWrapper>
                <FcHome />
              </IconWrapper>
            </li>
            <li>
              <IconWrapper hover>
                <FcPlus />
              </IconWrapper>
              <Active />
            </li>
          </ul>
        </Bottom>
      </Window>
      <AnimatePresence>
        {!isCompleted && (
          <Animation exit={{ opacity: [1, 0.5, 0], scaleY: [1, 1.04, 0] }}>
            <VideoApp
              closeVideoApp={() => setIsCompleted(true)}
              isActive={true}
            />
          </Animation>
        )}
      </AnimatePresence>
      <ToastContainer />
      {isCompleted && <StepBtn />}
    </Base>
  )
}

export default Chapter4Cut6
