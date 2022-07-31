import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav((prevState) => !prevState);
	};

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/navLogo.png"
					alt="/"
					height="50"
					width="125"
				/>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image
								src="/../public/assets/navLogo.png"
								alt="/"
								width="87"
								height="35"
							/>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&apos;s build something Legendary Together
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Skills</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Projects</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								Let&apos;s connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
