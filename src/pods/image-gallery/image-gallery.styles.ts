import { css } from '@emotion/css';
import { withStyles} from '@material-ui/core/styles';

export const root = css`
  height: 100%;
  width: 100%;
`;

export const imageList = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 40px;
`;

export const image = css`
  max-height: 150px;
  margin-right: 30px;
  margin-bottom: 50px;
`;

export const headerGroup = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 10px;
`;

export const linkGroup = css`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 30px;
`;

export const expandButtonsGroup = css`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const link = css`
  margin-left: 40px;
`;
