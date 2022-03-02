import SectionTwoImg from '../../images/imgSection2.png';

const Welcome = () => {
    return (
        <div className='flex mobile-S-Laptop:flex-col-reverse mobile-S-Laptop:items-center bg-[#e2f3fd] '>
            <div className='laptop-4k:w-1/2 flex flex-col justify-center laptop-4k:ml-[4rem] mobile-S-Laptop: px-[1.50rem]'>
                <h1 className='pt-[4rem] mobile-S-Laptop:text-center  text-3xl font-semibold'>Who we Are?</h1>
                <p className='mt-[1rem] text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, error officiis! Nostrum aliquam perferendis qui. Suscipit, reiciendis voluptatibus eaque ullam delectus, accusamus nobis quidem culpa labore, ducimus recusandae magnam cum?</p>
                <p className='mt-[1rem] text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, error officiis! Nostrum aliquam perferendis qui. Suscipit, reiciendis voluptatibus eaque ullam delectus, accusamus nobis quidem culpa labore, ducimus recusandae magnam cum?</p>
                <p className='mt-[1rem] text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, error officiis! Nostrum aliquam perferendis qui. Suscipit, reiciendis voluptatibus eaque ullam delectus, accusamus nobis quidem culpa labore, ducimus recusandae magnam cum?</p>
            </div>
            <div className='laptop-4k:w-1/2  flex justify-end  bg-[#e2f3fd]'>
                <img className='mobile-S-Laptop:px-[2rem] mobile-S-Laptop:pt-[2rem]' src={SectionTwoImg} alt='Section Two Image'/>
            </div>
        </div>
        );
    }
    export default Welcome;