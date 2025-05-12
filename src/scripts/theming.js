const DEFAULT_THEME = "light";

export function get_theme() {
  return document.getElementsByTagName("html")[0].classList[0];
}

export function set_theme() {
  let theme = get_theme();
  if (theme == undefined) {
    theme = DEFAULT_THEME;
    document.getElementsByTagName("html")[0].classList.add(theme);
  }
  return theme;
}

import logo_transparent_dark  from "@/assets/images/logo/png/logo-transparent-dark.png";
import logo_transparent_light from "@/assets/images/logo/png/logo-transparent-light.png";

export function get_logo() {
  let logo;
  switch (get_theme()) {
    case "light":
      logo = logo_transparent_light;
      break;
    case "dark":
      logo = logo_transparent_dark;
      break;
  }
  return logo
}