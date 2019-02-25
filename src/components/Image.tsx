import styled, { css } from "styled-components";

const Image = styled.img`
  width: 150px;

  ${(props: { blurred?: boolean }) => props.blurred && css`
    filter: blur(5px);
  `}
`;

export default Image;