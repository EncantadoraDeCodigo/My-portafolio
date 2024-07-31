// components/sub/ProjectCard.tsx
import Image from "next/image";
import React from "react";

interface Props {
  href: string;
  src: string;
  title: string;
  description: string;
  techIcons: string[];
}

const ProjectCard: React.FC<Props> = ({ href, src, title, description, techIcons = [] }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] no-underline"
      style={{ zIndex: 10 }}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-4 flex space-x-2">
          {techIcons.map((icon, index) => (
            <img key={index} src={icon} alt={`Icon ${index}`} className="w-6 h-6" />
          ))}
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;






