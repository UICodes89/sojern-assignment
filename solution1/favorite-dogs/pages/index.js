import Head from "next/head";
import { useEffect, useState } from "react";

import getData from "../utills/utills";
import Header from "../components/header/Header";
// @ts-ignore
import Item from "../components/items/Items";

// @ts-ignore
import styles from "../css/styles.module.css";

export default function Home() {
	const [images, setImages] = useState([]);
	const [loader, setLoader] = useState(false);
	const loadData = async () => {
		let result = await getData();
		let formats = ["png", "jpg", "jpeg", "gif"];
		// @ts-ignore
		let ext = result.url.split(".")[result.url.split(".").length - 1];
		// @ts-ignore
		if (result.url && formats.indexOf(ext.toLowerCase()) !== -1) {
			let data = [...images, result];
			setImages(data);
		} else {
			loadData();
		}
	};

	useEffect(() => {
		if (images.length < 6) {
			loadData();
		} else {
			setLoader(true);
		}
	}, [images]);

	const next = () => {
		setImages([]);
		getData();
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Favourite Dog App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Header />
			</header>

			<main id={styles.main}>
				<h1 className={styles.title}>
					Welcome, Choose Your <a href="javascrip:void(0);">Favorite DOG</a>
				</h1>

				<p className={styles.description}>
					Save your favourite <code>dog</code>
				</p>
				<div onClick={next}>Refresh</div>
			</main>
			<section id={styles.section}>
				<ul className={styles.wrapper}>
					{loader
						? images.map((item, index) => <Item url={item.url} key={index} />)
						: "Loading.."}
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
	);
}
