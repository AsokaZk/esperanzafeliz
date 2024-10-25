import { useForm } from 'react-hook-form';
import dbFirestore from '../../dbconfig';
import { addDoc, collection } from 'firebase/firestore';

function FormData() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    console.log(errors);
    if (Object.keys(errors).length === 0 && data.name != '') {
      addDoc(collection(dbFirestore, 'donador'), data)
        .then((id) => console.log(id, 'se guardo con exito'))
        .catch((err) => console.log(err, 'error al guardar'));
      reset();
      alert('Se registro correctamente');
    } else {
      alert('Registro invalido');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="relative mb-6">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Nombre </label>
          <div className="relative  text-gray-500 focus-within:text-gray-900 mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <svg
                className="stroke-current ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V20.1429C20 19.0805 20 18.5493 19.8997 18.1099C19.5578 16.6119 18.3881 15.4422 16.8901 15.1003C16.4507 15 15.9195 15 14.8571 15H10C8.13623 15 7.20435 15 6.46927 15.3045C5.48915 15.7105 4.71046 16.4892 4.30448 17.4693C4 18.2044 4 19.1362 4 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <input
              type="text"
              {...register('name', { minLength: 3 })}
              id="name"
              className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Enter Name"
            />
            {errors.name && <p>{'Nombre invalido'}</p>}
          </div>
        </div>
        <div className="relative mb-6">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email</label>
          <div className="relative  text-gray-500 focus-within:text-gray-900 mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <svg
                className="stroke-current ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.54887 6.73325L7.76737 9.36216C9.82591 10.645 10.8552 11.2864 11.9999 11.2863C13.1446 11.2861 14.1737 10.6443 16.2318 9.36081L20.4611 6.72333M11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20Z"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="email"
              {...register('email', { minLength: 3 })}
              className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="relative mb-6">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Numero de celular</label>
          <div className="relative  text-gray-500 focus-within:text-gray-900 mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <svg
                className="stroke-current ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.02623 10.2611L12.7387 17.9736C14.4091 19.6439 17.1173 19.6439 18.7877 17.9736C19.4559 17.3054 19.4559 16.2221 18.7877 15.554L16.6454 13.4116C16.1582 12.9244 15.3683 12.9244 14.8811 13.4116C14.3939 13.8988 13.604 13.8988 13.1168 13.4116L9.23534 9.53015C8.74814 9.04295 8.74814 8.25305 9.23534 7.76585C9.72253 7.27865 9.72253 6.48875 9.23534 6.00155L7.44584 4.21205C6.77768 3.5439 5.69439 3.5439 5.02623 4.21205C3.35584 5.88244 3.35584 8.59067 5.02623 10.2611Z"
                  stroke=""
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <input
              type="text"
              id="phone"
              {...register('phone', { minLength: 3 })}
              className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Enter Phone No"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
            Guardar y Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormData;
