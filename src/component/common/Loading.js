import { CircularProgress } from "@material-ui/core";

const Loading = () => {
	return (
    <div style={{display: "flex", justifyContent:"center", margin:'20px 0'}}>
      <CircularProgress
        size={60}
        thickness={5}
        color="secondary"
      />
    </div>
  );
};
export default Loading;
