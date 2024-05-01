"use client";

import { Modal } from "@mantine/core";
import { Context, ReactNode, createContext, useState } from "react";

export interface IModalContext {
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
  close: () => void;
}

interface IModalState {
  opened: boolean;
  component: null | ReactNode;
  closeOnClickOutside?: boolean;
  id?: null | string | number;
  onClose?: () => void;
  overflow?: "unset" | "auto";
}

export const ModalContext = createContext<IModalContext | null>(
  null
) as Context<IModalContext>;
const initialvalues: IModalState = {
  opened: false,
  component: null,
  id: null,
  onClose: () => {},
  closeOnClickOutside: true,
  overflow: "auto",
};

function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<IModalState>(initialvalues);
  const close = () => {
    setModalState(initialvalues);
  };
  return (
    <>
      <ModalContext.Provider value={{ setModalState, modalState, close }}>
        <Modal
          opened={modalState.opened}
          classNames={{
            content: "rounded-2xl flex overflow-auto no-scrollbar",
            body: "p-0 flex no-scrollbar overflow-auto",
          }}
          styles={{
            content: {
              overflow: `${modalState.overflow} !important`,
            },
          }}
          closeOnClickOutside={modalState.closeOnClickOutside}
          centered
          withCloseButton={false}
          size="auto"
          onClose={() => {
            setModalState({
              opened: false,
              component: null,
            });
            if (modalState.onClose) modalState.onClose();
          }}
        >
          {modalState.component}
        </Modal>
        {children}
      </ModalContext.Provider>
    </>
  );
}

export default ModalProvider;
