import styled from "styled-components";
import { theme } from "../../../Theme";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 30px;
`;

export const Resume = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #ffffff;
  width: 90%;
  padding: 15px;
  gap: 10px;
  font-size: 14px;
`;

export const ResumeCol1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  & div {
    display: flex;
    flex-direction: column;
  }

  & div:nth-child(1) {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
  }

  & span:nth-child(1) {
    font-weight: bold;
  }

  & div:nth-child(5) {
    font-size: 18px;
    background-color: ${({ Theme }) => theme.color.background};
    width: 90%;
    padding: 10px 0px;
    align-items: center;
    border-radius: 6px;
  }
`;

export const ResumeCol2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: end;
  //padding: 5px;
  gap: 8px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  & div:nth-child(1) {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
  }

  & span:nth-child(1) {
    font-weight: bold;
  }

  & div:nth-child(5) {
    font-size: 18px;
    background-color: ${({ Theme }) => theme.color.background};
    width: 90%;
    padding: 10px 0px;
    align-items: center;
    border-radius: 6px;
  }
`;

export const ResumeDivider = styled.div`
  margin-bottom: 5px;
`;

export const Chart = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
`;
