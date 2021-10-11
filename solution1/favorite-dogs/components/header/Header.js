import React from "react";
import Link from "next/link";
// @ts-ignore
import styles from "../../css/styles.module.css";
export default function Header() {
	return (
		<div>
			<ul className={styles.nav}>
				<li>
					<Link href="/">
						<a className={styles.link}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/favourite">
						<a className={styles.link}>Favroute</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
