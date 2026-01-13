import { createStyles } from 'antd-style';

export const useStyle = createStyles(({ css, responsive }) => ({
  header: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-inline: 60px;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 96.105px;
      height: 35.87px;
    }
  `,

  menus: css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    .menu-item {
      font-size: 16px;
      cursor: pointer;
      color: #709830;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 125% */
      transition: color 0.3s ease;
      &:hover {
        color: #386302;
      }
      &.active {
        color: #386302;
      }
    }
  `,

  profile: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .seetings {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .connect-wallet-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      height: 34px;
      padding: 0 12px;
      border: 1px solid #5d8d20;
      border-radius: 8px;
      background-color: #fff;
      color: #5d8d20;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
    }
  `,
}));
