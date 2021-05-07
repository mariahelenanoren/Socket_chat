import { makeStyles } from "@material-ui/core";

// Logiken för att man ska se vilket rum du är i
// highligta lila när det är samma rum som inloggad user

export default function RoomList() {
  const styled = useStyles();

  return (
    <div className={styled.container}>
      <div className={styled.chatrooms}>
        <ol className={styled.olList}>
          <dt className={styled.roomContainers}>
            <p className={styled.roomName}>Room 1</p>
          </dt>
        </ol>
        <button className={styled.buttonLogout}>Logout</button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    boxSizing: "border-box",
  },
  chatrooms: {
    border: "1px solid #F6F6F6",
    width: "28.9%",
    height: "100%",
  },

  olList: {
    padding: "0",
    margin: "0",
  },
  roomContainers: {
    border: "1px solid #F6F6F6",
    height: "4em",
  },

  buttonLogout: {
    position: "absolute",
    bottom: "3%",
    left: "1rem",
    borderRadius: "10px",
    height: "38px",
    width: "147px",
    color: "white",
    background: "#897AF2",
    border: "none",
    fontWeight: "bold",
  },

  roomName: {
    marginLeft: "2px",
    fontWeight: "bold",
  },
}));