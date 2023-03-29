import React, { ReactNode } from "react";
import { Modal } from "react-native";
import {
  ContentWrapper,
  ModalBackground,
  ModalContainer,
  OkButton,
  OkText,
} from "./styles";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const NoLocationAccessModal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalBackground>
          <ContentWrapper>{children}</ContentWrapper>
          <OkButton onPress={onClose}>
            <OkText>OK</OkText>
          </OkButton>
        </ModalBackground>
      </ModalContainer>
    </Modal>
  );
};

export default NoLocationAccessModal;
