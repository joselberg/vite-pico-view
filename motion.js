import { animate, stagger, inView, glide } from "motion";

const cards = document.querySelectorAll("article");

// animate(
//   cards,
//   { y: [50, 0], opacity: [0, 1] },

//   {
//     delay: stagger(0.3),
//     duration: 1,
//     easing: [0.22, 0.03, 0.26, 1],
//   },
// );

inView(cards, ({ target }) => {
  animate(
    target,
    { opacity: ["0", "1"], transform: ["translateX(-100px)", "none"] },
    {
      delay: 1,
      duration: 0.5,
      easing: glide()
    },
  );
});
