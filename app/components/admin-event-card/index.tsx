import Image from "next/image";
import Link from "next/link";
import s from "./event-card.module.scss";

export default function AdminEventCard({ showInfo }: any) {
  return (
    <div className={s.card}>
      <div className={s.image_wrapper}>
        <Link href={`/admin/eventos/${showInfo.eventId}`}>
          <Image
            src={showInfo.image ?? "/images/flyer__test.jpg"}
            alt="Entrada"
            fill={true}
            style={{
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </Link>
      </div>
      <div className={s.card_body}>
        <h1 className={s.title}>{showInfo.title}</h1>
        <div className={s.tool_bar}>
            <Link href={`/admin/eventos/${showInfo.eventId}`} data-title="Editar evento"><img src='/images/icons/editar.svg' alt="Icono de editar" /></Link>
            <Link href={`/admin/validaciones/${showInfo.eventId}`} data-title="Validadores"><img src='/images/icons/escanear.svg' alt="Icono de escanear" /></Link>
            <Link href={`/admin/estadisticas/${showInfo.eventId}`} data-title="Estadisticas"><img src='/images/icons/estadisticas.svg' alt="Icono de estadisticas" /></Link>
            <button data-title="Eliminar" className={s.delete}><img src='/images/icons/eliminar.svg' alt="Icono de eliminar" /></button>
        </div>
      </div>
    </div>
  );
}
