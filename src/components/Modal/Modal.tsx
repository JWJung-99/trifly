import { modalState } from "@/atoms/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Button from "../Button/Button";
import "./Modal.scss";

const Modal = () => {
  const {
    isOpen,
    closeButton = "true",
    title,
    content,
    buttonNum,
    handleConfirm,
    handleCancel,
  } = useRecoilValue(modalState);
  const setModal = useSetRecoilState(modalState);

  // 모달 닫기
  const handleClose = () => {
    setModal({
      isOpen: false,
    });
  };

  // 모달 오픈 시 배경 스크롤 방지
  // if (isOpen) {
  //   document.body.setAttribute("style", "overflow-y: hidden");
  // } else {
  //   document.body.setAttribute("style", "overflow-y: unset");
  // }

  return (
    <>
      {isOpen && (
        <div className="modal-layout">
          <div className="modal-window">
            {closeButton && (
              <button className="modal-close" onClick={handleClose}>
                <img src="img/icon-close-black.svg" alt="닫기" />
                <i className="hidden">모달 닫기</i>
              </button>
            )}
            <h3 className="modal-title">{title}</h3>
            <pre className="modal-content">{content}</pre>
            <>
              {buttonNum && (
                <div className="modal-button-container">
                  {buttonNum > 1 && (
                    <Button
                      size="full"
                      bgColor="light"
                      onClick={() => {
                        if (handleCancel) {
                          handleCancel();
                        }
                        handleClose();
                      }}
                    >
                      취소
                    </Button>
                  )}
                  <Button
                    size="full"
                    onClick={() => {
                      if (handleConfirm) {
                        handleConfirm();
                      }
                      handleClose();
                    }}
                  >
                    확인
                  </Button>
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;