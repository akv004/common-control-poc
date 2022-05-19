import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

interface FooterProps {
  footerText?: string;
  className?: string;
}

const FooterContent = styled.div<{}>`
  ${() => css`
    width: 100%;
    min-height: 2em;
    box-sizing: content-box;
    background-color: #083062;
    position: relative;
    display: flex;
    flex-direction: row;
    border-top: 2px solid rgba(255, 255, 255, 0);

    &.demo-footer {
      display: block;
      height: 3em;
    }
  `}
`;

export const Box = styled.div`
  padding: 2em 2em;
  background: #083062;
  position: absolute;
  bottom: 0;
  width: 95%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 80%;
  margin: 0 auto;
  /* background: red; */
`;

const FooterFont = styled.div`
  margin-top: 1em;
  font-family: sans-serif;
  font-size: 14px;
  color: #eaeaea;
`;

export const Footer: FC<FooterProps> = ({
  footerText = '@MyOrg Inc. All rights reserved Copyright & Licensing',
  className,
}) => {
  return (
    <>
      <FooterContent className={classNames('demo-footer', className)}>
        <Container>
          <FooterFont>{footerText}</FooterFont>
        </Container>
      </FooterContent>
    </>
  );
};
