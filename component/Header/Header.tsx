import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { BREAKPOINT_SIZES } from '../constants';
import { math } from 'polished';
import classNames from 'classnames';

interface HeaderProps {
  headerText: string;
  className?: string;
}

const HeaderContent = styled.div<{
  isMenuPanelOpen: boolean;
}>`
  ${({ isMenuPanelOpen }) => css`
    width: 100%;
    min-height: 1em;
    box-sizing: content-box;
    background-color: rgba(252, 247, 243, 0.99);
    position: relative;
    display: flex;
    flex-direction: row;
    border-top: 2px solid rgba(255, 255, 255, 0);

    //&.demo-header {
    //  display: block;
    //  height: 2em;
    //}
  `}
`;

export const Breakpoint = {
  s: `(min-width: ${BREAKPOINT_SIZES.SMALL})`,
  m: `(min-width: ${BREAKPOINT_SIZES.MEDIUM})`,
  l: `(min-width: ${BREAKPOINT_SIZES.LARGE})`,
};

const LogoContainer = styled.div`
  ${({
    theme: { spacingBase, spacingLG, spacingM, spacingXL, spacingXS },
  }) => css`
    padding: 0 ${spacingBase};
    @media ${Breakpoint.m} {
      padding: 0 ${spacingM};
    }
    @media ${Breakpoint.l} {
      padding: 0 ${spacingLG};
    }
  `}
`;

const LogoFont = styled.div`
  font-family: sans-serif;
  font-size: 30px;
  color: #e16161;
  margin:50% .2em;
`;

export const Header: FC<HeaderProps> = ({ headerText, className }) => {
  return (
    <>
      <HeaderContent
        isMenuPanelOpen={false}
        className={classNames('demo-header', className)}
      >
        <LogoContainer>
          <LogoFont>{headerText}</LogoFont>
        </LogoContainer>
      </HeaderContent>
    </>
  );
};
