import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-xl w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" alt="Product Image 1" />
        <img src="/p2.png" alt="Product Image 2" />
        <img src="/p3.png" alt="Product Image 3" />
        <img src="/p4.png" alt="Product Image 4" />
        <img src="/p5.png" alt="Product Image 5" />
        <img src="/p6.png" alt="Product Image 6" />
        <img src="/p7.png" alt="Product Image 7" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
