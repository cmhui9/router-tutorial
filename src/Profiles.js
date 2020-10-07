import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

export default function Profiles() {
  const test = 'test';
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/hui">최명희</Link>
        </li>
        <li>
          <Link to="/profiles/kood">쿳앤스톤즈</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요. {test}</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}
