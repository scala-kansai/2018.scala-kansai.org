import {sponsors} from "json-loader!yaml-loader!~/contents/sponsors.yml"
import {speakers} from "json-loader!yaml-loader!~/contents/speakers.yml"
import {thanks} from "json-loader!yaml-loader!~/contents/thanks.yml"

export const state = () => ({
  sponsors,
  speakers,
  thanks
})
