import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  height: 160px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: #191919;
  position: relative;
  border: 1px solid #282828;
`;
export const Text = styled.div`
  position: absolute;
  width: 95%;
  height: 140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
`;

export const Word = styled.div`
  font-size: 18px;
  color: rgba(250, 250, 250, 0.9);
  height: 40px;
  width: auto;
  padding: 5px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props: {
    active?: boolean;
    correct?: boolean;
    wrong?: boolean;
    activewrong?: boolean;
  }) => {
    if (props.active) {
      return `background-color:#2e2e2e;border-radius:10px;`;
    }
    if (props.correct) {
      return `color:lightgreen;`;
    }
    if (props.wrong) {
      return `color:#ee6060;`;
    }
    if (props.activewrong) {
      return `background-color:#2e2e2e;border-radius:10px;color:#ee6060;`;
    }
  }}
`;
