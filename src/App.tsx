import { ThemeToggle } from "./components/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";

import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import { Badge } from "./components/ui/badge";

function App() {
  const languages = ["C#", "JavaScript", "Dart"];
  const architectures = [
    "MVC",
    "MVVM",
    "DDD",
    "Clean Architecture",
    "Mediator",
  ];
  const frontEndSkills = [
    "React",
    "Next",
    "Angular 2+",
    "ASP.NET Core",
    "TypeScript",
    "JQuery",
    "HTML",
    "CSS",
  ];
  const backEndSkills = [
    ".NET Core",
    "Node",
    "Entity Framework",
    "Aspire",
    "SQL",
    "PostgreSQL",
  ];
  const mobileSkills = ["React Native", "Flutter", "Xamarin", "Maui"];
  const otherSkills = [
    "Docker",
    "Kubernetes",
    "Azure Devops",
    "Git",
    "RabbitMQ",
    "Redis",
    "Expo",
  ];

  return (
    <main className="h-lvh max-w-[1440px] m-auto">
      <div className="absolute md:top-5 md:right-6 top-4 right-12">
        <ThemeToggle />
      </div>

      <div className="flex flex-col md:flex-row md:items-start items-center ">
        <div className="flex flex-col md:items-center h-full mx-4 ">
          <div className="flex flex-col p-4 mt-4 justify-center items-center border-black-700 border-2 md:w-[300px] w-[330px]">
            <Avatar className={`w-[250px] h-[250px]`}>
              <AvatarImage src="https://avatars.githubusercontent.com/u/5588353?v=4" />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="flex flex-col p-4 w-[300px] md:justify-start justify-center md:items-start items-center text-pretty">
              <p className="font-medium text-xl">Fábio Maiorano</p>
              <p className="font-light text-md">Software Engineer </p>
              <p className="text-sm mt-3">
                I am a full-stack developer with a passion for building products
                that solve real-world problems.
              </p>
            </div>
            <Separator />
            <div className="flex flex-col justify-start items-start w-full mt-2">
              <button
                className="flex flex-row cursor-pointer py-2 w-full"
                onClick={() => window.open("https://github.com/fsmaiorano")}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-6 h-6 dark:invert filter-none"
                />
                <p className="ml-2">fsmaiorano</p>
              </button>
              <button
                className="flex flex-row cursor-pointer py-2 w-full"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/fsmaiorano/")
                }
              >
                <img src={linkedin} alt="linkedin" className="w-6 h-6 dark:invert" />
                <p className="ml-2">fsmaiorano</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col p-4 mt-4 justify-center items-start border-black-700 border-2 md:w-[300px] w-[330px]">
            {["Skills"].map((skill) => (
              <>
                <p className="text-md">{skill}</p>
                <Separator className="my-2" />
                <div className="flex flex-wrap">
                  {[
                    ...languages,
                    ...architectures,
                    ...frontEndSkills,
                    ...backEndSkills,
                    ...mobileSkills,
                    ...otherSkills,
                  ].map((badge) => (
                    <Badge
                      variant="outline"
                      className="p-1.5 m-0.5 cursor-default"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col p-4 mt-4 justify-center items-start border-black-700 border-2 md:w-[300px] w-[330px]">
            <p className="text-md">Languages</p>
            <Separator className="my-2" />
            <div className="">
              <p className="font-medium text-md ">Portuguese</p>
              <p className="font-light text-md">
                Native or bilingual proficiency
              </p>
            </div>

            <div className="mt-2">
              <p className="font-medium text-md">English</p>
              <p className="font-light text-md">
                Professional working proficiency
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start md:w-full h-full md:mr-4 w-[80%] ">
          <div className="flex flex-col p-4 mt-4 justify-center items-start border-black-700 border-2 w-full">
            <p className="text-md">About me</p>
            <Separator className="my-4" />
            <div className="text-sm">
              <p>
                I'm a software engineer with a strong background in full-stack
                development, primarily focused on building mobile hybrid
                applications. My experience spans mobile, front-end, and
                back-end platforms, with an emphasis on designing scalable and
                maintainable architectures that align with both technical and
                business needs.
              </p>
              <p className="mt-2">
                I enjoy tackling complex challenges, whether it's optimizing
                systems, improving workflows, or collaborating with teams to
                deliver high-quality results. I have primarily worked on mobile
                solutions that integrate seamlessly with diverse systems,
                bridging the gap between user experience and technical
                complexity. Mentoring and guiding other developers is something
                I value deeply, as it fosters growth and strengthens team
                collaboration.
              </p>
            </div>
          </div>

          <div className="flex flex-col p-4 mt-4 justify-center items-start border-black-700 border-2 w-full">
            <p className="text-md">Featured Projects</p>
            <Separator className="my-4" />
            <p className="text-sm">
              I am a full-stack developer with a passion for building products
              that solve real-world problems. I have experience in building
              applications using different technologies and architectures. I am
              always looking for new challenges and opportunities to learn and
              grow.
            </p>
          </div>

          <div className="flex flex-col p-4 mt-4 justify-center items-start border-black-700 border-2 w-full">
            <div>
              <p className="text-md font-normal">Senior Software Engineer</p>
              <p className="text-sm font-light">Armis Group</p>
              <p className="text-xs font-light">Mar 2021 - Present</p>
              <ul className="mt-2 text-sm text-pretty">
                <li className="mt-1 text-md">
                  • Designed and implemented full-stack solutions across mobile,
                  front-end, and back-end platforms.
                </li>
                <li className="mt-1 text-md">
                  • Provided guidance on architectural design and technical
                  solutions.
                </li>
                <li className="mt-1 text-md">
                  • Led and managed small teams, fostering collaboration and
                  accountability to meet project deadlines and goals.
                </li>
                <li className="mt-1 text-md">
                  • Mentored junior programmers, offering technical and career
                  development support to improve their skills, introducing best
                  practices that elevated the team's technical expertise and
                  performance.
                </li>
                <li className="mt-1 text-md">
                  • Collaborated with stakeholders to gather and analyze
                  requirements, translating them into actionable plans for new
                  projects.
                </li>
                <li className="mt-1 text-md">
                  • Created comprehensive documentation and technical drawings
                  to streamline communication and development processes.
                </li>
                <li className="mt-1 text-md">
                  • Conducted research on emerging technologies and developed
                  prototypes to assess feasibility and potential for
                  implementation.
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-md font-normal">Software Engineer</p>
              <p className="text-sm font-light">Armis Group</p>
              <p className="text-xs font-light">Apr 2019 - Mar 2021</p>
              <ul className="mt-2 text-sm text-pretty">
                <li className="mt-1 text-md">
                  • Implemented full-stack solutions across mobile, front-end,
                  and back-end platforms.
                </li>
                <li className="mt-1 text-md">
                  • Diagnosed and solved complex software bugs, contributing to
                  the stability and reliability of application modules.
                </li>
                <li className="mt-1 text-md">
                  • Mentored junior programmers, offering technical support to
                  improve their skills and performance.
                </li>
                <li className="mt-1 text-md">
                  • Created comprehensive documentation and technical drawings
                  to streamline communication and development processes.
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-md font-normal">Software Engineer</p>
              <p className="text-sm font-light">UOL EdTech</p>
              <p className="text-xs font-light">Sep 2017 - Oct 2018</p>
              <ul className="mt-2 text-sm text-pretty">
                <li className="mt-1 text-md">
                  • Implemented full-stack solutions across mobile, front-end,
                  and back-end platforms.
                </li>
                <li className="mt-1 text-md">
                  • Diagnosed and solved complex software bugs, contributing to
                  the stability and reliability of application modules.
                </li>
                <li className="mt-1 text-md">
                  • Created comprehensive documentation and technical drawings
                  to streamline communication and development processes.
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-md font-normal">Software Engineer</p>
              <p className="text-sm font-light">Avanade</p>
              <p className="text-xs font-light">Sep 2016 - Aug 2017</p>
              <ul className="mt-2 text-sm text-pretty">
                <li className="mt-1 text-md">
                  • Implemented full-stack solutions across front-end, and
                  back-end platforms.
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-md font-normal">Software Engineer</p>
              <p className="text-sm font-light">Integral Sistemas</p>
              <p className="text-xs font-light">Apr 2014 - Sep 2016</p>
              <ul className="mt-2 text-sm text-pretty">
                <li className="mt-1 text-md">
                  • Implemented full-stack solutions across front-end, and
                  back-end platforms.
                </li>
                <li className="mt-1 text-md">
                  • Conducted research on emerging technologies and developed
                  prototypes to assess feasibility and potential for
                  implementation.
                </li>
                <li className="mt-1 text-md">
                  • Created comprehensive documentation and technical drawings
                  to streamline communication and development processes.
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-md font-normal">
                Information Technology System Analyst
              </p>
              <p className="text-sm font-light">CQuatro</p>
              <p className="text-xs font-light">Jun 2011 - May 2013</p>
              <ul className="mt-2 text-sm text-pretty">
                <li className="mt-1 text-md">
                  • Analyzed software solutions, ensuring alignment with
                  business needs and technical standards.
                </li>
                <li className="mt-1 text-md">
                  • Conducted requirements gathering sessions with stakeholders,
                  translating business needs into technical specifications and
                  actionable plans.
                </li>
                <li className="mt-1 text-md">
                  • Produced detailed documentation and technical drawings to
                  support system design and implementation.
                </li>
                <li className="mt-1 text-md">
                  • Performed testing and validation of new system features,
                  ensuring functionality and reliability across version updates.
                </li>
                <li className="mt-1 text-md">
                  • Managed Windows Server environments, including user accounts
                  and Group Policy Objects (GPO) configurations, to maintain
                  system security and efficiency.
                </li>
                <li className="mt-1 text-md">
                  • Administered SQL Server databases, including monitoring,
                  troubleshooting, and optimizing database performance to ensure
                  data integrity and availability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
    </main>
  );
}

export default App;
