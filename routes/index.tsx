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
  "fluent:textbox-16-filled",
  "tabler:play-card-k",
  "tabler:play-card-k",
  "game-icons:crystal-growth",
  "game-icons:vampire-cape",
  "fa6-solid:dungeon",
  "material-symbols:planet-outline",
  "game-icons:plant-roots",
  "fluent-emoji-high-contrast:japanese-castle"
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
          Game Programmer Unity et C# spécialisé en UI.
          J'intègre une vision UX à mon travail.
          Grand joueur de shooters à la première personne comme Bioshock ou encore Half-life (oui oui ce sont des shooters).
          Mon souhait est de pouvoir un jour créer des expériences équivalentes à ces classiques du jeu vidéo.
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
      description: "Durant mon année en Licence Professionnelle Médias Interactifs et Application Mixtes Immersives j'ai eu l'opportunité d'effectuer une alternance en tant que <b>UI Programmer</b> chez La Moutarde." +
                    " J'ai ainsi pu travailler sur leur  jeu Terra Memoria. Grâce à cette expérience, j'ai pu développer mes compétences en programmation <b>C#</b> sur <b>Unity</b>."+
                    " J'ai principalement travailler sur l'interface utilisateur du jeu, en collaboration avec les graphistes et les game designers."
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
                  <div dangerouslySetInnerHTML={{ __html: experience.description }}></div>
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
      description: "Master en Management de Jeux, où j'ai eu l'occasion de réaliser plusieurs projets en tant que programmeur dont deux projets principaux que l'on développe en équipe d'envrion 10 personnes sur une durée de 6 mois." +
          "Nous avons ensuite eu l'opportunité de présenter ces jeux au grand public à l'occasion du Festival International du Jeu à Cannes."
    },
    {
      title: "Licens Professionnelle Médias Interactifs et Applications Mixtes Immersives (MIAMI)",
      location: "Tarbes, France",
      timePeriod: "Septembre 2022 - Août 2023",
      description: "Licence Professionnelle spécialisée en Réalité Virtuelle mais avec plusieurs projets axés sur le jeu vidéo avec notamment les moteur Unity et Unreal. Lors de cette licence, j'ai eu l'opportunité de présenter mon projet <a href='https://atoxm.itch.io/dynasty' target='_blank'><em>Dynasty</em></a> au Laval Virtual."
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
                  <div dangerouslySetInnerHTML={{ __html: school.description }}></div>
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
      title: "La Bergère de Nuages",
      description:
        "Un jeu en point & click et projet étudiant à l'ambition narrative forte et à l'ambiance cosy. Sur ce projet fait avec <b>Unity</b>, j'ai endossé le rôle de <b>Lead Programmer</b> et participer au développement de tous les aspects du jeu à l'aide du <b>C#</b>.",
      link: "https://rukoy.itch.io/la-bergre-de-nuages",
      type: "School Project",
      icon: "material-symbols:cloud-outline",
    },
    {
      title: "Terra Memoria",
      description:
          "Une pénurie de cristaux magiques et le réveil soudain de robots très anciens poussent six nouveaux amis dans une enquête rocambolesque à travers Terra, un monde fantasque et cozy alliant 3D et pixel art. Projet sur lequel j'ai eu l'opportunité de travailler lors de mon <b>alternance chez La Moutarde</b>. J'ai principalement participé à la <b>programmation UI</b>, à la <b>création de VFX</b> ainsi qu'avoir eu la chance de toucher rapidement au <b>portage console</b>",
      link: "https://store.steampowered.com/app/1912750/Terra_Memoria/",
      type: "Work Project",
      icon: "game-icons:crystal-growth",
    },
    {
      title: "Cosmostasia",
      description:
        "Formez votre équipe parmi les meilleurs combattants, combinez leurs cartes et capacités pour former votre deck, et décrochez la victoire. Sur ce projet fait sur <b>Godot</b>, j'ai participé à la <b>programmation UI</b> avec <b>GDScript</b> et à l'<b>UX Design</b>.",
      link: "https://cosmostasia.itch.io/cosmostasia",
      type: "School Project",
      icon: "tabler:play-card-k",
    },
    {
      title: "Vampire Slumber",
      description:
          "Aidez notre vampire très fatigué à retourner dans son cercueil pour une sieste bien méritée, mais évitez les lumières ! Ce jeu est le résultat de la Spooky Jam 2023 qui a duré 48h. Le jeu à été réalisé sur <b>Unity</b> en <b>C#</b> et j'ai participé à la réalisation de la mécanique principale.",
      link: "https://rukoy.itch.io/vampire-slumber",
      type: "Game Jam",
      icon: "game-icons:vampire-cape",
    },
    {
      title: "Dungeon Caretaker",
      description:
          "Glissez vous dans les coulisses et occupez-vous de votre donjon, réparez tous vos petits squelettes, réarmez vos pièges et réapprovisionnez vos coffres à butin pour être le donjon numéro 1 ! Ce jeu est le résultat de la GMTK Jam 2023 et a été réalisé en environ 48h. Ce projet réalisé sur <b>Unity</b> en <b>C#</b>, j'ai participé à la <b>programmation, principalement UI</b>.",
      link: "https://0ur0boss.itch.io/dungeon-caretaker",
      type: "Game Jam",
      icon: "fa6-solid:dungeon",
    },
    {
      title: "Simerva Project",
      description:
          "Le projet Simerva est un simulateur de marche à la troisième personne où le personnage principal se trouve dans une base spatiale située sur une planète inhospitalière. Ce projet réalisé en cours en quelque jours fût ma première expérience concrète sur <b>Unreal Engine 5</b>. J'ai participé à la création des déplacements du personnage en <b>Blueprint</b> ainsi qu'à la <b>création et programmation de l'UI</b>.",
      link: "https://najouille.itch.io/simerva-project",
      type: "School Project",
      icon: "material-symbols:planet-outline",
    },
    {
      title: "Seed Rails",
      description:
          "Seed Rails est un prototype réalisé en 48h à l'occasion de la Global Game Jam 2023 dont le thème était 'Roots'. Sur ce projet j'ai participé à la <b>création et programmation de l'UI</b>.",
      link: "https://0ur0boss.itch.io/seedrails",
      type: "Game Jam",
      icon: "game-icons:plant-roots",
    },
    {
      title: "Dynasty",
      description:
          "Plongez au cœur de l'arène dans un univers féodal japonais et affrontez une IA dans une bataille sanglante mêlant tower defense et stratégie de jeu de cartes dans Dynasty. Sur ce projet de cours réalisé sur <b>Unity</b> en <b>C#</b>, l'objectif était de recréer un jeu d'arcade connu mais en Réalité Virtuelle. J'ai participé à la programmation gameplay et UI du jeu. Mon groupe et moi avons eu la chance de présenter ce projet au Laval Virtual, plus grand salon de réalité virtuelle d'Europe.",
      link: "https://atoxm.itch.io/dynasty",
      type: "School Project",
      icon: "fluent-emoji-high-contrast:japanese-castle",
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
              <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                Lien du Projet
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
