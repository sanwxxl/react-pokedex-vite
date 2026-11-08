#주요 기능 설명

1.주요 파일
---
   > components/Root.jsx:
      앱의 두뇌 역할이다. useState는 포켓몬의 번호와 키 몸무게 등 정보를 저장하고,  useEffect로 id가 바뀔때마다 PokeAPI를 불러서 그 state를 채운다.
   
   > components/TopBar.jsx
      검색 기능을 담당한다. 처음 페이지가 열릴 때 전체 포켓몬 이름 목록을 받아와서 입력창에서 그 글자를 치면 filter로 그 글자로 시작하는 이름만 검색해준다.


2.주요 컴포넌트 
---
   >Footer:
      화면 아래에 화살표 두개와 포켓몬 번호(id)를 표시하는 영역이다 ( <| 번호 |>).
      <를 누르면 prevCount, >를 누르면 forwardCount, 숫자를 입력하면 paging을 부른다. 즉 Footer는 직접 번호를 바꾸지 않고 "번호 바꿔줘"라고 Root에게 요청만 보내고, 그러면 Root의 id가 바뀌고 모든 컴포넌트가 새 포켓몬으로 다시 그려진다.


3.코드 설명
---


코드:
```jsx
 const [sprite, setSprite] = useState(loading);
   useEffect(() => {
  setSprite(loading);
  fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokeId}`)
    .then((res) => res.json())
    .then((data) => {
      setSprite(data.sprites.other["official-artwork"].front_default);
    })
    .catch((err) => console.error(err));
}, [props.pokeId]);
```

> 포켓몬 그림을 불러오는 코드이다. sprit에 띄울 값을 처음으로 설정한다.(여기서 기본값은 로딩 그림). [props.pokeId]로 인해서 번호가 바뀔때마다 useEffect가 다시 실행된다. 실행되면 먼저 그림을 로딩 GIF로 바꿔두고, 그 번호의 포켓몬 정보를 API에 요청을 보낸다. 여기서 두가지로 나뉘는데, 먼저 응답이 오면 JSON으로 바꾼 뒤 공식 일러스트 주소를 꺼내 sprite에 넣는다. 또한 state가 바뀌니 화면의 <img>가 새 그림으로 바뀌게된다. 실패하면 catch에서 콘솔에 에러만 찍음.


