import React from "react";

import { ButtonAccessToProject } from "../../components/ButtonAccessToProject/ButtonAccessToProject";
import {
  SunIcon,
  ListBulletIcon,
  LapTimerIcon,
  CheckIcon,
  ValueIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { Presentation } from "../../components/Presentation/Presentation";

export const Home = () => {
  return (
    <div className="container">
      <Presentation
        title="Discover"
        titleColor="Some Features"
        titleItalic="for your website"
        text="Explore here a few small demonstration projects to showcase what I can
        create for you and your upcoming app."
      />
      <div>
        <h2>Select a project :</h2>
        <nav style={{ display: "grid" }}>
          <ul>
            <ButtonAccessToProject
              icon={<ListBulletIcon width="24px" height="24px" />}
              text="Todo List"
              link="/todo_list"
            />
            <ButtonAccessToProject
              icon={<LapTimerIcon width="24px" height="24px" />}
              text="Digital Clock"
              link="/clock"
            />
            <ButtonAccessToProject
              icon={<CheckIcon width="24px" height="24px" />}
              text="Quiz Game"
              link="/quiz"
            />
            <ButtonAccessToProject
              icon={
                <>
                  <ValueIcon width="24px" height="24px" />
                  <Cross1Icon width="24px" height="24px" />
                </>
              }
              text="Tic Tac Toe"
              link="/tictactoe"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};
