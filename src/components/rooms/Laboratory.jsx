import RoomHeader from "../RoomHeader";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Laboratory = () => {
  return (
    <div className="room laboratory animated">
      <RoomHeader
        image="/images/laboratory.webp"
        roomName="Laboratoire"
        description="En cours d'apprentissage"
      />
      <section className="technos animated">
        <div className="techno">
          <SiTypescript className="icon" />
          TypeScript
        </div>
        <div className="techno">
          <SiNextdotjs className="icon" />
          Next.js
        </div>
        <div className="techno">
          <SiTailwindcss className="icon" />
          Tailwind
        </div>
      </section>
    </div>
  );
};

export default Laboratory;
