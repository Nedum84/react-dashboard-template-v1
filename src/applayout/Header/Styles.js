import COLORS from "styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  height: 7.9rem;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  padding: 1.1rem 2rem;
  align-items: center;
  border: 0.5px solid ${COLORS.grey};
  border-radius: 4px;
  input {
    border: none;
    min-width: 30rem;
    text-align: center;
    outline: none;
    ::placeholder {
      color: ${COLORS.black};
    }
  }
  svg {
    color: #15161a;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  .avater {
    cursor: pointer;
    border-radius: 50%;
  }
  span {
    cursor: pointer;
  }
  .bell {
    padding-right: 3.6rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
