import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { SiTailwindcss,SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SecoundColums = () => {
    return (
        <div data-aos="fade-down-left" className='lg:flex justify-center space-x-2 lg:space-x-10 mt-10 mb-6 lg:mb-0 space-y-4 lg:space-y-0'>
            {/* circel-1 */}
            <div style={{ width: 120, position: 'relative' }}>
                <div style={{}} className='text-center'>
                    <CircularProgressbar colorCircle="#e6e6e6" value={90} text={`${90}%`} />
                    <span style={{ position: 'absolute', top: 70, left: 40 }}><SiTailwindcss className='text-3xl text-cyan-400' /></span>
                </div>
            </div>
            <div className='ml-2 lg:ml-0' style={{ width: 120, position: 'relative' }}>
                <div style={{}} className='text-center'>
                    <CircularProgressbar value={90} text={`${90}%`} />
                    <span style={{ position: 'absolute', top: 70, left: 40 }}><SiNodedotjs className='text-3xl text-emerald-600' /></span>
                </div>
            </div>
            {/* circel-3 */}
            <div style={{ width: 120, position: 'relative' }}>
                <div style={{}} className='text-center'>
                    <CircularProgressbar value={45} text={`${45}%`} />
                    <span style={{ position: 'absolute', top: 70, left: 40 }}><SiMongodb className='text-3xl text-green-700' /></span>
                </div>
            </div>
            {/* circel-3 */}
            <div style={{ width: 120, position: 'relative' }}>
            <div style={{}} className='text-center'>
                <CircularProgressbar value={55} text={`${55}%`} />
                <span style={{ position: 'absolute', top: 70, left: 40 }}><SiExpress className='text-3xl text-black' /></span>
            </div>
        </div>
        </div>
    );
};

export default SecoundColums;