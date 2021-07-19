import audio from "../public/sound/hover.mp3";

export default function PlaySound() {

  const ad = new Audio(audio);
  ad.play();
  
}
