
export const style = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  subtitle: {
    marginTop: 30
  },
  arrowDown: {
    transform: "rotate(90deg)"
  },
  arrowUp: {
    transform: "rotate(270deg)"
  },
  arrowLeft: {
    transform: "rotate(180deg)"
  },
  defaultContainer: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    border: "3px #9EE9F8 solid"
  },
  rendererItem: {
    margin: 20,
    textAlign: "center"
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: 400,
    maxWidth: 500,
    position: "absolute",
    right: 10,
    paddingLeft: 20,
    borderLeft: "3px #9EE9F8 solid"
  },
  bulletListItem: {
    display: "flex",
    textAlign: "left"
  },
  codeContainer: {
    fontSize: 30,
    maxHeight: 370
  },
  codeParentContainer: {
    width: 900,
    display: "flex",
    padding: 20,
    border: "3px #9EE9F8 solid",
    alignItems: "flex-start",
    overflow: "auto"
  },
  fileNameText: {
    fontSize: 5,
    textAlign: "left",
    overflow: "hidden",
    marginBottom: 10,
    whiteSpace: "nowrap",
    borderRight: "10px #9EE9F8 solid"
  },
  link: {
    color: "#9EE9F8",
    textDecoration: "none"
  },
  pixelImage: {
    height: 70,
    imageRendering: "pixelated",
    margin: "0 20px"
  }
};
