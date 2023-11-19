import { LiveClock } from "../../components/LiveClock/LiveClock";
import { Presentation } from "../../components/Presentation/Presentation";
import { AnimatedClock } from "../../components/AnimatedClock/AnimatedClock";
import { BackButton } from "../../components/BackButton/BackButton";

export const Clock = () => {
  return (
    <div className="container">
      <AnimatedClock>
        <LiveClock />
      </AnimatedClock>

      <Presentation
        title="Animated"
        titleColor="Digital Clock"
        titleItalic="in Real Time"
        text="This dynamic timepiece not only tells you the current time but does so with a touch of creativity."
      >
        <BackButton />
      </Presentation>
    </div>
  );
};
