import React from "react";
import ProjectItem from "./ProjectItem";
import foodImg from "../public/assets/projects/food-app.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import movieImg from "../public/assets/projects/moviepedia.png";
import twitchImg from "../public/assets/projects/twitch.jpg";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Crypto App"
						backgroundImg={cryptoImg}
						projectUrl="/crypto"
						tech="React JS"
					/>
					<ProjectItem
						title="Twitch UI"
						backgroundImg={twitchImg}
						projectUrl="/twitch"
						tech="Next JS"
					/>
					<ProjectItem
						title="Moviepedia"
						backgroundImg={movieImg}
						projectUrl="/moviepedia"
						tech="React JS"
					/>
					<ProjectItem
						title="Best Eats"
						backgroundImg={foodImg}
						projectUrl="/food"
						tech="React JS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
