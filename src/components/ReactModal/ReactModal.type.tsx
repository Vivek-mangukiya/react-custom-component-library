export interface ReactModalProps {
  modalShow: boolean;
  modalHide: any;
  dataTestId?: string;
  modalID: string;
  modalClass: string;
  contentClassName?: string;
  modalSize?: "sm" | "lg" | "xl" | undefined;
  modalBackdropStatic?: any;
  modalCentered?: boolean;
  modalKeyboardBackdrop?: boolean;
  enforceFocus?: boolean;
  restoreFocus?: boolean;
  scrollable?: boolean;
  autoFocus?: boolean;
  children: any;
}
