import { Redis } from "@upstash/redis";
import type { Project as ContentLayerProject } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Article } from "./article";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = allProjects.length > 0
    ? (
        await redis.mget<number[]>(
          ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
        )
      ).reduce((acc, v, i) => {
        acc[allProjects[i].slug] = v ?? 0;
        return acc;
      }, {} as Record<string, number>)
    : {};

  const publishedProjects = allProjects
    .filter((p) => p.published)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  // Group projects by type
  const projectsByType = {
    website: publishedProjects.filter((p): p is ContentLayerProject => p.projectType === "website"),
    webgame: publishedProjects.filter((p): p is ContentLayerProject => p.projectType === "webgame"),
    webapp: publishedProjects.filter((p): p is ContentLayerProject => p.projectType === "webapp"),
  };

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="inline-block text-3xl font-bold tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-300">
            Some of the projects I've built 👷🏻‍♂️ some I'm working on 🔧.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Websites Section */}
        {projectsByType.website.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-zinc-300">Websites 💻</h3>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
              {/* Featured project */}
              {projectsByType.website.length > 0 && (
                <Card className="md:col-span-1">
                  <Article project={projectsByType.website[0]} views={views[projectsByType.website[0].slug] ?? 0} />
                </Card>
              )}
              {/* Remaining projects */}
              <div className="flex flex-col gap-4">
                {projectsByType.website.slice(1).map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} views={views[project.slug] ?? 0} />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-px bg-zinc-800" />

        {/* Webgames Section */}
        {projectsByType.webgame.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-zinc-300">Web Games 🎮</h3>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
              {/* Featured project */}
              {projectsByType.webgame.length > 0 && (
                <Card className="md:col-span-1">
                  <Article project={projectsByType.webgame[0]} views={views[projectsByType.webgame[0].slug] ?? 0} />
                </Card>
              )}
              {/* Remaining projects */}
              <div className="flex flex-col gap-4">
                {projectsByType.webgame.slice(1).map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} views={views[project.slug] ?? 0} />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-px bg-zinc-800" />
        {/* Webapps Section */}
        {projectsByType.webapp.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-zinc-300">Web Apps 📱</h3>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
              {/* Featured project */}
              {projectsByType.webapp.length > 0 && (
                <Card className="md:col-span-1">
                  <Article project={projectsByType.webapp[0]} views={views[projectsByType.webapp[0].slug] ?? 0} />
                </Card>
              )}
              {/* Remaining projects */}
              <div className="flex flex-col gap-4">
                {projectsByType.webapp.slice(1).map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} views={views[project.slug] ?? 0} />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}
