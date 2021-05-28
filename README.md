# JAOFLIX

### { 영화 소개 웹페이지 }

### 기술스택

![collage](/Users/user/Desktop/collage.png)

- __Main__: JavaScript / React & hooks ( CRA )
- __Core__: Redux / Redux-saga / React-router / Axios / Firebase
- __Style__: CSS / Styled-component / Material-UI / Bootstrap

### 기능소개

![image-20210528112112469](/Users/user/Library/Application Support/typora-user-images/image-20210528112112469.png)

- 페이지 이동이 가능하도록 `Navigation Bar` 구현하였고, fix를 통해 스크롤을 해도 유지
-  `video tag` 를 적용하면서 동적인 화면을 구성하도록 하였음

![image-20210528112743314](/Users/user/Library/Application Support/typora-user-images/image-20210528112743314.png)

- `mouse hover` 시에 scale을 확대하는 에니메이션으로 UX기능 부여
-  `Redux`를 사용하여 데이터를 관리하도록 하였고, `Redux-saga`를 활용하여 비동기 요청을 보내도록 함

![image-20210528113419550](/Users/user/Library/Application Support/typora-user-images/image-20210528113419550.png)

- 클릭시 `Modal`을 적용하여 조금 더 편리한 UI을 보이게 하였음
- 영화에 대한 정보를 한눈에 보여주며, youtube 트레일러 비디오를 제공

![image-20210528114139074](/Users/user/Library/Application Support/typora-user-images/image-20210528114139074.png)

- 검색 기능이 가능하며 과도한 API 요청을 막기 위하여 `Debouncing` 적용
- 검색 결과는 영화의 Poster를 보여주며 메인 페이지와 마찬가지로 `mouse hover` 및 `Modal` 페이지 제공
- 또한, 어떠한 페이지에서든 검색에 대한 결과를 보여줌 (만약 키워드가 공백이라면 현재 페이지 유지)

![image-20210528114732240](/Users/user/Library/Application Support/typora-user-images/image-20210528114732240.png)

- `Firebase`를 이용한 CRUD 기능 구현
- `Redux-saga`를 이용하여 Firebase의 Store와 비동기요청을 수행
