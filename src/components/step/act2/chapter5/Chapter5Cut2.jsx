import React, { useState } from "react"
import styled from "styled-components"
import Window from "components/common/Window"
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle"
import { FcPlus, FcHome } from "react-icons/fc"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import useToast from "hooks/useToast"
import SecurityApp from "./SecurityApp"
import { motion } from "framer-motion"
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
  width: 90%;
  position: absolute;
`

const Chapter5Cut2 = () => {
  const [showSecurityApp, setShowSecurityApp] = useState(false)
  useToast("마지막 보안 프로그램을 누르자")

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
              <IconWrapper
                onClick={() => setShowSecurityApp(true)}
                cursor="true"
                hover
              >
                <FcPlus />
              </IconWrapper>
              <Active />
            </li>
          </ul>
        </Bottom>
      </Window>
      {showSecurityApp && (
        <>
          <Animation
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.5, 1], scaleY: [0, 1.04, 1] }}
          >
            <SecurityApp />
          </Animation>
          <StepBtn />
        </>
      )}
      <ToastContainer />
    </Base>
  )
}

export default Chapter5Cut2
