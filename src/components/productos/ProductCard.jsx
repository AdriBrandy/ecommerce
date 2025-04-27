import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl shadow-sm shadow-gray-200">
      
      {/* Imagen */}
      <a href={product.href} className="relative">
        <img
          alt={product.name}
          src={product.img}
          className="aspect-square w-full object-cover transition duration-300 group-hover:opacity-75"
        />
      </a>

      {/* Info producto */}
      <div className="flex flex-col justify-between bg-white p-4 grow">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{product.category}</p>
        </div>
        <div className="mt-3 text-xl font-semibold text-gray-900">U$s {product.price}</div>
      </div>

      {/* Acciones (botones) */}
      <div className="flex flex-col gap-2 bg-white p-4 
                      md:absolute md:inset-x-0 md:bottom-0 
                      md:translate-y-full md:group-hover:translate-y-0 
                      md:transition md:duration-300">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-800 bg-indigo-800 px-4 py-3 text-sm font-medium text-white hover:border-indigo-900 hover:bg-indigo-900 transition"
        >
          <span>Add to Cart</span>
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-800 px-4 py-3 text-sm font-medium text-white hover:border-zinc-900 hover:bg-zinc-900 transition"
        >
          <span>View Details</span>
        </button>
      </div>

    </div>
  );
};

export default ProductCard;

