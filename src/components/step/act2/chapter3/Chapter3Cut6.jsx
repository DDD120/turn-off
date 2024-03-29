import React from "react"
import RetouchApp from "./RetouchApp"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import useToast from "hooks/useToast"
import styled from "styled-components"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RetouchAppWrapper = styled.div`
  width: 100%;
`

const Chapter3Cut6 = () => {
  useToast("사진 보정을 완료하자")

  return (
    <Base>
      <RetouchAppWrapper>
        <RetouchApp isActive={true} />
      </RetouchAppWrapper>
      <ToastContainer />
    </Base>
  )
}

export default Chapter3Cut6
