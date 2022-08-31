import React from "react";
import Image from "next/image";
import cryptoImage from "../public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Crypto = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolue z-1"
					layout="fill"
					objectFit="cover"
					src={cryptoImage}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Cryto App</h2>
					<p>React JS / Tailwind / Firebase</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						I built this app to demonstrate knowledge working in React JS and
						accessing API endpoints. This app was built using React JS and is
						hosted on Firebase. This application supports user authentication
						using firebase. Users are able to create a new account using their
						email address and can then sign in to save coins to a user specific
						list. This is made possble by creating a firestore cloud storage
						database at the time of user registration. Another feature of this
						application is dynamic routing through the &quot;React Router
						DOM&quot; package. This application was built using the Coin Gecko
						API.
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/simbaig/crypto-react-firebase"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://cryptobase-5c326.web.app/"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								React
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Tailwind
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JavaScript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Firebase
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Coin Gecko API
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Routes
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default Crypto;
