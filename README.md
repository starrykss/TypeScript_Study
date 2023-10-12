# TypeScript_Study
## 레포지토리 소개

- **타입스크립트(TypeScript)** 를 공부한 내용을 기록한 레포지토리

<table>
    <tr>
        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="80" alt="TypeScript Logo"/></td>
        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" width="80" alt="JavaScript Logo"/></td>
    </tr>
</table>


## 타입스크립트(TypeScript)
- **마이크로소프트(Microsoft)**가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어로, 2012년 말 처음 발표되었다.
- C# 언어를 창시한 **아네르스 하일스베르(Anders Hejlsberg)** 가 핵심 개발자로 참여하고 있다.
- 구글의 Angular.js 팀이 앵귤러(Angular) 버전 2를 만들면서 타입스크립트를 채택한 이후부터 널리 알려졌다.
- 앵귤러의 경쟁 프레임워크인 리액트(React.js)나 뷰(Vue.js) 조차도 타입스크립트를 사용해 개발되고 있다.

## 개발 환경 구축
### Scoop 설치
- **[관리자 모드]** 로 **Windows PowerShell** 을 실행하여 설치한다.

```shell
> Set-ExecutionPolicy RemoteSigned -scope CurrentUser 
> $env:SCOOP='C:\Scoop'
> iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
> scoop install aria2
> scoop install git
```

### Visual Studio Code 설치

```shell
> scoop bucket add extras   
> scoop install vscode    
```

### Node.js 설치

```shell
> scoop install nodejs-lts    
```

### Google Chrome Browser 설치

```shell
> scoop install googlechrome 
```

### touch 프로그램 설치
- `touch` 프로그램은 파일을 생성할 때 지정한 이름의 파일이 이미 있으면 무시하고, 없으면 해당 이름으로 파일을 만들어준다.

```shell
> scoop install touch
```

### 타입스크립트 컴파일러(`tsc`) 설치
- 타입스크립트는 Node.js 환경에서만 동작한다.
- 따라서 `npm`을 이용하여 설치를 진행한다.
- `tsc`는 다음의 의미를 동시에 포함한다.
    - **타입스크립트 컴파일러(TypeScript Compiler)**
    - **클라이언트(Client)**

```shell
> npm i -g typescript
```

```shell
> tsc hello.ts    # hello.ts를 hello.js로 변환한다.
```

### ts-node 설치
- 타입스크립트 코드(`.ts`)를 ES5 자바스크립트 코드(`.js`)로 변환하고 실행까지 하려면 `ts-node`를 설치하여 사용한다.

```shell
> npm i -g ts-node
```

```shell
> ts-node hello.ts    # hello.ts를 hello.js로 변환하고 실행한다.
```