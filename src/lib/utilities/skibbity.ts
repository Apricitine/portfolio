/**
 * Used to create the skibbity effect. Credit goes to hyperplexed for the base code.
 * @param elementQuery The selector that should used to find the victim.
 * @param letterSet The set of characters that will be applied to create the effect.
 * @param skibbitySpeed Optional. Default value is 25. Determines the skibbity speed.
 */
export default function skibbity(elementQuery: string, letterSet: string, skibbitySpeed: number = 25): void {
  let interval: number;

  document.querySelector(elementQuery).onmouseover = (event: MouseEvent) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter: any, index: number) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letterSet[Math.floor(Math.random() * letterSet.length)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, skibbitySpeed);
  };
}