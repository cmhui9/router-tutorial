import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

export default function Profiles() {
  const test = 'test';
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/hui"
            activeStyle={{ background: 'black', color: 'white' }}>
            최명희
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/kood"
            activeStyle={{ background: 'black', color: 'white' }}>
            쿳앤스톤즈
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요. {test}</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}
