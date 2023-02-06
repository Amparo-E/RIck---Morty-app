export const style = {
  content_box: {
    position: "relative",
    height: "11.25em",
    width: "11.25em",
    cursor: "pointer",
  },
  content_img: {
    width: "100%",
    height: "100%",
    borderRadius: "0.6em",
  },
  status_box: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  status: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    mr: "7px",
  },
  info_box: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    opacity: "0",
    "&: hover": {
      opacity: "1",
      transition: "opacity 0.3s ease",
    },
  },
};
