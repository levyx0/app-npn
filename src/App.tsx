import logo from "./assets/Logo nlw.svg";
import { NewnoteCard } from "./componentes/new-note-card";
import { Notecard } from "./componentes/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW EXpert" />
      <form className="w=full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w=full bg-transparent  text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewnoteCard />

        <Notecard />
        <Notecard />
        <Notecard />
        <Notecard />
      </div>
    </div>
  );
}
