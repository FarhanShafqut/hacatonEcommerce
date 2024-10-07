import React from 'react'
import Navbar from '../(components)/Navbar/page'
import Dropdown from '../(components)/Dropdown'
import Prodcard from '../(components)/prodcard'
import Fotter from '../(components)/Fotter/page'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className='bg-gray-50 dark:bg-black dark:text-white'>
      <div className='text-center font-bold text-6xl pt-8'>Our Store</div>
      <div className="container mx-auto mt-8 dark:bg-gray-900 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center dark:text-white">
          <div className="mb-4 md:mb-0 md:pl-8">
            <div className='flex flex-col md:flex-row items-center'>
              <h1 className="text-2xl font-bold mb-4 md:mb-0 md:mr-4">Shop By Categories</h1>
              <Dropdown titl1={"MEN"} titl2={"WOMEN"} titl3={"KIDS"} h1={'/ourStore'} h2={'/ourStore'} h3={'/ourStore'}/>
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="mr-4">Sort by:</h1>
            <Dropdown titl1={"Date"} titl2={"Price"} titl3={"Reviews"} h1={'./ourStore'} h2={'./ourStore'} h3={'./ourStore'}/>
            <h2 className="ml-4">21 products</h2>
          </div>
        </div>
      </div>
    </div>
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 mt-0 space-y-6  py-6 sm:mt-2 max bg-gray-200  dark:bg-slate-400 rounded-2xl p-16'>
    <p className='hidden'></p>
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
          <Prodcard Imag={'/assets/earphones_a_1.webp'} Text={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum at sem et laoreet. Morbi non magna eget enim accumsan aliquam. Donec ultricies, arcu id ultrices porttitor, ex arcu fermentum tortor, vel convallis turpis erat at tortor. Aliquam erat volutpat. Vivamus ut justo eget est bibendum ornare ac in tortor. Etiam mattis posuere velit, vel sagittis felis. Ut tincidunt felis sed placerat faucibus. Praesent iaculis nulla a consequat molestie. Pellentesque pellentesque cursus auctor. Morbi sit amet porttitor metus. Nunc gravida tortor quis dolor congue rhoncus. Nullam nisi nunc, aliquam sed ornare id, facilisis at orci. Vivamus tempor aliquet diam, ut volutpat libero faucibus in. Vestibulum varius dolor urna, ut suscipit nibh tincidunt ac. In sed orci tempus, efficitur augue nec, pharetra tellus."} Price={'500'}/>  
     </div>
    </div>
    <Fotter/>
    </>
  )
}
