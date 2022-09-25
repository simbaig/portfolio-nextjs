import React from "react";
import Image from "next/image";
import movieImg from "../public/assets/projects/moviepedia.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Movie = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolue z-1"
					layout="fill"
					objectFit="cover"
					src={movieImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Moviepedia</h2>
					<p>React JS / TMDB Api </p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This appplication was built using React JS. The application is
						hosted statically using Vercel. This is a mobile responsive movie
						app features TMDB Api for movie search. This application is pulling
						movie data from an the TMDB movie API and displaying movies. Users
						have the option to view the top playing movies and sort them with
						movies they search.
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/simbaig/moviepedia"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://moviepedia-simbaig.vercel.app"
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
								TMDB Api
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JavaScript
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

export default Movie;
