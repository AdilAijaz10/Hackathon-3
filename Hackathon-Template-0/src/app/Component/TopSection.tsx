// import Image from 'next/image';

import Link from "next/link";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface IProduct {
  id: string;
  name: string;
  imagePath: string;
  price: number;
}

export default async function TopSection() {
  const data: IProduct[] = await client.fetch('*[_type =="product"]');
  // console.log(JSON.stringify(data, null, 2));

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Picks For You</h2>
      <p className="text-gray-500 text-center mb-10">
        Find a bright idea to suit your taste with our great selection of suspension, floor and table lights.
      </p>
      <div className="flex justify-center items-end flex-wrap mx-auto">
        {data.slice(0, 4).map((product) => (
          <div
            key={product.name}
            className="flex justify-center items-center m-2"
            style={{ width: '300px' }} // Increased width here
          >
            <section className="bg-white py-10">
              <div className="container mx-auto px-4 md:px-12">
                <div>
                  <div className="text-center">
                    <img
                      src={urlFor(product.imagePath).url()}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <h2 className="text-black-900 font-bold">{product.price}</h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
          <Link href="/Shop">
        View More
        </Link>
        </button>
      </div>
    </div>
  );
}