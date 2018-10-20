import {User} from "firebase";

export interface State {
  core: CoreState
}
export interface CoreState {
  viewportWidth: number
  viewportHeight: number
  user: User,
  error: string
}

export interface Theme {
  backgroundColor: string;
  secondBackground: string;
  fontColor: string;
  secondFont: string;
  secondFontHover: string;
  highlightColor: string;
  highlightColorHover: string;
  formBackground: string;
}
