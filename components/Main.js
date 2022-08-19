import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Let&apos;s Build Something Together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m <span className="text-[#5651e5]">Wasim</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						{/* I&apos;m focused on building responsive front-end web applications
						while <br /> learning back-end technologies */}
						I&apos;m a passionate introvert who loves building things with code
					</p>
					<div className="flex justify-between items-center max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/wasim-ay/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/simbaig/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<Link href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</Link>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<BsPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
