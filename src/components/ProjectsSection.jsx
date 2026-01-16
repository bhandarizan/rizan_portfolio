import { ArrowRight, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Next_FullStack",
		description:
			"Full-stack authenticated web application built with Next.js and MySQL using Prisma ORM ",
		image: "/projects/next_screenshot.png",
		tags: ["Next.js", "TypeScript", "TailwindCSS", "MySQL", "Prisma", "Postman", "NextAuth"],
		githubUrl: "https://github.com/bhandarizan/Next_Fullstack",
	},
	{
		id: 2,
		title: "Movie Suggestion Page",
		description:
			"A movie discovery web application that allows users to search for movies and view details along with trending movies section.",
		image: "/projects/MovieRecommendation.png",
		tags: ["JavaScript", "React.js", "TMDB API", "TailwindCSS", "Appwrite"],
		githubUrl: "https://github.com/bhandarizan/movie_suggestion_page",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					<span className="text-primary">Featured Projects </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was carefully
					implemented with regards to detail, performance, and user experience.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/bhandarizan"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};