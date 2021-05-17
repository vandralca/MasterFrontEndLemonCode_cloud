import { css } from '@emotion/css';

export const root = css`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const imageList = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 40px;
`;

export const caption = css`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const title = css`
  margin-left: 10px;
  font-size: 1.5em;
`;

export const image = css`
  max-height: 75px;
  margin-right: 10px;
  margin-bottom: 25px;
`;

export const verticalLine = css`
  border-left: 1px solid #ccc;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const purchaseOrder = css`
  margin-left: 30px;
`;

export const clearCart = css`
  margin-top: 30px;
`;
