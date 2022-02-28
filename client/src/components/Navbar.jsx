import logo from '../../images/Capa 1.png';
const Navbar = () => {
    
    return (
      <div className="bg-[#000022]">
          <div className="container mx-auto">
            <div class="flex">
                <div class="flex w-2/4 h-full">
                    <img class="ml-8 mt-3 w-10 h-16" src={logo} alt="LogoImg"/>
                    <h1 class="text-3xl font-serif text-stone-50 cursor-pointer mt-8 ml-4">
                        CryptoCoffee
                    </h1>
                </div>
                <div class="w-2/4 h-full pt-8 ">
                    <ul class="list-none flex justify-end">
                        <li><a href="" class="text-3xl font-serif text-slate-400 hover:text-stone-50 cursor-pointer">Documentation</a></li>
                        <li><a href="" class="text-3xl font-serif text-slate-400 hover:text-stone-50 cursor-pointer ml-8">About us</a></li>
                        <li><a href="" class="text-3xl font-serif text-slate-400 hover:text-stone-50 cursor-pointer ml-8 mr-8">Help</a></li>
                    </ul>
                </div>
            </div>
          </div>
      </div>
    );
}
export default Navbar;