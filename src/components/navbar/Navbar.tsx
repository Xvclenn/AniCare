import { link } from "fs";
import Link from "next/link";
import React from "react";
import style from "./Navbar.module.css";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Dog",
		url: "/",
	},
	{
		id: 3,
		title: "Cat",
		url: "/",
	},
	{
		id: 4,
		title: "About us",
		url: "/",
	},
];

export const Navbar = () => {
	return (
		<div>
			<div className={style.nav}>
				{links.map((link) => (
					<Link key={link.id} href={link.url}>
						{link.title}
					</Link>
				))}
			</div>
		</div>
	);
};
