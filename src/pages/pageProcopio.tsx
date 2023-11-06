import Logo from "../components/procopio/Logo";

const PageProcopio = () => {
  return (
    <>
      <h1>Gabriele Procopio</h1>
      <Logo />
      <p>
        ho fatto un git checkout su procpio-init e poi ho fatto un git rebase
        master
      </p>
      <p>
        la mia branch dedicata è indietro di qualche commit rispetto a master,
        come faccio a portarla avanti? Cioè, come faccio a portare le modifiche
        fatte su master sulla mia branch dedicata?
      </p>
      <p>devo fare un git merge</p>
    </>
  );
};
export default PageProcopio;
