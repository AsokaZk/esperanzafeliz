import Card from '../../components/Card';
import data from '../../db/data.json';

function Choose() {
  const cards = data.map((item) => {
    return <Card item={item} key={item.id} />;
  });
  return (
    <>
      <div className="relative mt-20 h-full">
        <div className="z-10 text-black text-center w-full content-center justify-center">
          <div className="py-4">
            <h2 className="text-4xl font-bold h-auto text-slate-700">
              Conozca a los niños que están listos para ser apoyados
            </h2>
            <p className="text-1xl text-slate-500 py-3 px-3">
              Al apoyar a un niño, usted contribuye a brindarle el amor y el apoyo que necesita para escapar de la
              pobreza material pero tambien de la pobreza espiritual. Los niños reciben servicios básicos como atención
              médica y educación integral, además de una introducción al amor de Jesús.
              <br />
              Puedes cambiar la vida de un niño al aceptar ser su amigo. Los niños que aparecen a continuación te están
              esperando. ¿A qué niño elegirías?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-between px-3">{cards}</div>
    </>
  );
}

export default Choose;
