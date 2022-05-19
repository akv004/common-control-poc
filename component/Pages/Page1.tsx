import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface PageProps {
  title: string;
  className?: string;
  searchTypes?: React.ReactChild | React.ReactChild[] | undefined;
}

const TitleFont = styled.div`
  font-family: sans-serif;
  font-size: 30px;
  color: #0056c4;
`;

export const Page: FC<PageProps> = ({
  title = '[Title] lookup',
  className,
  searchTypes,
}) => {
  return (
    <div>
      <TitleFont>{title}</TitleFont>
    </div>
  );
};
