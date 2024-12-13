import MyExploreComp from "./MyExplorerComp";

const MyExplorer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 mb-12 mt-8">
      <a href="">
        <MyExploreComp write={"Esplora per generi"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Decenni"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Attivitá e stati d'animo"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Worldwide"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Classifiche"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Audio spaziale"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Video musicali"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Nuovi artisti"}></MyExploreComp>
      </a>
      <a href="">
        <MyExploreComp write={"Hit del passato"}></MyExploreComp>
      </a>
    </div>
  );
};

export default MyExplorer;
