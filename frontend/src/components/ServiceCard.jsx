import Icon from "./Icon";

export default function ServiceCard({ icono, titulo, descripcion }) {
  return (
    <div className="rounded-2xl border border-tinta/10 bg-marfil-soft p-7 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-vino/10">
        <Icon name={icono} className="h-6 w-6 text-vino" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-vino">{titulo}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-tinta/70">{descripcion}</p>
    </div>
  );
}
