import { animate, stagger, inView, glide } from "motion";

const cards = document.querySelectorAll(".grid");

inView(cards, ({ target }) => {
  animate(
    target.getElementsByTagName("article"),
    { opacity: ["0", "1"], 
      transform: ["translateX(100%)", "none"] 
    },
    {
      delay: stagger(0.1),
      duration: 0.5,
      easing: glide(),
    },
  );
});
