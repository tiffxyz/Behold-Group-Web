export interface ModalContextType {
    modalRef: React.RefObject<HTMLDivElement>;
    modalContent: React.ReactNode;
    setModalContent: (content: React.ReactNode) => void;
    setOnModalClose: (callback: () => void) => void;
    closeModal: () => void;
  }

  export interface ModalProviderProps {
    children: React.ReactNode;
  }
