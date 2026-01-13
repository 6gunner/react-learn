import { createStyles } from "antd-style";
import Bg from "@/assets/BG1.svg";
export const useStyle = createStyles(({ css, responsive }) => ({
  mainContent: css`
    width: 100%;
    min-width: 1200px;
    max-width: 1920px;
    padding: 50px 0 42px 42px;
    margin: 0 auto;
  `,

  heroSection: css`
    width: 100%;
    aspect-ratio: 1920 / 822;
    position: relative;
    display: flex;
    background-image: url("${Bg}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
  `,

  left: css`
    flex: 1008;
    height: 100%;
    position: relative;
    .bg-image {
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      padding: 40px 45px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    .title {
      color: #fff;
      font-size: 58px;
      font-weight: bold;
    }

    .subTitle {
      color: #fff;
      font-size: 48px;
    }
  `,

  right: css`
    /* flex: 390; */
    flex: 27.93%;
    height: 100%;
    position: relative;
    .bg-image {
      width: 100%;
      height: auto;
    }
  `,

  clipBox: css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    aspect-ratio: 522/131;
    background: #cef17a;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15.4% 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .icon {
      font-size: 48px;
      font-weight: bold;
      color: #1a1a1a;
      img {
        width: 40px;
        height: 40px;
      }
    }

    .text-content h2 {
      margin: 0 0 8px 0;
      font-size: 28px;
      color: #2c5f2d;
      font-weight: 400;
    }

    .text-content p {
      margin: 0;
      font-size: 28px;
      color: #2c5f2d;
      font-weight: 500;
    }
  `,

  buttonGroup: css`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 40px 45px;
    display: flex;
    gap: 15px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      width: 234px;
      height: 58px;
      font-family: Jeko-Medium;
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      text-transform: capitalize;
    }

    .primaryButton {
      border-radius: 8px;
      border: 1px solid #386302;
      background: #386302;
      color: #fff;
    }

    .secondaryButton {
      border-radius: 8px;
      border: 1px solid #fff;
      background: #fff;
      color: #000;
    }
  `,
}));
