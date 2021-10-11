import React, { useEffect, useState } from "react";
import Item from "../components/items/Items";

import styles from "../css/styles.module.css";
import Header from "../components/header/Header";
export default function favourite() {
	const [images, setImages] = useState([]);
	useEffect(() => {
		const favImages = JSON.parse(localStorage.getItem("favorite-image"));
		setImages(favImages);
	});
	return (
		<>
			<div className={styles.container}>
				<header>
					<Header />
				</header>
				<main id={styles}>
					<h1 className={styles.title}>
						Your Favroute Saved <a href="javascrip:void(0);">Dogs</a>
					</h1>
				</main>
				<section id={styles.section}>
					<ul className={styles.wrapper}>
						{images
							? images.map((item, index) => <Item url={item.url} key={index} />)
							: "No Previously Saved Dogs"}
					</ul>
				</section>
				<style jsx>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
					}

					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		</>
	);
}
