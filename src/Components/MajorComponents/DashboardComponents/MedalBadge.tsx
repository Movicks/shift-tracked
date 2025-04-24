import React from "react";

const MedalBadge: React.FC = () => {
  return (
      <div className="flex items-center justify-center space-y-4 w-full h-full">
          <div className="w-full flex items-center justify-center relative">
              <img src='Svgs/Pattern.svg' alt='icon' loading='lazy' className="w-full"/>
              <div className="flex items-center absolute">
                <img src='Svgs/Left Flag.svg' alt='icon' loading='lazy' className="-mr-2"/>
                <div className="w-[10rem] h-[10rem] aspect-[1/1] relative bg-white p-1 rounded-full flex items-center justify-center overflow-hidden">
                    <img src='Svgs/Inner Star.svg' alt='icon' className="object-contain w-full h-full" loading='lazy'/>
                    <div className="absolute flex items-center justify-center w-[87%] h-[87%] rounded-full hover:animate-pulse [mask-image:radial-gradient(circle,white_61%,transparent_60%)] [mask-composite:exclude] before:absolute before:inset-0 before:bg-blue-300 before:rounded-[50%] before:[mask:radial-gradient(circle,transparent_5%6,white_55%)]">
                        {/* Inner circle */}
                        <div className="z-10 w-27 h-27 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg p-3">
                            {/* user image is here */}
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Employee"
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <img src='Svgs/Right Flag.svg' alt='icon' loading='lazy' className='-ml-2'/>
            </div>
          </div>
    </div>
  );
};

export default MedalBadge;
