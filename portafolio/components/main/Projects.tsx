import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Recent projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          href="https://github.com/EncantadoraDeCodigo/Technical-tests-and-projects/tree/main/JumpSeat"
          src="/jumpseat.png"
          title="Business website JumpSeat"
          description="Business website made in WordPress using the PHP language"
          techIcons={["/php.png", "/wor.png", "/admin.png"]}
        />
        <ProjectCard
          href="https://github.com/EncantadoraDeCodigo/Technical-tests-and-projects/tree/main/PlexoE-commerce/Plexo-Ecommerce"
          src="/plexo.jpg"
          title="Plexo E-commerce"
          description="E-commerce with payment gateway, frontend and backend in React."
          techIcons={["/sql.png", "/React.webp"]}
        />
        <ProjectCard
          href="https://github.com/EncantadoraDeCodigo/Technical-tests-and-projects/tree/main/PaymentIntegration/ecomprj"
          src="/fruitables.png"
          title="Fruitables E-commerce"
          description="E-commerce with CRUD and payment integration in Paypal and PayU, using Django and Python."
          techIcons={["/python.png"]}
        />
      </div>
    </div>
  );
};

export default Projects;
