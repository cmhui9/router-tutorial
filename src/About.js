import React from 'react';
import qs from 'qs'; // query string

export default function About({ location }) {
	console.log(location);
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});

	const detail = query.detail === 'true'; // 해당값이 문자열로 가져오기 때문에 문자열로 작성해야함

	console.log(query);

	return (
		<div>
			<h1>소개</h1>
			<p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트 입니다.</p>
			{detail && <p>detail값이 true입니다!</p>}
		</div>
	)
}
