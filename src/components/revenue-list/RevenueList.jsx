import React from 'react';
import './revenue-list.scss';
import { data } from '../../constants';
import ProgressBar from '../progressbar/ProgressBar';

const RevenueList = () => {
  return (
    <ul className='revenue-list'>
            {
                data.revenueByChannel.map((item, index) => (
                    <li key={`revenue-list-${index}`}>
                        <div className='revenue-list__item'>
                            <div className='revenue-list__item__title'>
                                {item.title}

                                <span className={
                                `${item.value < 50 ? 'txt-success' : 'txt-danger'}`
                            }>
                                {item.value}%
                            </span>
                            </div>
                        
                        </div>

                        
                        <div>
                            <ProgressBar value = {item.value}/>
                        </div>
                    </li>
                ))
            }
    </ul>
  )
}

export default RevenueList