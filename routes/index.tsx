import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:deno",
  "logos:vue",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
  "fluent:textbox-16-filled"
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              "Je m'appelle Simon Gosse",
              "Je suis un game programmer",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          Je suis un étudiant en seconde année de master Management Jeux et Industries Créatives à Cannes.
          Je code principalement en C# sur Unity et me spécialise en programmation UI.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

/*function Values() {
  const values: Value[] = [
    {
      title: "Passion for Continuous Learning",
      description:
        "I actively seek out new technologies and stay up-to-date with industry trends.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "User-Centric Approach",
      description:
        "My goal is to create user-friendly applications that solve real-world problems.",
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}*/

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
  description: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Junior UI Programmer (Work-Study)",
      company: "La Moutarde",
      timePeriod: "Sep 2022 - Sep 2023",
      location: "Montpellier, France (Full Remote)",
      description: "Durant mon année en Licence Professionnelle Médias Interactifs et Application Mixtes Immersives j'ai eu l'opportunité d'effectuer une alternance en tant que Junior UI Programmer chez La Moutarde." +
                    "J'ai ainsi pu travailler sur leur  jeu Terra Memoria. Grâce à cette expérience, j'ai pu développer mes compétences en programmation C# sur Unity."+
                    "J'ai également pu travailler sur l'interface utilisateur du jeu, en collaboration avec les graphistes et les game designers."
    },
    {
      title: "Video Editor",
      company: "KO Visuel",
      timePeriod: "Feb 2021 - March 2021",
      location: "Limoux, France",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nunc et turpis euismod dapibus id eget metus. Sed eget felis sit amet eros fringilla aliquam sit amet sit amet nulla. Suspendisse ac tincidunt ante, a interdum eros. Vivamus laoreet pretium urna in consequat. Integer eu ligula id magna condimentum dignissim id in sem. Donec mattis, ante eget vehicula viverra, enim ex blandit enim, et commodo arcu nisi non diam. Phasellus feugiat pharetra semper. Proin scelerisque ligula vel hendrerit blandit."
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
                <span className="flex items-top gap-2 text-gray">
                  <Icon
                      icon="fluent:textbox-16-filled"
                      width="none"
                      height="none"
                  />
                  <p>{experience.description}</p>
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Expériences Professionnelles</h1>
    </section>
  );
}

interface School {
  title: string;
  timePeriod: string;
  location: string;
  description: string;
}

function School() {
  const school: School[] = [
    {
      title: "Master Management Jeux et Industries Créatives (MAJIC)",
      location: "Cannes, France",
      timePeriod: "Septembre 2023 - Août 2025",
      description: "Oui"
    },
    {
      title: "Licens Professionnelle Médias Interactifs et Applications Mixtes Immersives (MIAMI)",
      location: "Tarbes, France",
      timePeriod: "Septembre 2022 - Août 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nunc et turpis euismod dapibus id eget metus. Sed eget felis sit amet eros fringilla aliquam sit amet sit amet nulla. Suspendisse ac tincidunt ante, a interdum eros. Vivamus laoreet pretium urna in consequat. Integer eu ligula id magna condimentum dignissim id in sem. Donec mattis, ante eget vehicula viverra, enim ex blandit enim, et commodo arcu nisi non diam. Phasellus feugiat pharetra semper. Proin scelerisque ligula vel hendrerit blandit."
    },
  ];

  return (
      <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
        <div class="flex flex-col">
          {school.map((school, i) => (
              <>
                {i > 0 &&
                    (
                        <div class="flex flex-col gap-2 ml-8 my-2">
                          {[...Array(3)].map(() => (
                              <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                          ))}
                        </div>
                    )}

                <div class="card">
                  <div class="card-body p-4">
                    <h2 class="card-title">{school.title}</h2>
                    <span class="flex items-center gap-2 text-gray">
                  <Icon
                      icon="tabler:calendar-filled"
                      width="none"
                      height="none"
                  />
                      {school.timePeriod}
                </span>
                    <span class="flex items-center gap-2 text-gray">
                  <Icon
                      icon="carbon:location-filled"
                      width="none"
                      height="none"
                  />
                      {school.location}
                </span>
                    <span className="flex items-top gap-2 text-gray">
                  <Icon
                      icon="fluent:textbox-16-filled"
                      width="none"
                      height="none"
                  />
                  <p>{school.description}</p>
                </span>
                  </div>
                </div>
              </>
          ))}
        </div>
        <h1 class="text-3xl font-bold text-primary">Formations</h1>
      </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Denoland Fresh",
      description:
        "Fresh is a full stack modern web framework for JavaScript and TypeScript developers.",
      link: "https://fresh.deno.dev/",
      type: "Open Source",
      icon: "logos:deno",
    },
    {
      title: "Dogr.",
      description:
        "Dogr is a web application I developed to hone my skills in Nuxt and Vue.",
      link: "https://dogr.vercel.app/",
      type: "Personal",
      icon: "logos:vue",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Mes Projets
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "devicon:unity",
    "skill-icons:cs",
    "skill-icons:unrealengine",
    "skill-icons:cpp",
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "logos:php",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Compétences
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <School />
      <Experience />
      <Projects />
      <Technologies />
    </>
  );
}
