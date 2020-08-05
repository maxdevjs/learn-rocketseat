import React from 'react';

import PageHeader from '../../components/PageHeader/index';

import './styles.css';
import TeacherItem from '../../components/TeacherItem/index';

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Available proffys." >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Week Day</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;