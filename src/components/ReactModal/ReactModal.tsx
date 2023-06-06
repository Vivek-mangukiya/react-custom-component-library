import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import { ReactModalProps } from "./ReactModal.type";

export const ReactModal: FunctionComponent<ReactModalProps> = ({
  modalShow,
  modalHide,
  dataTestId,
  modalID,
  modalClass,
  modalSize,
  modalBackdropStatic,
  modalCentered,
  contentClassName,
  modalKeyboardBackdrop,
  enforceFocus,
  restoreFocus,
  scrollable,
  autoFocus,
  children,
}) => {
  return (
    <Modal
      show={modalShow}
      onHide={modalHide}
      data-test-id={dataTestId}
      id={modalID}
      dialogClassName={modalClass}
      size={modalSize}
      contentClassName={contentClassName}
      backdrop={modalBackdropStatic === true ? "static" : true}
      centered={modalCentered === false ? false : true}
      aria-labelledby={modalID}
      keyboard={modalKeyboardBackdrop}
      enforceFocus={enforceFocus}
      restoreFocus={restoreFocus}
      scrollable={scrollable}
      autoFocus={autoFocus}
    >
      {children}
    </Modal>
  );
};
