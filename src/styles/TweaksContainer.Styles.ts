import styled from "styled-components";
export const Container = styled.div`
  width: 54%;
  margin: 0;
`;

export const OptionsRow = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionHeader = styled.div``;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;
export const OptionItems = styled.button`
  border: none;
  width: auto;
  height: 100%;
  border-radius: 5px;
  padding: 6px;
  background-color: transparent;
  color: rgb(255, 255, 255);
  margin-left: 10px;
  font-family: "monospace";
  font-size: 15px;
  ${(props: { active?: boolean }) => {
    if (props.active === true) return `background-color:#282828;`;
  }}
`;
