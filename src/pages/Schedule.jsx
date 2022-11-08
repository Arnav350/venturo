import React, { useEffect } from "react";
import "../App.css";
import "./Schedule.css";
import ScheduleDay from "../components/ScheduleDay";

function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="schedule container">
            <h1 className="schedule-title">Title</h1>
            <p className="schedule-info">Para</p>
            <div className="schedule-box">
              <div className="schedule-col">
                <div className="schedule-stub"></div>
                <div className="schedule-stub">12 am</div>
                <div className="schedule-stub">1 am</div>
                <div className="schedule-stub">2 am</div>
                <div className="schedule-stub">3 am</div>
                <div className="schedule-stub">4 am</div>
                <div className="schedule-stub">5 am</div>
                <div className="schedule-stub">6 am</div>
                <div className="schedule-stub">7 am</div>
                <div className="schedule-stub">8 am</div>
                <div className="schedule-stub">9 am</div>
                <div className="schedule-stub">10 am</div>
                <div className="schedule-stub">11 am</div>
                <div className="schedule-stub">12 pm</div>
                <div className="schedule-stub">1 pm</div>
                <div className="schedule-stub">2 pm</div>
                <div className="schedule-stub">3 pm</div>
                <div className="schedule-stub">4 pm</div>
                <div className="schedule-stub">5 pm</div>
                <div className="schedule-stub">6 pm</div>
                <div className="schedule-stub">7 pm</div>
                <div className="schedule-stub">8 pm</div>
                <div className="schedule-stub">9 pm</div>
                <div className="schedule-stub">10 pm</div>
                <div className="schedule-stub">11 pm</div>
              </div>
              <ScheduleDay day="Sunday" className="schedule-col" />
              <ScheduleDay day="Monday" className="schedule-col" />
              <ScheduleDay day="Tuesday" className="schedule-col" />
              <ScheduleDay day="Wednesday" className="schedule-col" />
              <ScheduleDay day="Thursday" className="schedule-col" />
              <ScheduleDay day="Friday" className="schedule-col" />
              <ScheduleDay day="Saturday" className="schedule-col" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Schedule;
