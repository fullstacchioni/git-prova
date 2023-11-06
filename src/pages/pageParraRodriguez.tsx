import Logo from "../components/parrarodriguez/Logo";

const PageParraRodriguez = () => {
    return (<>
        <Logo />
        <p>Si esegue un <code>git commit &lt;nuova branch&gt;</code> per creare una nupva branch dall'ultimo commit</p>
        <p>E <code>git reset --hard HEAD~n</code> o <code>git reset --hard  &lt;codice commit&gt;</code> per quanti commit volete spostare la branch d'inizio</p>
    </>
    );
}

export default PageParraRodriguez;~