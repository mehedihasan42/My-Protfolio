import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { SiTailwindcss,SiMongodb,SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";


const SecoundColums = () => {
    return (
        <div className='flex space-x-10 mt-10'>
        {/* circel-1 */}
        <div style={{ width: 100, position: 'relative' }}>
            <div style={{}} className='text-center'>
                <CircularProgressbar value={77} text={`${77}%`} />
                <span style={{ position: 'absolute', top: 60, left: 33 }}><SiTailwindcss className='text-3xl text-orange-400' /></span>
            </div>
        </div>
        {/* circel-2 */}
        <div style={{ width: 100, position: 'relative' }}>
            <div style={{}} className='text-center'>
                <CircularProgressbar value={75} text={`${75}%`} />
                <span style={{ position: 'absolute', top: 60, left: 33 }}><FaBootstrap className='text-3xl text-orange-400' /></span>
            </div>
        </div>
        {/* circel-3 */}
        <div style={{ width: 100, position: 'relative' }}>
            <div style={{}} className='text-center'>
                <CircularProgressbar value={45} text={`${45}%`} />
                <span style={{ position: 'absolute', top: 60, left: 33 }}><SiMongodb className='text-3xl text-orange-400' /></span>
            </div>
        </div>
        {/* circel-3 */}
        <div style={{ width: 100, position: 'relative' }}>
            <div style={{}} className='text-center'>
                <CircularProgressbar value={54} text={`${54}%`} />
                <span style={{ position: 'absolute', top: 60, left: 33 }}><SiExpress className='text-3xl text-orange-400' /></span>
            </div>
        </div>
    </div>
    );
};

export default SecoundColums;