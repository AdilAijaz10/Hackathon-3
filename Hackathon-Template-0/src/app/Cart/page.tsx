import ShopSlider from '../Component/ShopSlider';
import Image from 'next/image';

const Cart = () => {
  return (
    <>
  <div className=" relative w-full h-[350px]">
        <Image
          src="/Rectangle 1.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black p-10 ">
          <h1 className="text-3xl md:text-5xl font-bold">Cart</h1>
          <p className="opacity-[0.8] max-w-xl text-lg md:text-xl mt-2 font-semibold">
            Home - Cart
          </p>
        </div>
      </div>

      <div className=" py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg  p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr className='bg-[#FFF9E5] '>
                      <th className="text-center py-4 text-left font-semibold">Product</th>
                      <th className="py-4 text-left font-semibold">Price</th>
                      <th className="py-4 text-left font-semibold">Quantity</th>
                      <th className="py-4 text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                        
                          <Image
                            src="/Asgaard sofa 1.png"
                            width={100}
                            height={100}
                            alt="Product image"
                            className="bg-[#FBEBB5] rounded-md h-16 w-16 mr-4"
                          />
                          <span className="text-gray-300">Asgaard sofa</span>
                        </div>
                      </td>
                      <td className="py-4">Rs. 250,000.00</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          
                          <button className="border rounded-md py-2 px-4 ml-2">1</button>
                        </div>
                      </td>
                      <td className="py-4">Rs. 250,000.00</td>
                    </tr>
                    {/*More product rows */}  
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4 ">
              <div className="bg-[#FFF9E5] p-6 text-center pb-16 mt-5">
                <h2 className="text-lg font-semibold mb-4 text-center pb-8">Cart Total</h2>
                <div className="flex justify-between mb-2">
                  <span className='pb-2'>Subtotal</span>
                  <span className='pb-2'>Rs. 250,000.00</span>
                </div>
                
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">Rs. 250,000.00</span>
                  </div>
                  <button className="text-center text-black border-black border-2 py-2 px-4 rounded-lg mt-4 ">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShopSlider />
    </>
  );
}

export default Cart;