import { Link } from 'react-router-dom';

interface Item {
  item: {
    id: number;
    name: string;
    gender: string;
    date: string;
    age: number;
    information: string;
  };
}

function Card(props: Item) {
  return (
    <>
      <div className="relative flex items-center justify-center h-auto">
        <div className="group bg-white shadow-lg shadow-gray-200 rounded-xl p-2.5 transition-all duration-500 w-64 hover:shadow-gray-300">
          <div className="rounded-2xl ">
            <img
              src={`./img/${props.item.id}.jpg`}
              alt="image"
              className="rounded-xl w-full h-52 relative object-cover z-10 shadow-lg shadow-stone-300"
            />
          </div>
          <div className="flex flex-col items-center justify-center py-2 px-4 gap-1 text-center">
            <div className="flex flex-col items-center justify-center py-3 gap-2 text-center">
              <h4 className="font-manrope font-bold text-xl text-gray-900 text-center">{props.item.name}</h4>
              <p className="text-base font-medium text-gray-500 text-center">Genero:{' ' + props.item.gender}</p>
              <p className="text-base font-medium text-gray-500 text-center">{props.item.date}</p>
            </div>

            <Link
              to={`/choose/${props.item.id}`}
              className="rounded-lg py-2.5 px-6 text-center w-full text-white bg-amber-500/90 font-semibold text-lg transition-all duration-500 hover:bg-indigo-700"
            >
              Elegir
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
