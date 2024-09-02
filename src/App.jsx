import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeworkCard from './components/HomeworkCard';
import EventCard from './components/EventCard';
import AttendanceCard from './components/AttendanceCard';
import PerformanceMetricsCard from './components/PerformanceMetricsCard';
import AcademicCalendarCard from './components/AcademicCalendarCard';
import BehaviorInsightsCard from './components/BehaviorInsightsCard';
import HealthWellnessCard from './components/HealthWellnessCard';
import CustomizationCard from './components/CustomizationCard';
import NoticeCard from './components/NoticeCard';

const Parent = () => {
  return (
    <div className="h-screen flex">
      <Sidebar /> {/* Fixed Sidebar */}

      <div className="flex-grow flex flex-col">
        <Header /> {/* Header at the top */}

        <div className="flex-grow p-4 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <div className="col-span-2">
              <HomeworkCard />
            </div>
            
            <EventCard />
            <AttendanceCard />
            <div className="col-span-1">
              <AcademicCalendarCard />
              
              <div className=' flex '>
                {/* <CustomizationCard /> */}
                {/* <NoticeCard /> */}
              </div>
            </div>
            <div>
              <PerformanceMetricsCard />
              <BehaviorInsightsCard />
            </div>
            <HealthWellnessCard />
            <NoticeCard />


          </div>
        </div>
      </div>
    </div>
    // <div className='h-screen w-ful flex flex-row'>
    //   <div ckl> <Sidebar /> </div>
    //   <div className='bg-slate-500 h-fit min-w-fit'></div>
    //   <HomeworkCard />
    // </div>
  );
};

export default Parent;
