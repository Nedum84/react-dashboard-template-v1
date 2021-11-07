import COLORS from "styles/colors";

const { default: styled } = require("styled-components");

export const Container = styled.div`
  height: 100vh;
  color: ${COLORS.white};
  background-color: ${COLORS.blackLight};
  width: ${({ collapse }) => (collapse ? "6.8rem" : "20.7rem")};
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
`;
export const NavHead = styled.div`
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  padding: 0 2.6rem;
  height: 7.9rem;
  .menuicon {
    color: ${COLORS.white};
    padding-right: ${({ collapse }) => (collapse ? "0" : "1.6rem")};
    cursor: pointer;
  }
  .logo {
    width: ${({ collapse }) => (collapse ? "0" : "auto")};
  }
`;
export const NavContent = styled.div`
  padding-top: 6.5rem;
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
`;
export const NavItem = styled.div`
  color: ${({ isActive }) => (isActive ? COLORS.primary : COLORS.white)};
  font-size: 1.6rem;
  border-left: 3px solid ${COLORS.primary};
  border-left-color: ${({ isActive }) =>
    isActive ? COLORS.primary : COLORS.transparent};
  margin-bottom: 4.6rem;
  a {
    width: 100%;
    padding-left: 2.2rem;
    display: inline-block;
    color: ${({ isActive }) => (isActive ? COLORS.primary : COLORS.white)};
    text-decoration: none;
    display: flex;
    span {
      display: inline-block;
      width: ${({ collapse }) => (collapse ? "0rem" : "auto")};
      overflow: hidden;
      transition: width 3s;
      white-space: nowrap;
    }
    svg {
      margin-right: 1.5rem;
      width: 1.67rem;
      height: 1.67rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: ${({ collapse }) => (collapse ? "auto" : "none")};
  padding-bottom: 1rem;
`;
