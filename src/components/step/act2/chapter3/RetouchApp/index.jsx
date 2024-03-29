import React, { useState, useRef } from "react"
import styled from "styled-components"
import FilesTab from "./FilesTab"
import ButtonBox from "./ButtonBox"
import Button from "./Button"
import ConfirmMsgBox from "./ConfirmMsgBox"
import ImgBox from "./ImgBox"
import IMG1URL from "images/act2/chapter3/retouch-1.webp"
import IMG2URL from "images/act2/chapter3/retouch-2.webp"
import IMG3URL from "images/act2/chapter3/retouch-3.webp"
import FilterContainer from "./FilterContainer"
import { useControl } from "context/control"
import { navigate } from "gatsby"

const Base = styled.div`
  width: 100%;
  background-color: #18152e;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
`

const INITAL_FILTER_VALUE = {
  brightness: 100,
  contrast: 100,
  saturate: 100,
  grayscale: 0,
  invert: 0,
  huerotate: 0,
  blur: 0,
  sepia: 0,
}

const FILE_STATE = [
  {
    title: "바다 갔던 날.jpng",
    img_url: IMG1URL,
  },
  {
    title: "눈 내리는 날 뭉게랑.jpng",
    img_url: IMG2URL,
  },
  {
    title: "여름밤.jpng",
    img_url: IMG3URL,
  },
]

const RetouchApp = ({ isActive }) => {
  const [currentFile, setCurrentFile] = useState(0)
  const [filters, setFilters] = useState(INITAL_FILTER_VALUE)
  const modalRef = useRef(null)
  const { step } = useControl()

  const resetFilters = () => {
    setFilters(INITAL_FILTER_VALUE)
  }

  const handleSaveBtnClick = () => {
    if (isActive) modalRef.current.showModal()
  }

  const handleConfirmBtnClick = () => {
    if (currentFile === 2) return navigate(`/play/${step + 1}`)
    resetFilters()
    modalRef.current.close()
    setCurrentFile((prev) => prev + 1)
  }

  return (
    <Base>
      <FilesTab currentFile={currentFile} FILE_STATE={FILE_STATE} />
      <ImgBox
        filters={filters}
        currentFile={currentFile}
        FILE_STATE={FILE_STATE}
      />
      <FilterContainer filters={filters} setFilters={setFilters} />
      <ButtonBox>
        <Button onClick={resetFilters} bgColor={"#cccccc"}>
          RESET
        </Button>
        <Button onClick={handleSaveBtnClick} bgColor={"#4dabf7"}>
          SAVE
        </Button>
      </ButtonBox>
      <ConfirmMsgBox
        modalRef={modalRef}
        onCancleBtnClick={() => modalRef.current.close()}
        onConfirmBtnClick={handleConfirmBtnClick}
      />
    </Base>
  )
}

export default RetouchApp
