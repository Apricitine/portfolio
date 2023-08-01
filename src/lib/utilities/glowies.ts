/**
 * Used to create the glowy effect. Credit goes to hyperplexed for the base code.
 * @param elementQuery The selector that should used to find the victim.
 */
export default function glowies(elementQuery: string): void {
  const blob = document.getElementById(elementQuery);

  window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  }
}
