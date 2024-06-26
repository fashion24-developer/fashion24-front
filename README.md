# fashion24-frontEnd

## 커밋 컨벤션

```
feat : 기능개발
api : 서버 api와 통신
bugfix : 개발중/배포서버 에서의 버그 발생
cross : 브라우저 호환성
delete : 기능, 코드 삭제
deploy : 배포 관련
docs : 문서 작성 및 수정 (README.md 등)
modify : 기능,코드 수정(기능 변경 시)
refactor : 코드 리펙토링(기능 변경 없이, 성능개선 목적)
publish : 마크업 & 스타일링
question : 질문
setting : 개발환경 세팅
test : test관련 (storybook, jest...)
```

```bash
#커밋 방식
#[기능명](#이슈번호) : [기능설명]
git commit -m "docs(#13) : 커밋 컨벤션 추가"
```

단, `commit`시에는 간단하게 알아볼 수 있을만한 설명만 기술(짧게 요약)

## 코딩 컨벤션

```ts
// 폴더 명
folders #여러 값이 들어가면 s를 붙임
create-folder #복합적인 단어면 - 으로 구분

// 파일 명
[component] : NewComponent.tsx //파스칼케이스
//컴포넌트가 아닌 파일은 기본적으로 카멜케이스
[api] : [기능명].ts  //user.ts 이렇게 간결하게 표기
[types] : [기능명].d.ts //user.d.ts
[hook] : use[기능명].ts/tsx //앞에 use를 붙여 hook이라는 걸 명시
[styles] : [컴포넌트명].ts //컴포넌트에 할당되는 css인 경우 이름을 동일하게 진행

//state명
const newState = [getState, setState] = useState();

// 함수
function f() {}
const f = () => {}
//두 방식을 사용해서 함수를 구현

// 함수 명
[handler] : [짧은 기능 설명]Handler // ex) onClickSubmitHandler
[api] : [http메소드명][기능명]Api // ex) postUserInfoApi
//http메소드 : get/post/delete/patch(put)
[util] :
 - [return이 있는 경우] : [get][기능] //ex) getUserInfoHandler
 - [상태변화가 있는 경우] : [set][기능] // ex) setUserInfoHandler
[boolean] : is[기능명]; //boolean타입 사용시 is 사용
```
