import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
`;

export const Wpm = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 20px;
`;

export const ResultsTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  td {
    padding: 5px;
  }
`;

export const ResultsRow = styled.tr`
  height: 40px;
  &:nth-child(even) {
    background-color: #282828;
  }
`;
