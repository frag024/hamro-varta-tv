// Central image registry.
// React Native's packager needs static `require()` calls, so every local
// image the app can show is declared once here and imported by name
// elsewhere. This keeps data files (mockNews, mockVideos, ...) readable and
// makes it obvious which images exist.

export const logo = {
  full: require('./logo/hvt-logo.png'),
  mark: require('./logo/mark_final.png'),
};

export const banners = {
  heroGangtok: require('./banners/hero_gangtok.jpg'),
  heroKanchenjunga: require('./banners/hero_kanchenjunga.jpg'),
  mgMarg: require('./banners/mg_marg.jpg'),
  rumtekMonastery: require('./banners/rumtek_monastery.jpg'),
  tsomgoLake: require('./banners/tsomgo_lake.jpg'),
  tvStudio: require('./banners/tv_studio.jpg'),
  gangtokNight: require('./banners/gangtok_night.jpg'),
};

export const news = {
  footballMatch: require('./news/football_match.jpg'),
  gangtokRopeway: require('./news/gangtok_ropeway.jpg'),
  groundReport: require('./news/ground_report.jpg'),
  localMarket: require('./news/local_market.jpg'),
  losarFestival: require('./news/losar_festival.jpg'),
  mountainRoad: require('./news/mountain_road.jpg'),
  namchiTown: require('./news/namchi_town.jpg'),
  nathulaPass: require('./news/nathula_pass.jpg'),
  organicFarming: require('./news/organic_farming.jpg'),
  pellingView: require('./news/pelling_view.jpg'),
  ravangla: require('./news/ravangla.jpg'),
  reporterInterview: require('./news/reporter_interview.jpg'),
  sagaDawaFestival: require('./news/saga_dawa_festival.jpg'),
  schoolChildren: require('./news/school_children.jpg'),
  sikkimAssembly: require('./news/sikkim_assembly.jpg'),
  teaGarden: require('./news/tea_garden.jpg'),
  toyTrain: require('./news/toy_train.jpg'),
  weatherClouds: require('./news/weather_clouds.jpg'),
  yumthangValley: require('./news/yumthang_valley.jpg'),
};

export const videos = {
  monasteryFlags: require('./videos/monastery_flags.jpg'),
  newsBulletin: require('./videos/news_bulletin.jpg'),
  pressConference: require('./videos/press_conference.jpg'),
};
