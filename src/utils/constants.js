import { TMDB_AUTH_TOKEN } from "../config/config"

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTlmZmZlYmU1YmZhYjY3ZTM0MWFjMjk3NWU5MzkzMCIsInN1YiI6IjY1OTdhNWI0YTY5OGNmMTIwZDQzYTA3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ne2fzJAyaNQhfnQZtlUtHP9ukYU8xY-868n0wpi0T2Q'
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTH_TOKEN}`
    //  Authorization: `Bearer ${TMDB_AUTH_TOKEN}`
  }
}