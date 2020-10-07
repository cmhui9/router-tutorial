import React from 'react';

import WithRouterSample from './WithRouterSample';
const profileData = {
  hui: {
    name: '최명희',
    description: 'Frontend Engineer @ RIDI',
  },
  kood: {
    name: '쿳앤스톤즈',
    description: 'Developer God',
  },
};

export default function Profile({ match }) {
  const { username } = match.params;
  // 2개의 파라미터를 불러오고 싶을 때는
  // const { username, id } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}
