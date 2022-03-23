import {MdExpandLess, MdExpandMore} from 'react-icons/md'
import { useState } from 'react';
import { useEffect } from 'react';

const Button = ({floorNumber, totalFloors, getRequest}) => {
    const [up, setUp] = useState(false);
    const [down, setDown] = useState(false);
    const [ip, setIp] = useState(NaN);
    useEffect(()=>{
        if(up)
            // true means up
            getRequest(floorNumber, true, ip);
        else if (down) {
            // true means down
            getRequest(floorNumber, false, ip)
        }
    }, [up, down])

    return (
        <div className='floor-buttons'>
            <p className='floor-number'>{floorNumber < 10 ? "0"+floorNumber : floorNumber}</p>
            <input type='number'value={ip} onChange={(e)=>setIp(parseInt(e.target.value))}/>
            <button type='button' 
                disabled={floorNumber == totalFloors}
                className={ up ? 'btn-pressed':'' } 
                onClick={()=>{
                    if(ip != NaN && ip > floorNumber && ip <= totalFloors)
                        setUp(true);
                    else
                        setIp(NaN);
                    }}>
                    <MdExpandLess/>
            </button>
            <button 
                type='button' 
                disabled={floorNumber==0 }
                className={ down ? 'btn-pressed':'' } 
                onClick={()=>{
                    if(ip != NaN && ip < floorNumber && ip >= 0)
                        setDown(true);
                    else
                        setIp(NaN);
                    }}>
                    <MdExpandMore/>
            </button>
        </div>
      );
}
 
export default Button;