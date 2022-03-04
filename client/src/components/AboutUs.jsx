import SectionTwoImg from '../../images/imgSection2.png';
import Person1 from '../../images/personImg/person1.jpg';

const Welcome = () => {
    return (
        <div className='container mx-auto flex mobile-S-Laptop:flex-col-reverse mobile-S-Laptop:items-center'>
            <div className='laptop-4k:w-1/2 flex flex-col justify-center laptop-4k:ml-[4rem] mobile-S-Laptop: px-[1.50rem]'>
                <h1 className='pt-[4rem] mobile-S-Laptop:text-center  text-3xl font-semibold'>Who we Are?</h1>
                <p className='mt-[1rem]  text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, error officiis! Nostrum aliquam perferendis qui. Suscipit, reiciendis voluptatibus eaque ullam delectus, accusamus nobis quidem culpa labore, ducimus recusandae magnam cum?</p>
                <p className='mt-[1rem]  text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, error officiis! Nostrum aliquam perferendis qui. Suscipit, reiciendis voluptatibus eaque ullam delectus, accusamus nobis quidem culpa labore, ducimus recusandae magnam cum?</p>
                <p className='mt-[1rem]  text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, error officiis! Nostrum aliquam perferendis qui. Suscipit, reiciendis voluptatibus eaque ullam delectus, accusamus nobis quidem culpa labore, ducimus recusandae magnam cum?</p>
            </div>
            <div className='laptop-4k:w-1/2  flex justify-center items-center'>
                <img className='mobile-S-Laptop:px-[2rem] laptop-4k:w-[80%] laptop-4k:h-[70%]' src={SectionTwoImg} alt='Section Two Image'/>
            </div>
        </div>
        );
    }
    export default Welcome;