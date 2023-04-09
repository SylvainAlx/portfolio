import { useEffect, useState } from "react";
import { rooms } from "../utils/rooms";
import "../assets/scss/Home.scss";

const Home = () => {
  return (
    <main className="home">
      {rooms.map((room, i) => {
        return (
          <div key={i} className={`room ${room.className}`}>
            <h3>{room.title}</h3>
            <div className="sections">
              <section>
                <h4>{room.section_1}</h4>
                <div className="list">
                  {room.section_1_text !== undefined &&
                    room.section_1_text.map((e, i) => {
                      return <p key={i}>{e}</p>;
                    })}
                </div>
              </section>
              {room.section_2 !== undefined && (
                <section>
                  <h4>{room.section_2}</h4>
                  <div className="list">
                    {room.section_2_text !== undefined &&
                      room.section_2_text.map((e, i) => {
                        return <p key={i}>{e}</p>;
                      })}
                  </div>
                </section>
              )}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
