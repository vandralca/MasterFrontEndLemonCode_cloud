import { css } from '@emotion/css';

export const root = css`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  align-items: stretch;
  justify-items: stretch;
`;

export const rootOnlyLeftSide = css`
  display: grid;
  grid-template-columns: 100% 0%;
  grid-template-rows: 100%;
  align-items: stretch;
  justify-items: stretch;
`;

export const leftColumn = css`
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const rightColumn = css`
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const rightColumnHidden = css`
  grid-column-start: 2;
  grid-column-end: 3;
  display: none;
`;
