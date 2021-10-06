inlineApps 폴더 내부에 들어가는 모든 앱들은 inlineApps/{AppName}/ 의 구조를 가져야 하며,
inlineApps/{AppName}/protected/js/method 아래 들어가는 모든 모듈은 자체적으로 res.end() 함수를 호출하여야 함. (비동기 함수 때문에 전방 서버 단에서 res.end() 호출시 응답 문제 있음)