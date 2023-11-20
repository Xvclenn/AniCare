import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram, FaInstagramSquare, FaShoppingCart, FaUser } from "react-icons/fa";

export const Footer = () => {
	return (
		<div className="footer bg-slate-300">
			<div className=" py-5 px-20 flex justify-between items-center">
				<h1 className="uppercase font-bold p-3 text-4xl">Contact</h1>

				<div className="flex gap-4">
					<FaFacebookSquare size="25px" />
					<FaInstagramSquare size="25px" />
				</div>
			</div>
			<h3 className="text-center p-5 italic font-serif">made by me</h3>
		</div>
	);
};
