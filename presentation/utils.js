import anime from "animejs";

export const createSteppedEasing = (steps) => {
  anime.easings.steppedEasing = function (progress) {
    return Math.round(progress * steps) * (1 / steps);
  };
  return "steppedEasing";
};
