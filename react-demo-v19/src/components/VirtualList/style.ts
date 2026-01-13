import { createStyles } from "antd-style";
export const useStyle = createStyles(({ css }) => ({
  container: {
    width: "200px",
    height: "545px",
    border: "1px solid #ccc",
    overflowY: "auto",
    position: "relative",
  },
  fakeContainer: {
    width: "100%",
  },
  content: css`
    gap: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  `,

  // todo 这里应该在外层传入进来，组件不需要管样式的
  listItem: css`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  `,
}));
