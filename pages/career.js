import BulletPoint from "components/BulletPoint";
import CareerCard from "components/CareerCard";
import TitleWithBar from "components/TitleWithBar";
import Layout from "layouts/Layout";
import React from "react";

// const jobs = [{ jobTitle: "", position: "", salary: "" }];

const ApplyButton = ({ link }) => {
  return (
    <a
      href={link}
      className="fs-16px block bg-purple-dark text-white w-fit rounded-md py-2 px-14 font-medium uppercase"
    >
      Apply
    </a>
  );
};

function Career() {
  return (
    <Layout className="bg-page" navbarClassName="mb-20 lg:mb-16">
      <div className="mb-10 lg:mb-20">
        <TitleWithBar title="CAREERS" subtitle="START YOUR CAREER WITH US" />
      </div>

      <div className="mb-20 md:mb-100px lg:mb-150px">
        <div className="container-2">
          <div className="space-y-6 max-w-[44rem] mx-auto">
            <CareerCard
              jobTitle=".NET Developer"
              position="Full-time, Remote"
              salary="$75,000.00-$125,000.00 per year"
            >
              <div className="space-y-6">
                <p className="fs-16px font-medium">
                  Utherverse Digital, Inc. is a software development company
                  whose main focus is Virtual Worlds - places where people can
                  come together from all over the world to meet, play, learn,
                  and build their own communities without having to leave their
                  own home. Our small, international team has worked hard to
                  create a big worldwide community of people from all walks of
                  life. We’ve done well despite the pandemic and are looking
                  forward to more growth as we launch our next range of
                  products.
                </p>
                <p className="fs-16px font-medium">
                  We are currently looking for a .NET Developer with a degree in
                  computer sciences or relevant work experience to help with
                  develop and strategically coordinate development of our
                  metaverse.
                </p>
                <p className="fs-16px font-medium">
                  We are working on a very high-profile platform backed by very
                  large industry partners. This platform is already deployed in
                  limited availability. Base functions and services are
                  operational, new team members are to now assist and lead in
                  adding advanced functionality. Project is supported by a large
                  and experienced team of industry leading experience in virtual
                  world and metaverse development.
                </p>
                <div>
                  <h4 className="fs-24px font-medium mb-4">Responsibilities</h4>

                  <div className="space-y-2">
                    <BulletPoint title="NET Development" />
                    <BulletPoint title="Fullstack development" />
                    <BulletPoint title=".NET Mobile applications development" />
                    <BulletPoint title=".NET Desktop applications development" />
                    <BulletPoint title="Design" />
                    <BulletPoint title="Application development in Windows, Mac, and Linux (cross-platforming" />
                    <BulletPoint title="Function requirements" />
                    <BulletPoint title="Als Application .NET Developer you will be busy mostly on a frontend as well as tasks on the backend, you should have experience in the following:" />
                    <BulletPoint title="Additional experience with the following aspects is a plus:" />
                    <BulletPoint title="C#, .Net Core, as well as understanding of node.js Entity Framework Core" />
                    <BulletPoint title="Able to work in a global scrum teamDocker / Kubernetes" />
                    <BulletPoint title="Working within a debian server environment" />
                    <BulletPoint title="Understanding of postgreSQL and scylla databasesCreation of middleware solutions." />
                    <BulletPoint title="Affinity in GamingPython" />
                    <BulletPoint title="Building applications that can update and install other applications." />
                    <BulletPoint title="Understanding in scalability of large systems and many users." />
                  </div>
                </div>
                <p className="fs-16px font-medium">
                  This position is for 40 hours per week and is remote Our
                  company develops virtual worlds for many different types of
                  clients including some that are adult in nature, so applicants
                  must be comfortable working around adult content and be of
                  legal age to do so.
                </p>
              </div>

              <div className="mt-8">
                <ApplyButton link="mailto:hr@utherverse.com,zak@utherverse.com?subject=.NET Developer" />
              </div>
            </CareerCard>
            <CareerCard
              jobTitle="Senior UI/UX Designer"
              position="Full-time Remote"
              salary="$75,000.00-$100,000.00 per year"
            >
              <div className="space-y-6">
                <p className="fs-16px font-medium">
                  Utherverse Digital, Inc. is a software development company
                  whose main focus is Virtual Worlds - places where people can
                  come together from all over the world to meet, play, learn,
                  and build their own communities without having to leave their
                  own home. Our small, international team has worked hard to
                  create a big worldwide community of people from all walks of
                  life. We’ve done well despite the pandemic and are looking
                  forward to more growth as we launch our next range of
                  products.
                </p>
                <p className="fs-16px font-medium">
                  We are currently looking for a UI/UX Design Expert with a
                  degree in graphic design or relevant work experience to help
                  with develop and design of our metaverse
                </p>
                <p className="fs-16px font-medium">
                  We are working on a very high-profile platform backed by very
                  large industry partners. This platform is already deployed in
                  limited availability. Base functions and services are
                  operational, new team members are to now assist and lead in
                  adding advanced functionality. Project is supported by a large
                  and experienced team of industry leading experience in virtual
                  world and metaverse development.
                </p>
                <p className="fs-16px font-medium">
                  If you like working in companies with a start-up atmosphere
                  you will love working with us. We are not a start-up, per se,
                  but our culture is, in spirit.
                </p>
                <p className="fs-16px font-medium">
                  Our ideal candidate loves video games and new technologies and
                  is constantly learning about the latest techniques and trends
                  in digital design. We’d love to find someone who enjoys
                  collaborating with a team to create something fun and easy to
                  use for others to enjoy.
                </p>
                <div>
                  <h4 className="fs-24px font-medium mb-4">Responsibilities</h4>

                  <div className="space-y-2">
                    <BulletPoint title="Understand user perspectives and what makes an interactive experience enjoyable" />
                    <BulletPoint title="Considering the human-computer interface element of a design" />
                    <BulletPoint title="Have an appreciation of good aesthetics, visual consistency and simplicity" />
                    <BulletPoint title="Enjoy finding the perfect blend of cutting-edge design and ease of use" />
                    <BulletPoint title="Have a few years of UX/UI design experience in video games or virtual worlds" />
                    <BulletPoint title="Keeping current with industry trends and competitor products, and communicating design prototypes and ideas to developers" />
                    <BulletPoint title="Take pride in presenting high quality work that reflects the company’s business goals" />
                    <BulletPoint title="Are proficient in the technical aspects of GUI development and understand UI animation" />
                    <BulletPoint title="Creating user flows, wireframes, prototypes and mockups" />
                    <BulletPoint title="Identifying and troubleshooting UX problems (e.g. responsiveness)" />
                    <BulletPoint title="Ability to create icons, emojis and emotes that can be used in our metaverse and similar projects" />
                    <BulletPoint title="Can listen to and apply constructive feedback to your work" />
                  </div>
                </div>
                <p className="fs-16px font-medium">
                  Send us a resume and portfolio that shows off your awesome
                  design and UX problem solving skills! Include in your cover
                  letter why you think {"you'd"} be a great fit for this
                  company.
                </p>
                <p className="fs-16px font-medium">
                  As this job relates directly to game design, particularly as
                  it pertains to virtual worlds, any experience in these areas
                  is a great asset. We are currently looking for designers with
                  experience with PC, Mac, mobile and VR.
                </p>
                <p className="fs-16px font-medium">
                  Our company develops virtual worlds for many different types
                  of clients including some that are adult in nature, so
                  applicants must be comfortable working around adult content
                  and be of legal age to do so.
                </p>
              </div>

              <div className="mt-8">
                <ApplyButton link="mailto:hr@utherverse.com,zak@utherverse.com?subject=Senior UI/UX Designer" />
              </div>
            </CareerCard>
            <CareerCard
              jobTitle="Lead Animator"
              position="Full-time Remote"
              salary="$75,000.00-$115,000.00 per year"
            >
              <div className="space-y-6">
                <p className="fs-16px font-medium">
                  Utherverse Digital, Inc. is a software development company
                  whose main focus is Virtual Worlds - places where people can
                  come together from all over the world to meet, play, learn,
                  and build their own communities without having to leave their
                  own home. Our small, international team has worked hard to
                  create a big worldwide community of people from all walks of
                  life. We’ve done well despite the pandemic and are looking
                  forward to more growth as we launch our next range of
                  products.
                </p>
                <p className="fs-16px font-medium">
                  We are currently looking for a Lead Animator with 3-5 years
                  experience using MotionBuilder and 3DS Max or relevant work
                  experience to help with development of our metaverse.
                </p>
                <p className="fs-16px font-medium">
                  We are working on a very high-profile platform backed by very
                  large industry partners. This platform is already deployed in
                  limited availability. Base functions and services are
                  operational, new team members are to now assist and lead in
                  adding advanced functionality. Project is supported by a large
                  and experienced team of industry leading experience in virtual
                  world and metaverse development.
                </p>
                <p className="fs-16px font-medium">
                  If you like working in companies with a start-up atmosphere
                  you will love working with us. We are not a start-up, per se,
                  but our culture is, in spirit.
                </p>
                <p className="fs-16px font-medium">
                  Our ideal candidate will produce smooth and stylized
                  animations for a wide variety of characters We’d love to find
                  someone who enjoys collaborating with a team to create
                  something fun and easy to use for others to enjoy.
                </p>
                <div>
                  <h4 className="fs-24px font-medium mb-4">Responsibilities</h4>

                  <div className="space-y-2">
                    <BulletPoint title="Work together with other animators and artists to develop the motion for game characters" />
                    <BulletPoint title="Improve the fidelity of existing animation & determine technical feasibility of advanced animation techniques" />
                    <BulletPoint title="Utilize 3D models to produce animated movements based on game spec" />
                    <BulletPoint title="Quickly create and iterate on prototypes showcasing new designs and concepts" />
                    <BulletPoint title="Design, build, and maintain efficient animation rigs and final movements" />
                    <BulletPoint title="Ensure the best performance, quality, and detail of animations" />
                    <BulletPoint title="Work with our team to plan and create best practices for developing animated models" />
                  </div>
                </div>
                <p className="fs-16px font-medium">
                  Send us a resume and portfolio that shows off your awesome
                  skills and abilities Include in your cover letter why you
                  think {"you'd"} be a great fit for this company.
                </p>
                <p className="fs-16px font-medium">
                  Our company develops virtual worlds for many different types
                  of clients including some that are adult in nature, so
                  applicants must be comfortable working around adult content
                  and be of legal age to do so.
                </p>
              </div>

              <div className="mt-8">
                <ApplyButton link="mailto:hr@utherverse.com,zak@utherverse.com?subject=Lead Animator" />
              </div>
            </CareerCard>
            <CareerCard
              jobTitle="Technical Artist"
              position="Full-time Remote"
              salary="$75,000-$115,000 per year"
            >
              <div className="space-y-6">
                <p className="fs-16px font-medium">
                  Utherverse Digital, Inc. is a software development company
                  whose main focus is Virtual Worlds - places where people can
                  come together from all over the world to meet, play, learn,
                  and build their own communities without having to leave their
                  own home. Our small, international team has worked hard to
                  create a big worldwide community of people from all walks of
                  life. We’ve done well despite the pandemic and are looking
                  forward to more growth as we launch our next range of
                  products.
                </p>
                <p className="fs-16px font-medium">
                  We are currently looking for a Technical Artist with a degree
                  in design/programming or relevant work experience to help with
                  develop and strategically coordinate development of our
                  metaverse.
                </p>
                <p className="fs-16px font-medium">
                  We are working on a very high-profile platform backed by very
                  large industry partners. This platform is already deployed in
                  limited availability. Base functions and services are
                  operational, new team members are to now assist and lead in
                  adding advanced functionality. Project is supported by a large
                  and experienced team of industry leading experience in virtual
                  world and metaverse development.
                </p>
                <p className="fs-16px font-medium">
                  If you like working in companies with a start-up atmosphere
                  you will love working with us. We are not a start-up, per se,
                  but our culture is, in spirit.
                </p>
                <p className="fs-16px font-medium">
                  Our ideal candidate will work with the programmers and art
                  team to create the structure of the art in Unity on many
                  different sides of the game development. We’d love to find
                  someone who enjoys collaborating with a team to create
                  something fun and easy to use for others to enjoy.
                </p>
                <div>
                  <h4 className="fs-24px font-medium mb-4">Qualification</h4>

                  <div className="space-y-2">
                    <BulletPoint title="Minimum 2-year experience in Leading Technical Art teams in video games" />
                    <BulletPoint title="4 years as a Technical Artist role" />
                    <BulletPoint title="Solid programming skills in Unity C# and Python" />
                    <BulletPoint title="Solid knowledge of procedural systems and tools (Unity, 3ds Max, MotionBuilder)" />
                    <BulletPoint title="Solid portfolio demonstrates your technical art skills" />
                    <BulletPoint title="Excellent knowledge on the game art pipeline" />
                    <BulletPoint title="Solid experience on Unity Engine" />
                    <BulletPoint title="Ability to communicate effectively with both technical and non-technical parties" />
                    <BulletPoint title="Training and tutoring skills are a plus" />
                    <BulletPoint title="Experience in a full game art creation pipeline (characters, animation, environments, vfx and sound)" />
                    <BulletPoint title="Knowledge in the following tech-art areas: Materials / Shading, Scripting, Lighting, Rendering, VFX, Rigging and animation, simulation systems" />
                    <BulletPoint title="Good artistic vision" />
                    <BulletPoint title="Ability to create technical documentations" />
                    <BulletPoint title="Fluency in English" />
                  </div>
                </div>
                <div>
                  <h4 className="fs-24px font-medium mb-4">Responsibilities</h4>

                  <div className="space-y-2">
                    <BulletPoint title="Work together with other leads and directors to develop the overall technical vision, improve the quality & determine and set technical feasibility" />
                    <BulletPoint title="Create and assess custom tools to support art pipeline while maintaining aesthetic quality and technical performance standards" />
                    <BulletPoint title="Help other departments to set and improve different art pipelines like characters, environments, vfx and sound" />
                    <BulletPoint title="Mentor and support the art team" />
                    <BulletPoint title="Plan, organize and prioritize tasks with the Producer" />
                    <BulletPoint title="Help with recruitment for new tech art team members" />
                    <BulletPoint title="Identify problems and find engine-efficient solutions, set technical needs of the project and maintain the high-quality standards" />
                    <BulletPoint title="Keep up to date on new workflows, technologies and systems" />
                  </div>
                </div>
                <p className="fs-16px font-medium">
                  Send us a resume and portfolio that shows off your awesome
                  skills and abilities Include in your cover letter why you
                  think {"you'd"} be a great fit for this company.
                </p>
                <p className="fs-16px font-medium">
                  As this job relates directly to game design, particularly as
                  it pertains to virtual worlds, any experience in these areas
                  is a great asset.
                </p>
                <p className="fs-16px font-medium">
                  Our company develops virtual worlds for many different types
                  of clients including some that are adult in nature, so
                  applicants must be comfortable working around adult content
                  and be of legal age to do so.
                </p>
              </div>

              <div className="mt-8">
                <ApplyButton link="mailto:hr@utherverse.com,zak@utherverse.com?subject=Technical Artist" />
              </div>
            </CareerCard>
            <CareerCard
              jobTitle="Senior Unity Developer"
              position="Full-time Remote"
              salary="$80,000.00-$130,000.00 per year"
            >
              <div className="space-y-6">
                <p className="fs-16px font-medium">
                  Utherverse Digital, Inc. is a software development company
                  whose main focus is Virtual Worlds - places where people can
                  come together from all over the world to meet, play, learn,
                  and build their own communities without having to leave their
                  own home. Our small, international team has worked hard to
                  create a big worldwide community of people from all walks of
                  life. We’ve done well despite the pandemic and are looking
                  forward to more growth as we launch our next range of
                  products.
                </p>
                <p className="fs-16px font-medium">
                  We are currently looking for a Senior Unity Developer with a
                  degree in computer sciences or relevant work experience to
                  help with develop and strategically coordinate development of
                  our metaverse
                </p>
                <p className="fs-16px font-medium">
                  We are working on a very high-profile platform backed by very
                  large industry partners. This platform is already deployed in
                  limited availability. Base functions and services are
                  operational, new team members are to now assist and lead in
                  adding advanced functionality. Project is supported by a large
                  and experienced team of industry leading experience in virtual
                  world and metaverse development.
                </p>

                <div>
                  <h4 className="fs-24px font-medium mb-4">Qualification</h4>

                  <div className="space-y-2">
                    <BulletPoint title="4 yrs of experience with Unity3D Game Development - - Required" />
                    <BulletPoint title="4 yrs of experience working with C# code - Required" />
                    <BulletPoint title="Strong analytical and problem-solving skills" />
                    <BulletPoint title="Willingness to learn new technologies" />
                    <BulletPoint title="Adaptable, flexible, and able to meet deadlines in a fast-paced environment" />
                    <BulletPoint title="Reliable, responsible, and motivated" />
                    <BulletPoint title="Ability to prioritize and multi-task" />
                    <BulletPoint title="Excellent verbal and written communication skills" />
                  </div>
                </div>

                <div>
                  <h4 className="fs-24px font-medium mb-4">Responsibilities</h4>

                  <div className="space-y-2">
                    <BulletPoint title="Cross-platform development experience, Desktop, Mac, Mobile and VR" />
                    <BulletPoint title="Multiplayer game experience. Fishnet Networking experience a bonus." />
                    <BulletPoint title="Shipped one or more games with Unity." />
                    <BulletPoint title="Basic understanding of a production cycle and ability to evaluate issues' severity." />
                    <BulletPoint title="Prototype, design, and implement new features in Unity and our Metaverse code bases" />
                    <BulletPoint title="Work independently and within a team contributing over the Unity codebase" />
                    <BulletPoint title="Autonomous and proactive." />
                    <BulletPoint title="Game design experience including designing levels/environments, user interactions, and enjoyable game mechanics" />
                  </div>
                </div>

                <p className="fs-16px font-medium">
                  This position is for 40 hours per week and is remoteOur
                  company develops virtual worlds for many different types of
                  clients including some that are adult in nature, so applicants
                  must be comfortable working around adult content and be of
                  legal age to do so.
                </p>
              </div>

              <div className="mt-8">
                <ApplyButton link="mailto:hr@utherverse.com,zak@utherverse.com?subject=Senior Unity Developer" />
              </div>
            </CareerCard>
            <CareerCard
              jobTitle="Systems Administrator"
              position="Full-time, Hybrid"
              salary="$80,000.00-$110,000.00 per year"
            >
              <div className="space-y-6">
                <p className="fs-16px font-medium">
                  Utherverse Digital, Inc. is a software development company
                  whose main focus is Virtual Worlds - places where people can
                  come together from all over the world to meet, play, learn,
                  and build their own communities without having to leave their
                  own home. Our small, international team has worked hard to
                  create a big worldwide community of people from all walks of
                  life. We’ve done well despite the pandemic and are looking
                  forward to more growth as we launch our next range of
                  products.
                </p>
                <p className="fs-16px font-medium">
                  We are currently looking for a technically knowledgeable
                  assistant with a degree in computer sciences or relevant work
                  experience to help with a network move and systems transition.
                </p>
                <p className="fs-16px font-medium">
                  We are in the process of upgrading and converting some of our
                  internal systems from Windows technologies to their Linux
                  based equivalents. At the same time, we are also bringing up a
                  new datacenter and migrating various systems over. This
                  position will be to assist with the migration, setup and
                  documentation pertaining to the move as well as maintaining
                  the existing network.
                </p>

                <div>
                  <h4 className="fs-24px font-medium mb-4">Qualification</h4>

                  <div className="space-y-2">
                    <BulletPoint title="3-4 yrs of experience with Ansible automation - Required" />
                    <BulletPoint title="Ability to create and maintain scripts in Python, Bash or other scripting languages - Required" />
                    <BulletPoint title="Minimum 2-3 yrs experience supporting and maintaining both Windows and Linux (Debian Based) servers - Required" />
                    <BulletPoint title="Knowledge of various virtualization technologies such as VMware, Proxmox, etc. - Required" />
                    <BulletPoint title="Understanding of and the ability to manage virtual networks and provide security to the same - Required" />
                    <BulletPoint title="Experience working with relational & NoSQL databases including MySQL, PostgreSQL, MS SQL Server, and MongoDB - Asset" />
                    <BulletPoint title="Understanding of Windows Technologies (Active Directory, Office 365, Teams, Azure) - Asset" />
                    <BulletPoint title="Understanding of Linux Web Technologies (Nginx, Apache, NodeJS, HAProxy, Varnish) - Asset" />
                    <BulletPoint title="Understanding of creating and integrating public cloud environments such as AWS, Azure, OVH, etc. - Asset" />
                    <BulletPoint title="Strong analytical and problem-solving skills" />
                    <BulletPoint title="Willingness to learn new technologies" />
                    <BulletPoint title="Adaptable, flexible, and able to meet deadlines in a fast-paced environment" />
                    <BulletPoint title="Reliable, responsible, and motivated" />
                    <BulletPoint title="Ability to prioritize and multi-task" />
                    <BulletPoint title="Excellent verbal and written communication skills" />
                  </div>
                </div>

                <div>
                  <h4 className="fs-24px font-medium mb-4">Responsibilities</h4>

                  <div className="space-y-2">
                    <BulletPoint title="Assist with the planning and the deployment of various new software systems to replace current aging systems" />
                    <BulletPoint title="Assist with the conversion of Windows based systems & tools to Linux equivalents" />
                    <BulletPoint title="Script the deployment process with Ansible" />
                    <BulletPoint title="Monitor and maintain existing server infrastructure & systems" />
                    <BulletPoint title="Organize, schedule, and plan the above under deadlines" />
                    <BulletPoint title="Assist with day-to-day employee related tasks (Adding new users, emails, etc.)" />
                    <BulletPoint title="Documentation" />
                  </div>
                </div>

                <p className="fs-16px font-medium">
                  This position is for 40 hours per week and training is likely
                  to be in-office initially, however it can transition to remote
                  or partially remote once the initial training and procedural
                  hurdles are tackled. You must be legally entitled to work in
                  Canada indefinitely to be hired for this position.
                </p>
                <p className="fs-16px font-medium">
                  Our company develops virtual worlds for many different types
                  of clients including some that are adult in nature, so
                  applicants must be comfortable working around adult content
                  and be of legal age to do so.
                </p>
              </div>

              <div className="mt-8">
                <ApplyButton link="mailto:hr@utherverse.com,zak@utherverse.com?subject=Systems Administrator" />
              </div>
            </CareerCard>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Career;
