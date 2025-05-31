import { profileData } from '@/types/constants';
import Image from 'next/image';

const Profile = () => {

    return (
        <aside className="flex flex-col md:w-[250px] sm:w-full gap-3">
            <div className="md:w-[250px] sm:w-full rounded-2xl shadow-lg flex-1 overflow-hidden hidden sm:block">
                <Image
                    src={`/images/${profileData.profileImage}`}
                    alt="Profile"
                    width={250}
                    height={250}
                    // placeholder="blur"
                    className="w-full h-full object-cover"
                />             
            </div>
            <div className="bg-[#2B2B2B] md:w-[250px] sm:w-full rounded-2xl shadow-lg flex-1 p-4 text-center flex flex-col relative">
                <h2 className="text-xl font-bold text-[#F0ECE2]">{profileData.name}</h2>
                <p className="text-[#A9A9A9]">{profileData.title}</p>
                <hr className="border-t border-gray-600 w-full my-6" />
                <div className="space-y-2 text-sm text-[#F0ECE2]">
                
                    <div className="flex gap-x-3 justify-between">
                        <span className="w-24 font-semibold text-left">Email:</span>
                        <a href={`mailto:${profileData.email}`} className="text-blue-400 hover:underline">{profileData.email}</a>
                    </div>
                    <div className="flex gap-x-3 justify-between">
                        <span className="w-20 font-semibold text-left">Phone:</span>
                        <a href={`tel:${profileData.phone}`} className="text-blue-400 hover:underline">{profileData.phone}</a>
                    </div>
                    <div className="flex gap-x-3 justify-between">
                        <span className="w-24 font-semibold text-left">Location:</span>
                        <a
                        href={`https://www.google.com/maps/search/?api=1&query=${profileData.location}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >{profileData.location}</a>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="flex space-x-4 mt-4 text-2xl">
                        <a 
                        href={profileData.socialLinks.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-7 h-7" viewBox="0 0 50 50">
                                <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                        <a 
                        href={profileData.socialLinks.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  className="w-7 h-7"  viewBox="0 0 50 50">
                            <path fill="currentColor" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                        </a>
                    </div>
                </div>
                <div className="relative sm:absolute sm:bottom-3 sm:left-3 sm:right-3">
                    <a href={`/files/${profileData.resumeUrl}`}
                    download
                    className="w-full flex justify-between text-white bg-[#FF5E0E] hover:bg-[#B22222] font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center">
                        <label>Download Resume</label>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ms-2 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="currentColor"/>
                        <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Profile;