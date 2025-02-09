import { 
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaJava 
} from "react-icons/fa";
import { 
    SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, 
    SiExpress, SiMongodb, SiRedis, SiMysql, SiAppwrite, 
    SiSolidity, SiPython 
} from "react-icons/si";
  
import { IconType } from "react-icons"; // Import type for icons 
  
interface SkillCategory {
    category: string;
    skills: { name: string; icon: IconType }[]; // Store icon type instead of JSX
}
  
  export const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      category: "Other",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "Python", icon: SiPython },
        { name: "Appwrite", icon: SiAppwrite },
        // { name: "AWS", icon: FaAws },
        // { name: "Solidity", icon: SiSolidity },
      ],
    },
  ];
  