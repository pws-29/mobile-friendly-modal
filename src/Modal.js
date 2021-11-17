import { X } from "react-feather";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from '@reach/dialog' /* Accessible lib */

/*
  This value is provided for your convenience.
  If you'd like, you can use it in your media
  queries! If you're not sure how to do that,
  you can use a hardcoded value for now.
  We'll learn more about breakpoints in the
  upcoming lessons.
*/
const MOBILE_BREAKPOINT = 550;

function Modal({
  title,
  isOpen,
  handleDismiss,
  children
}) {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={handleDismiss}
    >
      <Content aria-lable={title}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={handleDismiss}>
            <X />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
        <ChildWrapper>{children}</ChildWrapper>
      </Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 65%;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

const Header = styled.header`
  padding: 16px;
  padding-bottom: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 4px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -48px;
  right: 0;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: white;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    position: static; /* Now we have a display flex on header */
    color: black;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const ChildWrapper = styled.div`
  padding: 16px;
`;

export default Modal;
