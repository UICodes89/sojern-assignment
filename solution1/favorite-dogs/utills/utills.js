import axios from "axios";

const getData = async () => {
	return axios.get("https://random.dog/woof.json").then((response) => {
		return response.data;
	});
};
export default getData;
