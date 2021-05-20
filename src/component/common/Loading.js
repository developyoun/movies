import { CircularProgress } from "@material-ui/core";

const Loading = () => {
	return (
  <CircularProgress
    size={60}
    thickness={5}
    color="secondary"
  />
  );
};
export default Loading;
