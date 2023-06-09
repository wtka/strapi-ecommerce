import { IoMdHeartEmpty } from 'react-icons/io';
import Wrapper from '@/components/Wrapper';

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left coulmn start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:max-0">
            left
          </div>
          {/* left coulmn end */}

          {/* right coulmn start */}
          <div className="flex-[1] py-3">right</div>
          {/* right coulmn start */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
