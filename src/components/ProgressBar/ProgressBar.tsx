import React from 'react';
import './ProgressBar.scss';
import {Tab} from '../../store/tabReducer';

interface ProgressBarProps {
    tabs: Tab[],
    activeTabId: number
}

const ProgressBar:React.FC<ProgressBarProps> = ({tabs, activeTabId}) => {

    return (
        <div className='app_progress-bar progress-bar'>
            {
                tabs.map((tab: Tab) => (
                    <div
                        key={tab.id + tab.title}
                        className={`progress-bar__item ${tab.id === activeTabId && 'active'}`}
                    />
                ))
            }
        </div>
    )
}

export default ProgressBar;