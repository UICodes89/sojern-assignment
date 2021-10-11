import React from "react";
// @ts-ignore
import styles from "../../css/styles.module.css";
export default function Items(props) {
	console.log(props);
	const save = () => {
		debugger;
		const favImages = JSON.parse(localStorage.getItem("favorite-image"));
		const isAvailable =
			favImages && favImages.filter((item) => item.url === props.url);
		if (favImages && isAvailable.length) {
			alert("Image is already in favorites");
		} else if (favImages) {
			favImages.push({ url: props.url });
			localStorage.setItem("favorite-image", JSON.stringify(favImages));
		} else {
			let favImages = [];
			favImages.push({ url: props.url });
			localStorage.setItem("favorite-image", JSON.stringify(favImages));
		}
	};
	return (
		<li
			className={styles.listGroup}
			onClick={() => {
				save();
			}}
		>
			<img src={props.url} className={styles.dogImage} />
		</li>
	);
}
