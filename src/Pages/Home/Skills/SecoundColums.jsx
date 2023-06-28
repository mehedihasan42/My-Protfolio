import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { SiTailwindcss,SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SecoundColums = () => {
    return (
        <div data-aos="fade-down-left" className='flex justify-center space-x-10 mt-10'>
            {/* circel-1 */}
            <div style={{ width: 100, position: 'relative' }}>
                <div style={{}} className='text-center'>
                    <CircularProgressbar value={90} text={`${90}%`} />
                    <span style={{ position: 'absolute', top: 60, left: 33 }}><SiNodedotjs className='text-3xl text-emerald-600' /></span>
                </div>
            </div>
            <div style={{ width: 100, position: 'relative' }}>
                <div style={{}} className='text-center'>
                    <CircularProgressbar colorCircle="#e6e6e6" value={95} text={`${95}%`} />
                    <span style={{ position: 'absolute', top: 60, left: 33 }}><SiTailwindcss className='text-3xl text-cyan-400' /></span>
                </div>
            </div>
            {/* circel-3 */}
            <div style={{ width: 100, position: 'relative' }}>
                <div style={{}} className='text-center'>
                    <CircularProgressbar value={45} text={`${45}%`} />
                    <span style={{ position: 'absolute', top: 60, left: 33 }}><SiMongodb className='text-3xl text-green-700' /></span>
                </div>
            </div>
            {/* circel-3 */}
            <div style={{ width: 100, position: 'relative' }}>
            <div style={{}} className='text-center'>
                <CircularProgressbar value={55} text={`${55}%`} />
                <span style={{ position: 'absolute', top: 60, left: 33 }}><SiExpress className='text-3xl text-black' /></span>
            </div>
        </div>
        </div>
    );
};

export default SecoundColums;