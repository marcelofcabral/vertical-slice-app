import styled from "styled-components";

export const ANIMATION_DURATION_IN_SECONDS = 2;

export const Container = styled.div`
  @keyframes slide-and-fade-in {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-50%);
      opacity: 100%;
    }

    100% {
      transform: translateY(-120%);
      opacity: 0;
    }
  }

  position: absolute;
  top: 50%;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 180px;

  animation: slide-and-fade-in ${ANIMATION_DURATION_IN_SECONDS}s ease-in-out;
`;
