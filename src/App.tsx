import React from "react";
import {useSelector} from "react-redux";
import './App.scss';
import Tab from "./components/Tab/Tab";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import {TabState} from './store/tabReducer';
import {StoreType} from './store/rootReducer';


export const App = () => {
    const tabState: TabState = useSelector((store: StoreType) => store.tab);
    const {tabs, activeTabId} = tabState;

    const activeTab = tabs.find(tab => tab.id === activeTabId);

    const isLast = tabs.length - 1 === activeTab.id;
    const isFirst = activeTab.id === 0;
    return (
        <div className='app'>
            <Tab
                {...activeTab}
                isLast={isLast}
                isFirst={isFirst}
            />
            <ProgressBar tabs={tabs} activeTabId={activeTabId}/>
        </div>
    )
}
