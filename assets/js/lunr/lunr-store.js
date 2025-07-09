var store = [{
        "title": "자주 쓰는 Javascript 정리 / Javascript 문법",
        "excerpt":"자주 쓰는 Javascript 문자열 관련 처리 https://0songha0.github.io/web-dev/2022-03-10-1 Javascript로 CSS 스타일 변경 https://0songha0.github.io/web-dev/2022-03-13-1 서버 요청 전 처리 https://0songha0.github.io/web-dev/2022-03-24-1 Javascript로 HTML 요소 추가 https://0songha0.github.io/web-dev/2023-01-25-1 Javascript 정규표현식 https://0songha0.github.io/web-dev/2022-08-01-1 document ready 완료 후 실행 &lt;script&gt; document.addEventListener(\"DOMContentLoaded\", function() { // 실행 코드 }); &lt;/script&gt; 몇 초 지연 후 실행 console.log(\"시작\"); setTimeout(function() { console.log(\"3초 후 실행\");...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-02-10-1",
        "teaser": null
      },{
        "title": "문자열 관련 Javascript 문법 / Json 문자열 변환 방법",
        "excerpt":"Json 문자열 변환   javascript 객체를 json 문자열로 변환  JSON.stringify({     \"id\": \"hayoung\" })   json 문자열을 javascript 객체로 변환  JSON.parse('{\"id\":\"hayoung\"}');     문자열 추출   문자열을 잘라 배열로 만들고 첫번째 요소 반환  문자열.split(\"자를문자열\").shift();   문자열을 잘라 배열로 만들고 마지막 요소 반환  문자열.split(\"자를문자열\").pop();  ","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-03-10-1",
        "teaser": null
      },{
        "title": "Javascript로 CSS 스타일 변경 방법",
        "excerpt":"Javascript로 CSS 스타일 변경 클래스명으로 찾은 요소 클래스 삭제 const domList = document.getElementsByClassName('클래스명'); if (domList &amp;&amp; domList.length &gt; 0) { domList[0].classList.remove('클래스명'); } ID로 찾은 요소 활용 방법 const dom = document.getElementById('ID명'); // 요소의 클래스 삭제 dom.classList.remove('클래스명'); // 요소의 스타일 속성 삭제 dom.style.removeProperty('삭제할CSS속성'); // 요소의 width, height 확인 dom.clientWidth; dom.clientHeight; display...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-03-13-1",
        "teaser": null
      },{
        "title": "Javascript 서버 요청 전 처리 방법",
        "excerpt":"Javascript Validation 체크 처리 전 확인 창 띄우기 const saveYn = confirm(\"~를 등록하시겠습니까?\"); if(saveYn == false) { return; } 1자리 이상 입력 필수 const id = document.getElementById('id'); if(!id.value) { alert(\"아이디를 입력해주세요.\"); id.focus(); return; } 파라미터 처리 및 서버 요청 fost 요청 시 formData에 List 담아 보내기 const ctgryList = document.getElementsByName(\"ctgryList\");...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-03-24-1",
        "teaser": null
      },{
        "title": "멀티탭 전원 키면 컴퓨터 자동 부팅 기능 끄기",
        "excerpt":"컴퓨터 자동 부팅 기능 멀티탭 스위치 키면, 멀티탭에 연결된 컴퓨터가 자동 부팅되는 현상이 일어났습니다. 자동 부팅 도중 갑자기 종료되고, 재부팅 시 Recovery 화면으로 넘어가는 경우도 있었습니다. 결국 컴퓨터 수명이 걱정되어 이 기능을 끄기로 결심했습니다. 컴퓨터 자동 부팅 기능 끄기 바이오스 진입 ASRock 메인보드 기준, 재부팅 시 F2 또는 Del 키로...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2022-05-25-1",
        "teaser": null
      },{
        "title": "네트워크 기본 지식 / IP 주소 개념 정리",
        "excerpt":"내부망, 외부망 차이 내부망 행망 (행정망, 폐쇄망) = Internal Network 외부망 인망 (인터넷망) = External Network 공공프로젝트 등 보안이 중요한 곳에서 많이 쓰이는 용어입니다. 개발용 데스크탑으로 내부망 / 확인용 노트북으로 외부망 연결해서 가운데 모니터 하나 더 두고 스위칭하면 편하다고 합니다. 보통 모바일 앱은 내부망 연결해서 런칭하지 않습니다. 내부망 와이파이로만 사용...","categories": ["network"],
        "tags": [],
        "url": "/network/2022-05-25-1",
        "teaser": null
      },{
        "title": "IntelliJ 사용법 / IntelliJ 단축키 / IntelliJ 디버깅 방법",
        "excerpt":"IntelliJ 사용법 기존 프로젝트 열기 File &gt; Open &gt; 프로젝트폴더 선택 &gt; OK Spring 프로젝트로 인식되지 않는 경우 File &gt; Project Structure &gt; Project Settings &gt; Modules &gt; + &gt; import Module &gt; 프로젝트폴더 선택 &gt; OK &gt; import module from external model : Gradle 선택 (프로젝트에 맞게 선택) &gt;...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-05-25-1",
        "teaser": null
      },{
        "title": "DB 설계 시 참고 / 테이블 설계 및 DB 성능 튜닝 방법",
        "excerpt":"DB 테이블 설계 테이블 명명규칙 snake_case 사용하여 소문자로 작성 tb_ 등 prefix, suffix는 사용은 옛날 방식이므로 권장X 기존 테이블 명명 규칙이 있다면 따르기 (다중 규칙X) 컬럼 명명규칙 snake_case 사용하여 소문자로 작성 같은 테이블명 prefix는 가급적 생략하여 간결하게 작성 변수명 짓기 사이트 https://www.curioustore.com 변수명 짓기 사이트 이용 시 시간 단축 가능합니다....","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2022-05-26-1",
        "teaser": null
      },{
        "title": "ERDCloud 설치 / 웹 기반 무료 ERD 툴 ERDCloud 사용법",
        "excerpt":"ERDCloud 설치 https://www.erdcloud.com/myPage﻿ 메일 인증, 회원가입 후 사용이 가능합니다. ERD 장점 프로젝트 인수인계 시 용이합니다. 테이블 명세서 작성 시 ERD를 활용할 수 있습니다. 설계를 한 눈에 볼 수 있고, 테이블 변경 필요 시 좋은 참고 지표가 됩니다. ERDCloud 사용법 팀 ERD 보기 myPage &gt; TEAM &gt; 팀명 &gt; 하단 TEAM...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-05-26-1",
        "teaser": null
      },{
        "title": "IntelliJ 설정 방법",
        "excerpt":"IntelliJ 설정 방법 IntelliJ 톰캣 로그 한글 깨짐 해결 IntelliJ에서 tomcat 실행 후 services &gt; Server를 보는데 빨간 로그들 한글이 다 깨져 있었습니다. C:\\Program Files\\JetBrains\\IntelliJ IDEA 2022.1.2\\bin&gt;idea64.exe.vmoptions 위 파일을 메모장으로 열어 -XX:-OmitStackTraceInFastThrow 밑에 아래의 옵션 추가 후 IntelliJ를 재시작하여 해결하였습니다. -Dfile.encoding=UTF-8 톰캣 설정창의 VM oprions에도 같은 옵션을 적어주면 검은 톰캣...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-05-27-1",
        "teaser": null
      },{
        "title": "VirtualBox 설치 / 버추얼박스에 리눅스 CentOS 설치 후 인터넷 연결 설정",
        "excerpt":"VirtualBox 설치 https://www.virtualbox.org CentOS iso 파일 다운로드 https://www.centos.org 상단 download 메뉴 &gt; CemtOS Linux 탭 &gt; 7-2009 &gt; x86_64 클릭 &gt; ISO images available: 2번째 링크 &gt; CentOS-7-x86_64-Minimal-2009.iso 클릭하여 다운로드 &gt; VirtualBox VMs 폴더로 이동 VirtualBox에 리눅스 CentOS 설치 VirtualBox 생성 새로 만들기(N) &gt; 이름 : CentOS 입력 &gt; ISO...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-06-02-1",
        "teaser": null
      },{
        "title": "IntelliJ에서 Git 사용하는 방법",
        "excerpt":"IntelliJ에서 Git 사용법 새로운 Git 저장소에 첫 소스 올리기 신규 프로젝트 만들고 상단 VCS &gt; Enable Version Control Integration… &gt; Git 선택 &gt; OK &gt; 좌측 Git 메뉴 &gt; Unversioned Files 우클릭 &gt; Add to VCS &gt; Changes 목록 체크 &gt; Commit Message 작성 &gt; Commit &gt; 상단 Git &gt;...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-06-05-1",
        "teaser": null
      },{
        "title": "윈도우 기본 프로그램 먹통 문제 해결 방법",
        "excerpt":"윈도우 기본 프로그램 먹통 문제 해결 윈도우 기본 프로그램인 검색아이콘, 스티커메모 먹통 문제가 종종 발생합니다. Windows PowerShell을 관리자 권한으로 실행 후 아래 명령어를 실행하고 재부팅하면 해결이 됩니다. Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register \"$($_.InstallLocation)\\AppXManifest.xml\"} 기존 스티커 메모가 그대로 남아있는 걸 보니, 윈도우 기본 프로그램 재설치가 아니라 초기화 명령어인 것...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-06-08-1",
        "teaser": null
      },{
        "title": "Spring DB 연결 방법",
        "excerpt":"Spring MariaDB 연결 방법 mariadb 추가 Maven 사용 시 &lt;dependency&gt; &lt;groupId&gt;org.mariadb.jdbc&lt;/groupId&gt; &lt;artifactId&gt;mariadb-java-client&lt;/artifactId&gt; &lt;version&gt;2.0.3&lt;/version&gt; &lt;/dependency&gt; pom.xml 파일에 mariadb 라이브러리 의존성을 추가합니다. context-datasource.xml &lt;bean id=\"dataSource\" class=\"org.springframework.jdbc.datasource.SimpleDriverDataSource\"&gt; &lt;property name=\"driverClass\" value=\"org.mariadb.jdbc.Driver\" /&gt; &lt;property name=\"url\" value=\"jdbc:mariadb://DB서버명.ck39dp9w2h39.ap-northeast-2.rds.amazonaws.com:3306/DB명\" /&gt; &lt;property name=\"username\" value=\"유저명\" /&gt; &lt;property name=\"password\" value=\"비밀번호\" /&gt; &lt;/bean&gt; url은 /DB명까지 써주어야 모든 xml 쿼리문의 테이블명 앞에 DB명.을...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-06-10-1",
        "teaser": null
      },{
        "title": "앱 개발 방법 / 네이티브 앱, 하이브리드 앱, 크로스플랫폼 앱 장단점",
        "excerpt":"네이티브 앱 Android, iOS 등 각각의 언어로 개발한 앱입니다. 네이티브 앱 종류 Android Android Studio에서 java 또는 kotlin으로 개발합니다. Java와 함께 사용 가능한 코틀린은 Java로 변환되기 때문에 컴파일 속도가 느립니다. iOS Xcode에서 swift(과거에는 Object-c) 언어로 개발합니다. 네이티브 앱 장점 모든 모바일 네이티브 API 활용이 가능합니다. 3D, 비디오 프로세싱처럼 퍼포먼스가 중요한...","categories": ["app-dev"],
        "tags": [],
        "url": "/app-dev/2022-06-22-1",
        "teaser": null
      },{
        "title": "크롬 F12 개발자도구 사용법 / 크롬 디버깅 및 소스 분석 방법",
        "excerpt":"크롬 F12 디버깅 방법 HTML, Javascript 디버깅 F12 &gt; Sources 탭 &gt; HTML, Javascript 파일 선택 &gt; 소스 좌측 클릭하여 디버그포인트를 걸면 새로고침해도 사라지지 않습니다. 디버그포인트 타서 멈추면, 변수에 마우스 올리거나 Console에서 변수명 입력 시 현재 들어있는 값 확인 가능합니다. 크롬 F12 디버깅 단축키 F8 다음 디버깅 포인트로 이동 F10...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2022-06-22-1",
        "teaser": null
      },{
        "title": "Java 로깅 라이브러리 종류 / lombok 및 slf4j를 이용한 log4j2 사용 방법",
        "excerpt":"System.out.println 대신 Logger 사용 이유 System.out.println은 IO 자원을 사용하기 때문에 리소스를 많이 사용하여 성능 저하가 올 수 있습니다. 그래서 System.out.println는 운영 반영 시 직접 전부 삭제하고 올려야 하기 때문에, 로그 레벨에 따라 출력 여부를 설정할 수 있고 로깅 성능이 좋은 Logger를 사용하여 개발하는 것이 좋습니다. Java 로깅 라이브러리 종류 log4j...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-06-23-1",
        "teaser": null
      },{
        "title": "로그 테이블 및 통계 테이블 설계 시 고려사항",
        "excerpt":"로그 테이블 설계 설계 시 고려사항 키 컬럼 삭제 로그 및 통계 테이블에는 CRUD 중 생성, 읽기만 일어나기 때문에 PK가 필요 없습니다. 키 컬럼이 있으면 저장공간을 더 차지하기만 해서 좋지 않습니다. 인덱스 생성 지양 select에 비해 insert가 더 자주 일어나는 테이블에는 인덱스를 걸지 않는 것이 좋습니다. 콘텐츠 조회 로그 테이블...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2022-07-08-1",
        "teaser": null
      },{
        "title": "기획자와 협업 시 참고 / 기획 및 초기 개발 시 고려할 점",
        "excerpt":"기획자와 협업 시 참고 기획자와 협의할 때 고려하는 순서 사용자 편의성, 고객 니즈 파악 구현 가능성, 개발 방법 및 단점 개발의 용이성, 효율성 개발 우선순위 기획자를 통한 소통 개발자는 고객/타 업체/타 부서와 직접 대면하지 않고 기획자를 통해 소통해서, 변경되는 부분들에 대해 기획자가 직접 화면설계서를 관리하게 해야 불필요한 책임 소재를 넘겨받지...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2022-07-12-1",
        "teaser": null
      },{
        "title": "트리구조 카테고리 테이블 설계 방법 / 카테고리 조회 쿼리",
        "excerpt":"카테고리 테이블 설계 설계 시 고려사항 카테고리 테이블은 카테고리 추가 및 삭제가 용이하도록 트리구조 형태로 설계하는 것이 좋습니다. 성격이 다른 카테고리 분류는 테이블을 분리하여 설계하는 것이 데이터 일관성과 유지보수 측면에서 좋습니다. 카테고리 테이블 예시 제약조건 컬럼명 데이터 타입 기본값 설명 PK id INT 카테고리ID name VARCHAR(255) 카테고리명 depth INT 1...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2022-07-13-1",
        "teaser": null
      },{
        "title": "윈도우 잠금화면 배경이미지 저장 방법",
        "excerpt":"윈도우 잠금화면 배경 저장 윈도우 잠금화면 배경이미지 복사 %LocalAppData%\\Packages\\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\\LocalState 파일 탐색기에서 위 경로 입력하고 Assets 폴더를 바탕화면에 복사합니다. Assets 폴더 내 이미지 파일 포맷 변경 cmd 창 열고 아래의 명령어를 실행하여 모든 파일 이름 뒤에 .jpg를 붙입니다. cd C:\\Users\\유저명\\Desktop\\Assets ren * *.jpg 이제 마음에 들었던 배경 이미지만 따로 저장하면 됩니다....","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-07-25-1",
        "teaser": null
      },{
        "title": "Elastisearch 개념 및 장단점 / 엘라스틱서치 기초 공부",
        "excerpt":"엘라스틱서치란? 엘라스틱에서 java로 개발한 오픈소스 Restful 검색엔진입니다. 대량의 데이터를 빠르게 수집, 분석, 시각화, 분산 검색, 집계할 수 있습니다. Elastisearch 활용 범위 역 인덱스 구현으로 전체 텍스트를 색인해서 특정 단어가 포함된 문서의 위치를 빠르게 검색 로그 등 다양한 데이터 수집 및 통계 분석 역 인덱스 (=역 색인) 문서 위치에 대한 인덱스를...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-01-1",
        "teaser": null
      },{
        "title": "무선이어폰 PC 연결 방법 / 갤럭시 버즈 동굴소리 없애기",
        "excerpt":"무선이어폰 PC 연결 방법 PC에 블루투스 동글 연결 &gt; 동글 드라이버 설치 &gt; Bluetooth 설정 &gt; Bluetooth 및 기타 장치 추가 &gt; Bluetooth 검색 &gt; 연결 &gt; 완료 버즈가 검색되지 않는 경우 이어폰 양쪽을 케이스에 넣은 후 뚜껑을 닫았다 열고, 양쪽 이어폰 위를 3초 이상 길게 터치하여 블루투스 페어링 모드로...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2022-08-01-1",
        "teaser": null
      },{
        "title": "HTML input 정규표현식 및 Javascript 정규표현식 사용 예시",
        "excerpt":"HTML input 정규표현식 숫자만 입력 input &lt;input type=\"text\" oninput=\"this.value = this.value.replace(/\\D/g, '');\"&gt; 숫자만 입력받는 input 예시입니다. 소수점 가능, 숫자만 입력 input &lt;input type=\"text\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"&gt; .replace(/(\\.*)\\./g, '$1'); = .을 중복해서 입력받지 않도록 제어합니다. 가격 입력 input &lt;input id=\"price\" type=\"text\" value=\"0\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\.*)\\./g, '$1').replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\"&gt; 숫자와...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-08-01-1",
        "teaser": null
      },{
        "title": "VirtualBox CentOS7에 엘라스틱스택 설치 방법",
        "excerpt":"인터넷 연결이 가능한 CentOS7에서 wget으로 엘라스틱스택을 설치하는 방법입니다. 엘라스틱서치, 키바나, 로그스태시 모두 가장 최신 버전인 8.3.3을 설치하려 합니다. 엘라스틱서치 7.0 이상은 open-jdk가 포함되어 java 1.8이상 설치 및 JAVA_HOME 환경변수 설정이 필요 없습니다. wget 패키지 설치 sudo yum install wget wget 명령어로 rpm 파일을 다운받기 위해 yum으로 wget 패키지를 설치합니다. wget...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-03-1",
        "teaser": null
      },{
        "title": "리눅스 네트워크 연결 테스트 명령어 / 네트워크 상태 확인",
        "excerpt":"서버 IP 및 도메인 확인 서버 비공인 IP 확인 ifconfig 또는 ip addr eth0:의 inet 오른쪽에 내부 IP가 나옵니다. 서버 공인 IP 확인 curl ifconfig.me 인터넷 연결이 안 되는 서버에서는 Unknown Error가 나올 수 있습니다. 정상 응답 예시 211.188.35.IP[root@서버명 ~]# 해당 IP가 현재 서버의 공인 IP입니다. 보통 운영서버는 Private 망...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-08-03-1",
        "teaser": null
      },{
        "title": "Logstash로 MariaDB 데이터 수집 후 엘라스틱서치 저장 방법 / 로그스태시 사용법",
        "excerpt":"엘라스틱서치 매핑 종류 동적 매핑 logstash로 데이터 수집 시 인덱스가 없다면 기본 매핑으로 엘라스틱서치에서 인덱스를 자동 생성해주는 것입니다. 기본 매핑 종류 숫자 long 타입 날짜 date 타입 문자열 text 타입 + keyword 타입 (멀티 필드) 명시적 매핑 개발자가 미리 인덱스 매핑정보를 정의해두는 것입니다. 인덱스 규모가 커질수록 동적 매핑보다 명시적 매핑이...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-06-1",
        "teaser": null
      },{
        "title": "리눅스 서비스 관리 방법 / systemctl 명령어 정리",
        "excerpt":"서비스 사용 방법 서비스 상태 확인 systemctl status 서비스명 서비스 시작 systemctl start 서비스명 서비스 정지 systemctl stop 서비스명 서비스 재시작 systemctl restart 서비스명 서비스 자동시작 설정 자동 시작 여부 확인 systemctl is-enabled 서비스명 자동 시작 설정 systemctl enable 서비스명 enable 해두면 재부팅 시마다 수동으로 시작하지 않아도 됩니다. 자동 시작...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-08-06-1",
        "teaser": null
      },{
        "title": "엘라스틱서치 Query String, Query DSL 문법 정리",
        "excerpt":"URL 주소 뒤에 한 줄로 이어붙여서 쿼리문을 작성하는 쿼리 스트링보다 REST API 요청 본문 안에 JSON 형태로 쿼리를 작성하는 쿼리 DSL이 가독성 좋습니다. 키바나에서 쿼리 테스트 방법 좌측 메뉴 &gt; Management &gt; Dev Tools &gt; Console에서 쿼리 DSL 실행 가능합니다. 클러스터 및 노드 관련 쿼리 클러스터 설정값 확인 쿼리 GET...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-10-1",
        "teaser": null
      },{
        "title": "엘라스틱서치 검색 쿼리 종류 및 사용 예시",
        "excerpt":"엘라스틱서치 검색 방식 쿼리 컨텍스트 유사도 스코어를 계산해 검색어와 연관성이 높은 도큐먼트들을 매칭해줍니다. 필터 컨텍스트 검색어를 참/거짓 결과로 제공할 뿐, 유사도 스코어는 0.0으로 나옵니다. 불필요한 스코어 계산을 줄여서 쿼리 속도와 검색 효율을 높일 수 있습니다. 엘라스틱서치 검색 쿼리 종류 전문 쿼리 전문 검색에 사용하며, 인덱스 매핑 시 텍스트 타입으로 매핑...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-16-1",
        "teaser": null
      },{
        "title": "리눅스 파일 및 폴더 관련 명령어",
        "excerpt":"파일 및 폴더 관련 명령어 파일 편집 명령어 https://0songha0.github.io/op/2022-08-23-1 파일 압축 관련 명령어 https://0songha0.github.io/op/2024-03-07-1 전체 파일에서 문자열 검색 grep -rn 검색어 * 현재 폴더 아래의 모든 파일들 내에서 텍스트를 검색합니다. *를 파일명으로 바꾸면 한 파일 내에서 텍스트 검색도 가능합니다. -n 옵션으로 라인 번호도 함께 출력합니다. 특정 확장자 파일에서 문자열 검색...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-08-16-1",
        "teaser": null
      },{
        "title": "티스토리 블로그 목록 더보기 무한스크롤 기능 구현 방법",
        "excerpt":"무한스크롤 기능 사용자의 스크롤이 페이지 하단에 도달했을 때 다음 페이지 목록을 추가하는 것입니다. 무한스크롤 장점 일반 페이징보다 더 편한 사용자 경험을 제공합니다. 무한스크롤 단점 footer에 도달하기 어렵습니다. 사용자가 원치 않는 페이징이 발생할 수 있습니다. 이미지 등 보여줘야 하는 리소스가 많은 경우, 페이지가 점점 느려질 수 있습니다. 티스토리 블로그 무한스크롤 구현...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-08-16-1",
        "teaser": null
      },{
        "title": "엘라스틱서치 검색 유사도 높이는 방법 / 인덱스 템플릿 생성 / 형태소 분석 테스트 쿼리",
        "excerpt":"형태소 분석기 (Analyzer) 형태소 분석기 구성요소 캐릭터 필터 불필요한 문자열 제거 토크나이저 문자열을 토큰으로 분리 토큰 필터 토큰 변경/추가/삭제 엘라스틱서치는 글로벌 오픈소스라서 영어 문법에 특화된 standard 분석기가 기본 분석기로 적용되어 있습니다. standard 분석기는 한글을 단어가 아닌 공백으로만 분리하여 저장하기 때문에 한글 분석이 안 됩니다. 한글 검색 정확도를 높이려면 한글 형태소...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-18-1",
        "teaser": null
      },{
        "title": "공공데이터 활용 앱 개발 / 공공데이터 사이트 종류",
        "excerpt":"공공데이터란? 국민 편익 향상과 일자리 창출을 목적으로 정부에서 제공하는 양질의 다양한 데이터들입니다. 공공데이터 포털 사이트에서 파일데이터(CSV), 오픈 API 등으로 제공받을 수 있습니다. 누구나 영리 목적으로 공공데이터 활용 앱/웹 서비스를 만들 수 있습니다. 파일데이터(CSV) 인증키가 필요 없지만 최신 데이터를 제공받기 힘듭니다. CSV 데이터는 쉼표(,)로 Separator(구분)됩니다. 오픈 API XML, JSON 등의 데이터...","categories": ["app-dev"],
        "tags": [],
        "url": "/app-dev/2022-08-22-1",
        "teaser": null
      },{
        "title": "엘라스틱스택 모니터링 방법 / 키바나 화면 종류",
        "excerpt":"Logstash 모니터링 기능 활성화 로그스태시 설정파일 수정 sudo vi /etc/logstash/logstash.yml yml 설정파일 하단 주석을 풀고 아래와 같이 변경합니다. xpack.monitoring.enabled: true xpack.monitoring.elasticsearch.hosts: [\"http://localhost:9200\"] Logstash 재실행으로 변경한 설정 적용 시 키바나 엘라스틱스택 모니터링 화면에 로그스태시도 나옵니다. 키바나 화면 연결 https://키바나IP:5601 웹 브라우저에서 키바나 화면을 볼 수 있습니다. 키바나 엘라스틱스택 모니터링 화면 Management...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-23-1",
        "teaser": null
      },{
        "title": "리눅스 파일 편집 명령어 정리 / vi, vim 사용법",
        "excerpt":"vi, vim 사용법 vi 편집기 실행 vi 파일명 편집모드로 변경 Insert 1번 누르면 입력(INSERT), 2번 누르면 수정(REPLACE) 모드가 됩니다. 명령모드로 변경 esc 다른 모드에서 vi 편집기 기본모드로 돌아옵니다. 실행모드로 변경 : 명령모드에서 클론(:) 후 원하는 명령어를 입력할 수 있습니다. 파일 저장, 종료 파일 저장 :w 파일 쓰기 권한 없는 경우...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-08-23-1",
        "teaser": null
      },{
        "title": "리눅스 서버시간 한국시간으로 변경 / 리눅스 타임존 설정 방법",
        "excerpt":"리눅스 타임존 변경 이유 리눅스 서버 생성 시 타임존 기본 설정은 국제표준시(UTC)로, 한국시간보다 9시간 빠릅니다. 로그파일 로그 시간, 파일/폴더 생성 시간 등이 현재 시간에서 -9시간으로 나와 직관적이지 않고 헷갈립니다. 크론탭(Crontab)도 원하는 시간에 동작하지 않을 수 있다 하여 리눅스 타임존을 한국표준시(KST, GMT+9)로 변경했습니다. 리눅스 서버시간 확인 방법 현재 서버시간 확인 date...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-08-26-1",
        "teaser": null
      },{
        "title": "엘라스틱서치 인덱스 백업 및 복원 방법 / 스냅샷 생성 및 삭제 쿼리",
        "excerpt":"스냅샷 레포지토리 폴더 생성 엘라스틱서치 설정파일 폴더로 이동 cd /etc/elasticsearch 스냅샷 레포지토리 폴더 생성 mkdir -p repo/레포지토리명 스냅샷 레포지토리 폴더 쓰기 권한 부여 chmod 777 -R repo -R 옵션을 주면 하위 폴더들에도 권한이 부여됩니다. 스냅샷 레포지토리 등록 엘라스틱서치 설정파일 수정 vi /etc/elasticsearch/elasticsearch.yml 클러스터 모든 마스터 노드, 데이터 노드의 elasticsearch.yml 파일에서...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-29-1",
        "teaser": null
      },{
        "title": "엘라스틱서치 노드 추가 / 엘라스틱서치 외부 접속 확인 방법",
        "excerpt":"엘라스틱서치 노드 추가 방법 elasticsearch.yml 파일 수정 vi /etc/elasticsearch/elaticsearch.yml 엘라스틱서치 노드 추가 시 elasticsearch.yml 파일 수정 후 엘라스틱서치 재시작해야 반영됩니다. 모든 노드는 폴더, 파일 구조가 같아야 합니다. 1번 노드 설정 예시 cluster.name: my-appliction # 클러스터명 통일 node.name: node-1 # 노드명 중복 불가 bootstrap.memory_lock: true # 물리 메모리 미리 할당 설정...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-08-31-1",
        "teaser": null
      },{
        "title": "자주 쓰는 리눅스 명령어 정리 / 리눅스 CentOS 사용법",
        "excerpt":"리눅스 명령어 정리 서버 정보 확인 및 상태 관리 https://0songha0.github.io/op/2022-09-02-1 서버시간 확인 및 변경 https://0songha0.github.io/op/2022-08-26-1 네트워크 관련 https://0songha0.github.io/op/2022-08-03-1 방화벽 포트 허용 https://0songha0.github.io/op/2022-09-04-1 서비스 관리 https://0songha0.github.io/op/2022-08-06-1 파일 및 폴더 관련 https://0songha0.github.io/op/2022-08-16-1 패키지 설치 https://0songha0.github.io/op/2023-01-31-1 기타 리눅스 명령어 명령어 옵션 목록 및 설명 보기 명령어 --help 계정 전환 sudo su - 계정명...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-08-31-1",
        "teaser": null
      },{
        "title": "리눅스 서버 컴퓨터 정보 확인 / 서버 상태 관리 명령어",
        "excerpt":"서버 컴퓨터 사양 확인 서버 비트 확인 uname -m 서버 CPU가 32비트(i686 또는 i386)인지, 64비트(x86_64)인지 확인할 수 있습니다. CPU 사양 확인 lscpu Model name:을 보면 어떤 CPU인지 알 수 있고, CPU(s):는 전체 논리적 CPU 개수입니다. RAM 메모리 사양 확인 free -h -h 옵션은 읽기 쉬운 단위로 출력합니다. -h 옵션을 제거했을...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-09-02-1",
        "teaser": null
      },{
        "title": "리눅스 서버 방화벽 포트 허용 방법 / firewall-cmd 명령어 사용법",
        "excerpt":"firewall-cmd 사용법 서버 방화벽 활성화 여부 확인 firewall-cmd --list-all 리눅스 서버 내부 방화벽 활성화 여부 확인 명령어입니다. 빨간 글씨로 FirewallD is not running 이라고 나오면 서버 내부 방화벽이 비활성화 상태인 것입니다. 방화벽 포트 허용 방법 firewall-cmd --permanent --zone=public --add-port=포트/tcp firewall-cmd --permanent --zone=public --add-service=elasticsearch firewall-cmd --reload firewall-cmd --list-ports 위 명령어를 순차적으로...","categories": ["op"],
        "tags": [],
        "url": "/op/2022-09-04-1",
        "teaser": null
      },{
        "title": "Postman 설치 / 무료 API 테스트 툴 포스트맨 사용법 / 포스트맨 오류 해결",
        "excerpt":"Postman 설치 https://www.postman.com/downloads 포스트맨 사용법 1. 포스트맨 실행 설치한 Postman을 실행합니다. 2. 회원가입, 로그인 이메일, 이름, 암호 입력하여 회원가입 후 로그인합니다. 3. workspace 생성 상단 Workspaces에서 Create workspace로 새 워크스페이스(프로젝트)를 생성하거나 My Workspace를 선택합니다. 4. Collection 생성 Create collection으로 새 콜렉션(Request 그룹)을 생성합니다. 5. Request 생성 New &gt; HTTP Request...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2022-09-08-1",
        "teaser": null
      },{
        "title": "JAVA에서 엘라스틱서치 REST API 호출 방법",
        "excerpt":"JAVA HttpURLConnection 방식 JDK에서 기본 지원하는 HttpURLConnection 객체로 Rest API를 호출하는 통신 방식입니다. OkHttp를 사용하는 Retrofit 라이브러리로 개발하면 더 간결하고 가독성 좋아집니다. 포스트맨으로 엘라스틱서치 Rest API 호출이 가능하니까 시도해 볼까 했으나, 한 번에 다중 노드에 요청할 수 있는 엘라스틱서치 지원 방식 중 하나로 구현할 예정입니다. Transport Client 방식 엘라스틱서치에서 지원하는...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2022-09-16-1",
        "teaser": null
      },{
        "title": "JAVA에서 HTML을 PDF 파일로 변환 및 다운로드하는 방법",
        "excerpt":"wkhtmltopdf 웹 페이지 URL의 HTML, javascript를 해석하여 PDF 파일로 변환하는 실행파일입니다. jquery는 PDF로 변환되지 않고, javascript로 그린 화면만 정상 변환됩니다. wkhtmltopdf 설치 방법 https://wkhtmltopdf.org/downloads.html 윈도우 exe, 리눅스 rpm 등 OS에 맞는 설치파일로 wkhtmltopdf 실행파일을 설치합니다. rpm 파일 설치 yum localinstall 파일명.rpm 리눅스 서버의 경우, wget URL 명령어로 rpm 파일을 다운받고...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-09-28-1",
        "teaser": null
      },{
        "title": "프로젝트 WBS 작성 시 개발 일정 산출 방법 / 효율적인 개발 방법",
        "excerpt":"WBS 일정 산출 방법 DB 설계 기간 20~30개 테이블 규모의 작은 프로젝트라도 DB 설계에는 충분한 시간이 필요합니다. 화면설계서 기능 상세 조율 기간, 기획 변동성을 고려하여 2~3주 이상 잡아두는 것이 좋습니다. 개발 일정 산출 방법 일정 산출을 위한 일정이 필요합니다. “제가 일정 산출해 보고 얼마나 걸릴지 말씀드리겠습니다.” 기획자에게 요청하여 전달받은 기능정의서...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2022-10-05-1",
        "teaser": null
      },{
        "title": "로그인 인증 방식 종류 / 로그인 기능 구현 방법 및 장단점",
        "excerpt":"쿠키 기반 로그인 사용자의 로그인 정보를 쿠키에 저장하여 인증을 유지합니다. 쿠키는 브라우저에서 볼 수 있고, 사용자가 다른 유저 ID로 변경할 수 있어 보안에 취약합니다. 세션 기반 로그인 사용자의 로그인 정보를 세션에 저장하고, 세션 ID는 쿠키에 저장하여 인증을 유지합니다. 세션 로그인 단점 세션은 서버 메모리에 저장되어야 하므로, 사용자가 증가함에 따라 서버에...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-10-21-1",
        "teaser": null
      },{
        "title": "스프링 시큐리티 사용 방법",
        "excerpt":"스프링 시큐리티 적용 방법 스프링 시큐리티 의존성 추가 implementation 'org.springframework.boot:spring-boot-starter-security' build.gradle 파일에 위 Dependency를 추가하면 자동으로 스프링 시큐리티가 자동으로 설정됩니다. 스프링 시큐리티 비활성화 방법 @SpringBootApplication(exclude = { SecurityAutoConfiguration.class }) public class 프로젝트명Application { public static void main(String[] args) { SpringApplication.run(SpringBootSecurityApplication.class, args); } } 위와 같이, 어플리케이션 main에서 SecurityAutoConfiguration을 제외 처리하면...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-10-23-1",
        "teaser": null
      },{
        "title": "SpringBoot에서 Interceptor 활용 세션 로그인 구현 방법",
        "excerpt":"Spring 세션 로그인 개발 LoginInterceptor.java 생성 import com.chunjae.archive_cms.common.util.SessionUtil; import lombok.extern.slf4j.Slf4j; import org.springframework.web.servlet.HandlerInterceptor; import org.springframework.web.servlet.ModelAndView; import javax.servlet.http.HttpServletRequest; import javax.servlet.http.HttpServletResponse; @Slf4j public class LoginInterceptor implements HandlerInterceptor { @Override public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception { if (SessionUtil.isLogin()) { return true; } else { // 로그인이 되어있지 않은 경우...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-10-24-1",
        "teaser": null
      },{
        "title": "JAVA 이미지 리사이징 유틸 개발 / 썸네일 및 워터마크 이미지 생성 방법",
        "excerpt":"썸네일 및 워터마크 이미지 생성 JAVA 이미지 리사이징 유틸 import lombok.extern.slf4j.Slf4j; import org.springframework.stereotype.Component; import javax.imageio.ImageIO; import java.awt.*; import java.awt.image.BufferedImage; import java.io.File; @Slf4j @Component public class ImageUtil { // 이미지 리사이징 함수 public File makeResizeImg(File sourceFile, Integer width, Integer height) throws Exception { // 확장자 String fileExt = getFileExt(sourceFile); BufferedImage sourceImage...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-12-07-1",
        "teaser": null
      },{
        "title": "HTML 유튜브 영상 삽입 및 iframe 오류 해결 / 유튜브 썸네일 미리보기 방법",
        "excerpt":"유튜브 영상 삽입 방법 HTML 유튜브 영상 iframe 삽입 &lt;iframe src=\"https://youtube.com/embed/${youtubeId}\" width=\"100%\" height=\"100%\" id=\"video-preview\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt; 유튜브 영상은 iframe 태그로 쉽게 HTML에 삽입할 수 있습니다. 유튜브 iframe 오류 해결 if (link.includes(\"youtube.com/watch?v=\")) { link = \"https://www.youtube.com/embed/\" + link.split(\"=\")[1]; } ‘www.youtube.com에서 연결을 거부했습니다.’...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-12-12-1",
        "teaser": null
      },{
        "title": "Jquery로 로딩마스크 구현 방법 / 로딩중 표시 기능 개발",
        "excerpt":"Jquery로 로딩마스크 구현 로딩마스크 적용 화면 예시 엑셀 일괄등록 fetch 요청이 끝날 때까지, 화면이 어두워지고 가운데 로딩중 CSS가 동글뱅이로 계속 돌게 됩니다. JSP head에 include &lt;link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"&gt; &lt;!-- Jquery 사용 시 추가 --&gt; &lt;link rel=\"stylesheet\" href=\"https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css\"&gt; &lt;script src=\"https://code.jquery.com/jquery-1.12.4.min.js\" integrity=\"sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=\" crossorigin=\"anonymous\"&gt;&lt;/script&gt; &lt;script src=\"https://code.jquery.com/ui/1.13.1/jquery-ui.js\"&gt;&lt;/script&gt; font-awesome(로딩중 CSS), jquery를 헤더에 추가합니다. 공통 CSS...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2022-12-13-1",
        "teaser": null
      },{
        "title": "기본 포트 목록 정리",
        "excerpt":"기본 포트 목록                  구분       기본 포트                       SSH, SFTP       22                 FTP       21                 HTTP       80                 HTTPS       443                 MySQL, MariaDB       3306                 MSSQL       1433          ","categories": ["network"],
        "tags": [],
        "url": "/network/2023-01-03-1",
        "teaser": null
      },{
        "title": "HTML 테이블 Row 순서 이동 기능 개발 / TableDnD 사용법",
        "excerpt":"TableDnD 사용법 TableDnD 라이브러리 추가 &lt;head&gt; &lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/TableDnD/0.9.1/jquery.tablednd.js\" integrity=\"sha256-d3rtug+Hg1GZPB7Y/yTcRixO/wlI78+2m08tosoRn7A=\" crossorigin=\"anonymous\"&gt;&lt;/script&gt; &lt;/head&gt; table이 있는 HTML 헤더에 javascript TableDnD 라이브러리를 추가합니다. HTML table 예시 &lt;table id=\"table-1\" class=\"table\"&gt; &lt;colgroup&gt; &lt;col width=\"6%\"&gt; &lt;col width=\"20%\"&gt; &lt;col width=\"9%\"&gt; &lt;col width=\"9%\"&gt; &lt;col width=\"*\"&gt; &lt;col width=\"8%\"&gt; &lt;col width=\"8%\"&gt; &lt;/colgroup&gt; &lt;thead&gt; &lt;tr&gt; &lt;th&gt;이동&lt;/th&gt; &lt;th&gt;상위 분류 이름&lt;/th&gt; &lt;th&gt;순서&lt;/th&gt; &lt;th&gt;ID&lt;/th&gt; &lt;th&gt;이름&lt;/th&gt;...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-01-04-1",
        "teaser": null
      },{
        "title": "HTML 테이블 엑셀 다운로드 기능 개발 / Sheetjs 사용법",
        "excerpt":"Sheetjs 사용법 Sheetjs 라이브러리 추가 &lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js\"&gt;&lt;/script&gt; head에 Sheetjs 라이브러리를 추가합니다. 엑셀 다운로드용 테이블 생성 &lt;table id=\"excelTable\" style=\"display:none;\"&gt; &lt;thead&gt; &lt;tr&gt; &lt;th&gt;분류1&lt;/th&gt; &lt;th&gt;분류2&lt;/th&gt; &lt;th&gt;분류3&lt;/th&gt; &lt;th&gt;분류4&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody id=\"excelTableBody\"&gt; &lt;/tbody&gt; &lt;/table&gt; tbody를 유동적으로 변경하고, 엑셀 다운로드하기 위한 HTML table을 생성합니다. 엑셀 다운로드 기능 구현 function downloadExcel() { const errMsg = \"엑셀파일...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-01-05-1",
        "teaser": null
      },{
        "title": "네트워크 HTTP 응답 상태코드 정리",
        "excerpt":"1xx (정보) 요청이 수신되었으며 처리가 계속됩니다. 주로 임시적인 상태 메시지에 사용됩니다. 2xx (성공) 요청이 성공적으로 수행되었습니다. 200 요청 성공, 응답 반환 3xx (리다이렉션) 요청을 완료하기 위해 추가 동작이 필요합니다. 주로 리소스의 위치가 변경되었을 때 사용됩니다. 4xx (클라이언트 요청 오류) 클라이언트 요청에 오류가 있습니다. 잘못된 요청이거나 권한이 없는 요청일 수 있습니다....","categories": ["network"],
        "tags": [],
        "url": "/network/2023-01-09-1",
        "teaser": null
      },{
        "title": "파이썬 개발환경 종류",
        "excerpt":"파이썬 개발환경 종류   파이참 (PyCharm)  파이썬 개발에 특화된 통합 개발 환경입니다.   VSCode (Visual Studio Code)  VSCode에서도 확장 기능 설치를 통해 파이썬 개발이 가능합니다.  좌측 상단 EXTENSIONS에서 Python 설치하고 EXPLORER에서 .py 파일 생성하여 개발 후 실행 시 지침대로 Microsoft Store에서 Python 인터프리터 다운하면 됩니다.   온라인 개발 환경  https://replit.com/new/python-java3  ","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-01-10-1",
        "teaser": null
      },{
        "title": "Spring MySQL 이전글, 다음글 조회 기능 개발",
        "excerpt":"MySQL 쿼리 이전글 조회 쿼리 &lt;select id=\"getPrevContentId\" parameterType=\"java.util.HashMap\" resultType=\"java.util.HashMap\"&gt; SELECT max(id) prevId FROM 테이블명 WHERE id &lt;![CDATA[&lt;]]&gt; #{현재글Id} ORDER BY create_date DESC LIMIT 1 &lt;/select&gt; 다음글 조회 쿼리 &lt;select id=\"getNextContentId\" parameterType=\"java.util.HashMap\" resultType=\"java.util.HashMap\"&gt; SELECT min(id) nextId FROM 테이블명 WHERE id &lt;![CDATA[&gt;]]&gt; #{현재글Id} ORDER BY create_date DESC LIMIT 1 &lt;/select&gt; Controller 이전글...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-01-17-1",
        "teaser": null
      },{
        "title": "Javascript로 HTML 요소 추가 방법",
        "excerpt":"Javascript로 HTML 요소 추가 innerHTML 사용 예시 let tableHtml = ''; if(data.resultList.length &gt; 0) { for (const map of data.resultList) { tableHtml += '&lt;li onclick=\"selectInternalSrc(' + map.id + ', \\'' + map.name + '\\');\"&gt;'; tableHtml += ' &lt;button&gt;' + map.name + '&lt;/button&gt;'; tableHtml += '&lt;/li&gt;'; } } else { tableHtml...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-01-25-1",
        "teaser": null
      },{
        "title": "리눅스 패키지 매니저 종류 / 패키지 설치 방법",
        "excerpt":"리눅스 패키지란? 리눅스에서는 설치 파일을 ‘패키지’라고 합니다. 패키지 파일 종류 리눅스 계열 리눅스 종류 지원되는 패키지 파일 Redhat 계열 CentOS 등 rpm Debian 계열 우분투 등 deb 패키지 매니저로 설치 시 장점 패키지 매니저는 리눅스 기본 디렉터리 구조에 맞게 실행파일, 설정파일, 로그폴더 등을 나누어 설치해줍니다. 환경 변수 설정이나 서비스 등록을...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-01-31-1",
        "teaser": null
      },{
        "title": "AWS EC2 엘라스틱서치 운영서버 로드밸런서 생성 및 보안그룹 설정 방법",
        "excerpt":"엘라스틱서치 서버 로드밸런서 생성 생성 예정 로드밸런서 1) 엘라스틱서치용 로드밸런서 로드밸런서1 DNS name:80으로 들어오는 요청을 엘라스틱서치서버:9200으로 포워딩하는 ALB 로드밸런서1 2) 키바나용 로드밸런서 로드밸런서2 DNS name:80으로 들어오는 요청을 엘라스틱서치서버:5600으로 포워딩하는 ALB 로드밸런서2 로드밸런서 종류 CLB 이전 세대의 로드 밸런서로서, 현재는 사용이 권장되지 않습니다. ALB HTTP 및 HTTPS 트래픽을 처리합니다. 웹 애플리케이션을...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-02-01-1",
        "teaser": null
      },{
        "title": "AWS EC2 리눅스 운영서버에 엘라스틱서치, 키바나 설치 방법",
        "excerpt":"현재 엘라스틱서치 운영서버는 private 한 AWS VPC 망 내에 있어서 배스천서버를 통해야만 들어올 수 있기 때문에 인터넷 연결 및 yum 명령어 사용이 불가합니다. 그래서 윈도우로 엘라스틱서치 홈페이지에서 rpm 파일 다운 후 SFTP 업로드하는 방법을 이용하였습니다. 엘라스틱서치 운영서버 로드밸런서 생성 방법 https://0songha0.github.io/aws/2023-02-01-1 엘라스틱서치 설치 방법 엘라스틱서치 rpm 파일 업로드 엘라스틱서치, 키바나...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2023-02-01-1",
        "teaser": null
      },{
        "title": "운영서버 접속 방법 / PuTTY, 파일질라, DBeaver 운영 연결 방법",
        "excerpt":"VPN이란? VPN VPN으로 보안을 강화한 운영 서버는 VPN (가상 사설망) 연결이 되어야 접속할 수 있습니다. VPN은 네트워크끼리 연결하는 IPsec VPN, 클라이언트와 네트워크를 연결하는 SSL VPN으로 나뉩니다. 위 VPN 종류에 따라 아웃바운드 포트 방화벽 허용 정책이 달라질 수 있습니다. 방화벽 허용 요청 사내 망에서 외부로 나가는 포트가 막혀있다면, 아래 정보를 사내...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-02-01-1",
        "teaser": null
      },{
        "title": "PuTTY 설치 / 리눅스 서버 SSH 연결 시 PuTTY 사용법",
        "excerpt":"PuTTY 설치 https://putty.softonic.kr PuTTY 사용법 개발서버 SSH 연결 방법 1. 푸티(PuTTY)를 설치 후 실행합니다. 2. Session &gt; Host Name에 유저명@개발서버IP를 입력하고, Port에는 22를 입력합니다. (유저명@은 필수가 아닙니다.) 3. Connection &gt; SSH &gt; Auth &gt; Browse… &gt; 개발서버 인증서 (프로젝트명-dev.ppk)를 삽입합니다. 4. Session &gt; Saved Sessions에 ‘프로젝트명_dev’ 입력 후 Save 합니다....","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-02-01-1",
        "teaser": null
      },{
        "title": "리눅스 rpm, yum 사용법 / CentOS 등 Redhat 계열 패키지 매니저",
        "excerpt":"rpm 사용법 패키지 파일 설치 rpm -i 패키지파일명.rpm yum 사용법 yum 명령어는 인터넷이 가능한 환경에서만 사용 가능합니다. 설치 또는 업데이트 설치 yum -y install 패키지명 -y 옵션은 모든 질문에 y를 자동 입력하며 설치해 줍니다. 설치된 패키지 삭제 yum remove 패키지명 설치된 모든 패키지 목록 yum list all 기존 설치한 패키지...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-02-02-1",
        "teaser": null
      },{
        "title": "파이썬 기초 문법 정리 / 코딩테스트 언어 복습",
        "excerpt":"A4용지에 쓰면서 복습하면 더 기억에 잘 남습니다. 파이썬 자료형 파이썬 기본 자료형 종류 int, float, str, tuple Immutable 객체 (변경 불가능) list, dict, set Mutable 객체 (변경 가능) list, dict, tuple iterable 객체 (반복 가능) int (정수형) 코딩테스트에서는 대부분 실수보다 정수를 다루는 문제가 출시됩니다. 수 연산 방법 # 더하기 a...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-02-05-1",
        "teaser": null
      },{
        "title": "파일질라 설치 / 리눅스 서버 파일 업로드 시 FileZilla 사용법",
        "excerpt":"파일질라 설치 https://filezilla-project.org/ FileZilla 사용법 개발서버 SFTP 연결 방법 파일 &gt; 사이트 관리자 &gt; New site &gt; 이름 바꾸기 &gt; 서버명 입력 후 우측에 아래와 같이 서버 정보를 입력하고 연결합니다. 프로토콜(t) SFTP - SSH File Transfer Protocol 선택 호스트(H) 개발서버IP 입력 포트(P) 22 입력 로그온 유형(L) 키 파일 선택 사용자(U)...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-02-05-1",
        "teaser": null
      },{
        "title": "Spring 어노테이션 정리",
        "excerpt":"클래스 레벨 어노테이션 @RestController HTTP 응답 본문을 직렬화하여 반환하므로, RESTful API를 제공하는 컨트롤러 클래스에 지정하면 좋습니다. 일반 @Controller와 달리 내부적으로 모든 method에 @ResponseBody가 붙게 됩니다. @Component Bean을 따로 등록하지 않아도 클래스 자체를 스프링 Bean으로 자동 등록합니다. 컨트롤러 매핑 어노테이션 @RequestMapping @RequestMapping(value=\"/\", method = RequestMethod.GET) @RequestMapping(value=\"/\", method = RequestMethod.POST) @RequestMapping(value=\"/\", method...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-02-08-1",
        "teaser": null
      },{
        "title": "클라우드 서버 장점 / AWS EC2, Naver Cloud Server 장점",
        "excerpt":"클라우드 서버 장점 서버 증축에 걸리는 시간을 몇 개월에서 몇 시간으로 크게 단축할 수 있습니다. 사용자 수에 따라 쉽게 서버를 축소 및 확대할 수 있어 편리합니다. 실물 서버를 관리하는 공간과 에어컨 가동하여 온도 낮추는 비용이 절감됩니다. AWS는 베스핀글로벌 등 계약한 파트너사의 운영서버 구축 및 보안 관리 서비스를 받을 수도 있습니다....","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-02-10-1",
        "teaser": null
      },{
        "title": "AWS EC2 서버 생성 방법 / EC2 인스턴스 유형 / AWS 보안그룹 설정",
        "excerpt":"AWS EC2 서버 생성 방법 EC2 &gt; 인스턴스 &gt; 인스턴스 시작 이름 EC2 인스턴스명 입력 (한글 가능) AMI 운영체제 등이 설치된 이미지 템플릿입니다. Quick Start &gt; Amazon Linux 선택, Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type 선택, 64-bit (x86) 선택 인스턴스 유형 EC2 인스턴스 유형 선택...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-02-14-1",
        "teaser": null
      },{
        "title": "자주 쓰는 Mybatis 정리 / MariaDB bulk insert, update 방법",
        "excerpt":"Select 방법 Mybatis select 예시 &lt;select id=\"get쿼리명\" parameterType=\"java.util.HashMap\" resultType=\"java.util.HashMap\"&gt; SELECT a.컬럼명1 &lt;if test=\"파라미터1 != null and 파라미터1 != ''\"&gt; , (SELECT 컬럼명 FROM 테이블명2 WHERE id = #{파라미터1}) AS 컬럼명2 &lt;/if&gt; FROM 테이블명 a WHERE &lt;choose&gt; &lt;when test=\"파라미터2 != null and 파라미터2 != ''\"&gt; a.Key컬럼 = #{파라미터2} &lt;/when&gt; &lt;otherwise&gt; a.Key컬럼...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-02-14-1",
        "teaser": null
      },{
        "title": "파이썬 함수 및 라이브러리 사용법 정리",
        "excerpt":"파이썬 함수 함수 정의 방법 def 함수명(매개변수1, 매개변수2): # 실행코드 return 반환값 함수 바깥의 전역 변수에 접근할 수 있으며, 반환 값은 생략 가능합니다. 함수 호출 방법 함수명(매개변수1, 매개변수2) 함수명(매개변수2=값, 매개변수1=값) 변수명을 지칭하여 값을 넘겨주면 매개변수 순서가 달라도 됩니다. 람다 함수 사용 방법 # 람다 함수 정의 및 실행 (lambda 매개변수1,...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-02-15-1",
        "teaser": null
      },{
        "title": "공통코드 테이블 설계 / 공통코드 테이블로 selectbox option 조회 방법",
        "excerpt":"공통코드 테이블 설계 공통코드그룹 테이블 예시 제약조건 컬럼명 데이터 타입 기본값 설명 PK cd VARCHAR(10) 공통코드그룹CD name VARCHAR(255) 공통코드그룹명 del_yn CHAR(1) 'N' 삭제 여부 공통코드 테이블 예시 제약조건 컬럼명 데이터 타입 기본값 설명 PK cd VARCHAR(10) 공통코드CD name VARCHAR(255) 공통코드명 FK group_cd VARCHAR(10) 공통코드그룹CD sort INT 1 정렬순서 use_yn char(1)...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2023-02-16-1",
        "teaser": null
      },{
        "title": "DBeaver 설치 / 무료 데이터베이스 관리 툴 DBeaver 사용법",
        "excerpt":"DBeaver 설치 https://dbeaver.io/download DBeaver 사용법 DB 연결 생성 좌측 Database Navigator 상단 새 데이터베이스 연결 아이콘 &gt; DB 종류 선택 &gt; 다음 &gt; Server Host (DB서버명).ck39dp9w2h39.ap-northeast-2.rds.amazonaws.com Database DB명 (필수 아님) Username 계정명 Password 암호 위 예시 참고하여 DB 정보 입력 &gt; Test Connection 시 Connected 나오면 &gt; 확인 DB 버전...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-02-16-1",
        "teaser": null
      },{
        "title": "이미지로 PDF 생성 방법 / PDF를 이미지로 변환 방법",
        "excerpt":"이미지로 PDF 생성 방법 Microsoft Word 사용 1. 페이지 여백 제거 상단 레이아웃 탭 &gt; 여백 &gt; 사용자 지정 여백 &gt; 위쪽/아래쪽/왼쪽/오른쪽/제본용 여백 0cm 입력 &gt; 확인 &gt; 무시 2. 이미지 삽입 상단 삽입 탭 &gt; 그림 &gt; 이미지 다중 선택 &gt; 삽입 순서는 자동 정렬되어 삽입됩니다. 3. PDF 저장...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-02-16-2",
        "teaser": null
      },{
        "title": "리눅스 톰캣 설치 및 설정 방법 / 톰캣 실행 에러 해결",
        "excerpt":"리눅스 톰캣 설치 방법 톰캣, JDK 설치 파일 준비 리눅스 서버에서 인터넷 연결이 된다면 wget 명령어로 직접 설치해도 됩니다. 인터넷 연결이 안 되는 내부망 운영서버 구축에 익숙해질 수 있도록 wget 없이 설치하면 더 좋습니다. JDK 설치 파일 준비 윈도우에서 jdk-11.0.2_linux-x64_bin.tar.gz 파일을 다운 받고, 파일질라로 리눅스 서버의 유저 home 폴더에 올립니다....","categories": ["op"],
        "tags": [],
        "url": "/op/2023-02-17-1",
        "teaser": null
      },{
        "title": "AWS S3 버킷 생성 및 퍼블릭 설정 방법 / IAM 액세스 키 생성 방법",
        "excerpt":"AWS S3 버킷 생성 방법 AWS S3 콘솔에서 버킷 만들기 Amazone S3 버킷 목록 &gt; 버킷 만들기 버튼 &gt; 버킷 이름 입력 &gt; ap-northeast-2 리전 선택 &gt; 객체 소유권 : ACL 활성화됨, 버킷 소유자 선호 &gt; 모든 퍼블랙 액세스 차단 해제 (전체 해제 후 동의) &gt; 버킷 버전 관리 비활성화,...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-02-20-1",
        "teaser": null
      },{
        "title": "SpringBoot에서 AWS S3 파일 업로드 및 다운로드 유틸 개발",
        "excerpt":"application.properties 파일 수정 S3 버킷, 액세스 키 정보 추가 ### AWS AccessKey ### cloud.aws.credentials.access-key=*****PNGQDJOTPZ5RQFE cloud.aws.credentials.secret-key=*****WX23F/l2M1wSGApyP+hLQpQCMi5kbMHqjax cloud.aws.s3.bucket.name=버킷명 #aws.s3.bucket.url=https://버킷명.s3.ap-northeast-2.amazonaws.com build.gradle 파일 수정 AWS dependencies 추가 implementation 'com.amazonaws:aws-java-sdk:1.12.328' S3 파일 업로드 및 다운로드 유틸 개발 S3Util.java package com.chunjae.archive_cms.common.util; import com.amazonaws.auth.AWSCredentials; import com.amazonaws.auth.AWSStaticCredentialsProvider; import com.amazonaws.auth.BasicAWSCredentials; import com.amazonaws.services.s3.AmazonS3; import com.amazonaws.services.s3.AmazonS3ClientBuilder; import com.amazonaws.services.s3.model.ListObjectsRequest; import com.amazonaws.services.s3.model.ObjectListing; import...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-02-21-1",
        "teaser": null
      },{
        "title": "운영서버로 엘라스틱서치 인덱스 마이그레이션 방법",
        "excerpt":"엘라스틱서치 개발서버에서 엘라스틱서치 운영서버로 인덱스 마이그레이션 하는 방법입니다. 엘라스틱서치 인덱스 이관 방법 타 클러스터 인덱스 리인덱싱 쿼리 POST _reindex?wait_for_completion=false { \"source\": { \"remote\": { \"host\": \"http://타클러스터IP:9200\", \"username\": \"계정명\", \"password\": \"비밀번호\" }, \"index\": \"타클러스터기존인덱스명\" }, \"dest\": { \"index\": \"현재클러스터신규인덱스명\" } } wait_for_completion=false 옵션으로 리인덱싱 쿼리 실행 시 키바나 타임아웃 에러가 방지되고,...","categories": ["elk"],
        "tags": [],
        "url": "/elk/2023-02-23-1",
        "teaser": null
      },{
        "title": "티스토리 블로그 구글서치콘솔 색인 생성 및 삭제 방법",
        "excerpt":"구글서치콘솔 블로그 소유권 확인 티스토리 블로그 속성 추가 https://search.google.com/search-console/welcome?hl=ko 위 구글서치콘솔 링크에서 URL 접두어에 https://티스토리도메인.tistory.com을 입력합니다. 소유권 확인 방법 HTML 태그 방법을 선택하고, 메타태그를 복사합니다. 티스토리 블로그 편집 화면의 HTML 탭에서 head 안에 메타태그를 붙여 넣습니다. 구글서치콘솔 색인 생성 방법 티스토리 블로그 글을 구글 검색에 노출되게 하기 위해서는 구글서치콘솔에서 색인을...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-02-24-1",
        "teaser": null
      },{
        "title": "Java에서 리눅스 톰캣 파일 업로드 경로 및 접근 권한 변경",
        "excerpt":"리눅스 톰캣 파일 업로드 경로 /usr/local/톰캣폴더/bin Java에서 new File 시 파일이 생성되는 기본 경로입니다. 파일 업로드 경로 변경 new File(\"./../webapps/프로젝트명/webapp이하폴더명/파일명.확장자\"); 위와 같이, 톰캣 bin 경로에서부터 상대경로로 프로젝트 폴더에 접근하여 파일을 생성하면 됩니다. 폴더 경로는 application.properties에 설정해두고 @Value 어노테이션으로 불러와서 공통으로 사용하면 좋습니다. 윈도우 톰캣 파일 업로드 경로 / (프로젝트 폴더)...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-02-24-1",
        "teaser": null
      },{
        "title": "SpringBoot application.properties 설정 종류",
        "excerpt":"기본 설정 서버 포트 설정 server.port:8081 viewResolver 설정 (JSP) spring.mvc.view.prefix=/WEB-INF/jsp/ spring.mvc.view.suffix=.jsp 프론트 페이지 파일 위치, 확장자를 지정할 수 있습니다. DB 접속 정보 설정 spring.datasource.driverClassName=net.sf.log4jdbc.sql.jdbcapi.DriverSpy spring.datasource.url=jdbc:log4jdbc:mariadb://RDS이름(DB서버명).ck39dp9w2h39.ap-northeast-2.rds.amazonaws.com:3306/DB명?serverTimezone=UTC&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;validationQuery=select 1 spring.datasource.username=DB유저명 spring.datasource.password=비밀번호 인증서 키를 입력해주는 옵션이 없기 때문에, 로컬에서는 운영 DB 접속이 불가합니다. Mybatis 설정 mybatis.mapper-locations=mappers/*.xml mybatis.config-location=classpath:mapper/config/mybatis-mapper-config.xml mybatis.type-aliases-package=com.도메인명.프로젝트명 업로드 파일 사이즈 설정 spring.servlet.multipart.max-file-size=1000MB spring.servlet.multipart.max-request-size=1000MB...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-02-24-1",
        "teaser": null
      },{
        "title": "티스토리 블로그 네이버 검색 노출 등록 및 삭제 방법",
        "excerpt":"네이버 서치어드바이저 티스토리 블로그를 사이트 등록하면 색인이 되어서 네이버에 글이 노출될 수 있습니다. 사이트 등록 방법 웹마스터 도구 &gt; 사이트 관리 &gt; https://티스토리도메인.tistory.com 입력 &gt; HTML 태그 복사 &gt; 티스토리 블로그 관리 &gt; 꾸미기 &gt; 스킨 편집 &gt; head 태그 안에 HTML 태그 붙여넣기 &gt; 적용 &gt; 소유 확인 HTML...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-02-25-1",
        "teaser": null
      },{
        "title": "티스토리 블로그 구글 애드센스 사이트 추가 및 광고 신청 방법",
        "excerpt":"구글 애드센스 광고 신청 방법 광고 개제 사이트 추가 방법 구글 애드센스 &gt; 구글 계정 로그인 &gt; 좌측 메뉴 &gt; 사이트 &gt; 사이트 추가 &gt; 사이트 URL https://티스토리도메인.tistory.com 입력 &gt; 저장하고 계속하기 &gt; 검토 요청 구글 애드센스 HTML 코드 삽입 좌측 메뉴 &gt; 광고 &gt; 코드 가져오기 &gt; 코드 복사...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-02-25-2",
        "teaser": null
      },{
        "title": "Notepad++ 설치 / 노트패드 사용법 및 설정 방법",
        "excerpt":"Notepad++ 설치 https://notepad-plus-plus.org/downloads 텍스트 파일 저장이 안 되는 경우, v8.4.2 버전으로 다시 설치하면 됩니다. Notepad++ 사용법 텍스트 줄바꿈 삭제 방법 Ctrl + F &gt; 바꾸기 탭 &gt; 찾을 내용 : \\r\\n 입력 &gt; 찾기 모드 : 정규 표현식(g) 선택 &gt; 모두 바꾸기 모든 줄바꿈 문자열을 빈 값으로 치환하여 삭제합니다. \\r\\n\\r\\n을...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-03-02-1",
        "teaser": null
      },{
        "title": "챗GPT 사용법 / 무료 ChatGPT 한국어 사용 방법",
        "excerpt":"챗GPT 사용법 챗GPT 가입 방법 https://chat.openai.com/chat Sign up 선택 &gt; 이메일 주소 입력 후 Continue &gt; 비밀번호 입력 후 Continue &gt; 받은 메일함 확인 &gt; 받은 메일에서 Verify email address 버튼 클릭 &gt; 성, 이름 입력 후 Continue &gt; 폰 번호 입력 후 Send code &gt; 폰으로 받은 6자리 숫자...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-03-04-1",
        "teaser": null
      },{
        "title": "자주 쓰는 엑셀 설정 방법",
        "excerpt":"유용한 엑셀 설정 제한된 보기 설정 해제 방법 파일 &gt; 옵션 &gt; 보안 센터 &gt; 보안 센터 설정 &gt; 제한된 보기 &gt; 전부 체크 해제 &gt; 확인 &gt; 확인 휠 스크롤 양 설정 윈도우 검색 &gt; 마우스 설정 &gt; 한번에 스크롤할 줄의 수 변경​ Scroll Lock 설정 엑셀에서 Scroll Lock...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-03-06-1",
        "teaser": null
      },{
        "title": "SpringBoot 서버별 properties 분리 방법 / IntelliJ Gradle war 빌드 방법",
        "excerpt":"SpringBoot 서버별 properties 분리 방법 application.properties 분리 예시 구분 properties 파일명 프로파일명 개발서버용 application.properties prod (없음) 운영서버용 application-real.properties real 로컬테스트용 application-local.properties local properties 파일 경로 프로젝트폴더/src/main/resources IntelliJ에서 properties 파일 변경하여 내장 톰캣 실행 방법 우측 상단 ‘프로젝트명Application’ 클릭 &gt; Edit Configuration… &gt; Active profiles 수정 (운영서버용 예시 : real) &gt;...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-03-07-1",
        "teaser": null
      },{
        "title": "WinMerge 설치 / 파일 텍스트 비교 프로그램 WinMerge 사용법",
        "excerpt":"WinMerge 설치 https://winmerge.org/downloads WinMerge 사용법 텍스트 비교 방법 새 문서 (Ctrl+N) &gt; 왼쪽, 오른쪽에 각각 비교하려는 텍스트 붙여넣기 &gt; 새로 고침 (F5) 파일 또는 폴더 비교 방법 열기 (Ctrl+O) &gt; 첫 번째 파일 또는 폴더 찾아보기, 선택 &gt; 비교할 두 번째 파일 또는 폴더 찾아보기, 선택 &gt; 비교 모든 파일...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-03-07-1",
        "teaser": null
      },{
        "title": "윈도우 Node.js 설치 방법 / nvm으로 노드 설치 및 버전 변경",
        "excerpt":"Node.js란? Javascript를 브라우저 밖에서 실행할 수 있게 해주는 런타임 (실행 환경) 입니다. Node.js를 통해 자바스크립트로 개발한 서버 사이드 애플리케이션을 실행할 수 있습니다. nvm, npm 차이 NVM (Node Version Manager) Node.js 설치 및 버전 변경할 수 있는 도구입니다. NPM (Node Package Manager) Node.js 설치 시 자동 설치되며, 필요한 패키지를 추가로 설치할...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-03-17-1",
        "teaser": null
      },{
        "title": "자주 쓰는 윈도우 명령어 정리 / 윈도우 cmd 명령어 사용법",
        "excerpt":"cmd 명령어 정리 설정한 환경변수 확인 echo %환경변수명% 전체 환경변수 확인 path 현재 세션에서 설정된 Path 환경변수 값 전체를 확인할 수 있습니다. 현재 디렉터리 파일 및 폴더 확인 dir 특정 포트 프로세스 PID 확인 netstat -ano | findstr :포트번호 프로세스가 LISTENING 상태이면 정상 동작 중이라는 뜻입니다. 프로세스 강제 종료 taskkill...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-03-20-1",
        "teaser": null
      },{
        "title": "리액트 장단점 / 리액트, 리덕스 사용 초기 느낀점",
        "excerpt":"리액트 장점 페이지 이동 시 깜빡임 없이 부드러워 한 페이지 내에 있는 것처럼 보입니다. 실제로 index.js 내에서 요청 URL에 따라 route 하여 컴포넌트만 바꿔서 index.html에 렌더링하고, 각 컴포넌트의 this.props 또는 this.state 값이 바뀌면 리렌더링 되는 방식입니다. 컴포넌트 재사용성이 좋다고 합니다. SPA 특성상 클라이언트 사이드 렌더링하고, 상태가 변경되는 일부 컴포넌트 데이터만...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-04-05-1",
        "teaser": null
      },{
        "title": "윈도우 AWS CLI 설치 / AWS S3 버킷 폴더 업로드 및 다운로드 방법",
        "excerpt":"AWS S3 콘솔에서 파일 다운로드가 가능하지만 폴더 다운로드는 불가하여 따로 CLI를 설치하였습니다. 윈도우에 CLI를 설치하면 cmd에서 명령어를 통해 AWS S3 버킷 폴더를 다운로드, 업로드할 수 있습니다. AWS CLI 설치 https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html ‘AWS CLI 설치 및 업데이트 지침’ 아래에서 운영 체제에 맞게 설치하면 aws 명령어를 사용할 수 있게 됩니다. 버킷에 폴더 업로드...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-04-07-1",
        "teaser": null
      },{
        "title": "자주 쓰는 CSS 정리 / CSS 문법",
        "excerpt":"자주 쓰는 CSS CSS 선택자 및 의사 클래스 https://0songha0.github.io/web-dev/2023-04-15-1 요소 클릭 이벤트 비활성화 pointer-events: none; 요소에서 클릭, 드래그, 호버 등 모든 커서 옵션을 비활성화합니다. 요소 클릭 이벤트 활성화 pointer-events: auto; none으로 비활성화 했던 클릭 이벤트를 다시 활성화합니다. div 테두리 모서리 둥글게 처리 border-radius: 10px; 줄바꿈 표시 white-space: pre; 태그 내...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-04-12-1",
        "teaser": null
      },{
        "title": "CSS 선택자 및 의사 클래스 정리",
        "excerpt":"CSS 선택자 인접 형제 선택자 (+) 요소 + 형제요소 { 속성: 속성값; } 같은 계층에서 요소 바로 다음에 위치하는 형제요소 하나에만 CSS를 적용합니다. 일반 형제 선택자 (~) 요소 ~ 형제요소 { 속성: 속성값; } 같은 계층에서 요소 다음에 위치하는 모든 형제요소에 CSS를 적용합니다. CSS 의사 클래스 동적 의사 클래스 요소:link...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-04-15-1",
        "teaser": null
      },{
        "title": "Javascript에서 S3 파일 접근 시 CORS 문제 해결 / AWS S3 CORS 설정 방법",
        "excerpt":"Javascript에서 S3 파일 접근 허용 Javascript에서 S3 파일 접근 시 에러메시지 painting:1 Access to image at 'https://버킷명.s3.ap-northeast-2.amazonaws.com/폴더명/파일명.jpg' from origin 'http://호출URL' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Java에서 S3 파일에 접근 가능해도, Javascript에서는 위와 같이 CORS 에러가 날 수 있습니다. S3 CORS...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-04-18-1",
        "teaser": null
      },{
        "title": "Visual Studio Code 설치 / VSCode 사용법",
        "excerpt":"Visual Studio Code 설치 https://code.visualstudio.com/download 운영체제에 맞는 VSCode 설치가 필요합니다. VSCode 사용법 프로젝트 여는 방법 상단 File 메뉴 &gt; Open Folder &gt; 프로젝트 폴더 선택 파일 내 텍스트 검색 좌측 검색 아이콘 클릭 &gt; 검색어 입력 플러그인 설치 방법 좌측 EXTENSIONS &gt; 플러그인명 검색 &gt; 플러그인 선택 &gt; Install 파이썬...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-04-20-1",
        "teaser": null
      },{
        "title": "VSCode에서 파이썬 주피터 노트북 사용 방법",
        "excerpt":"주피터 노트북 파이썬 코드 작성 후 섹션마다 단계적으로 실행하여 결과를 확인할 수 있게 도와주는 소스 편집 도구입니다. VSCode에서 주피터 사용 방법 VSCode 좌측 EXTENSIONS 아이콘 &gt; Jupyter 검색하여 설치 &gt; 좌측 EXPLORER에서 .ipynb 파일 생성 시 주피터 노트북으로 편집할 수 있습니다. 주피터 문법 제목 ## 본문 #### 들여쓰기가 있는 점...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-04-21-1",
        "teaser": null
      },{
        "title": "리액트 프로젝트 실행 시 컴파일 에러 해결 방법",
        "excerpt":"의존성 변경 필요 에러 ./node_modules/scroll-into-view-if-needed/es/index.js Attempted import error: 'compute-scroll-into-view' does not contain a default export (imported as 'compute'). 기존 node_modules 폴더 삭제, package-lock.json 변경한 뒤 npm install 실행하여 node_modules 재생성 후 다시 실행하면 정상적으로 실행됩니다. 의존성 모듈 미설치 에러 ./node_modules/styled-components/dist/styled-components.browser.esm.js Module not found: Can't resolve 'react-is' in 'C:\\Users\\사용자명\\프로젝트경로\\node_modules\\styled-components\\dist' 모듈 설치...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-04-27-1",
        "teaser": null
      },{
        "title": "AWS RDS 생성 및 설정 방법 / RDS 사용법 / RDS DB 오류 해결",
        "excerpt":"AWS RDS 생성 방법 RDS용 VPC 보안그룹 생성 VPC &gt; Security Groups Create &gt; security group Security group name DB-SG 입력 Description Database Security Group 입력 VPC VPC-Lab-vpc 선택 Inbound rules &gt; Add rule 유형 : MSSQL 선택 소스 : Aanwhere-IPv4 입력 Outbound rules (기본값) 유형 : 모든 트래픽 대상...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-04-28-1",
        "teaser": null
      },{
        "title": "윈도우 키보드 방향키 입력 시 마우스 커서 이동 문제 해결 방법",
        "excerpt":"그림판 오류이기 때문에, 그림판을 종료해야 합니다.     그림판 종료 명령어  taskkill /f /im mspaint.exe  윈도우 cmd 창에서 위 명령어를 입력하면 그림판이 종료되고, 방향키 입력 시 마우스 커서 이동 문제가 해결됩니다.  ","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-05-25-1",
        "teaser": null
      },{
        "title": "리액트 노드 프로젝트 소스 분석 / React.js, Node.js 사용법 정리",
        "excerpt":"학교에서 선생님과 학생이 실시간으로 소통하는 수업 도구 프로젝트를 맡게 되어 분석해 보았습니다. 외주사에서 프론트는 리액트, 백엔드는 노드로 개발한 프로젝트입니다. 리액트 프로젝트 분석 (프론트) 리액트는 실행 시 자동 빌드되는 public 폴더의 index.html 파일에서 url에 따라 컴포넌트만 바뀌며 동작합니다. index.js에서 ReactDom.render 시 첫 인자로 받은 컴포넌트(App.js)를 index.html의 &lt;div id=\"root\"&gt;&lt;/div&gt; 안에 렌더링하며, 각...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-05-26-1",
        "teaser": null
      },{
        "title": "리액트 클래스형 컴포넌트 생명주기 및 사용법 정리",
        "excerpt":"리액트 클래스형 컴포넌트 생명주기 클래스형 컴포넌트 예시 import React, { Component } from 'react'; class 컴포넌트명 extends Component { // 클래스 컴포넌트 생명주기 함수 작성 위치 render() { const { 변수명 } = this.props; return ( // 렌더링 시 화면에 그려줄 JSX 리턴 } } } export default 컴포넌트명; 공식...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-05-27-1",
        "teaser": null
      },{
        "title": "리액트 함수형 컴포넌트 정리",
        "excerpt":"리액트 함수형 컴포넌트 함수형 컴포넌트 예시 import React, { useState, useEffect } from 'react'; const 컴포넌트명 = ({ props명1, props함수명1 }) =&gt; { const [ state명1, setState명1 ] = useState(초기값); const [ state명2, setState명2 ] = useState(초기값); // Hook 작성 위치 return ( // 렌더링 시 화면에 그려줄 JSX 리턴...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-05-28-1",
        "teaser": null
      },{
        "title": "리액트 리덕스 사용법 정리",
        "excerpt":"리액트 리덕스 리덕스는 모든 컴포넌트에 같은 데이터를 쉽게 전달해주기 위해 전역변수처럼 사용합니다. 리덕스 사용 프로세스 액션을 발생시키면 미들웨어 처리 이후 액션에 맞는 리듀서가 호출되어 스토어의 상태를 바꿀 수 있습니다. 리액트 컴포넌트에 리덕스 connect 방법 import actions from \"../../../redux/액션함수.js\"; // 리액트 컴포넌트 작성 위치 export default connect( (state) =&gt; ({ 받을props명:...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-05-29-1",
        "teaser": null
      },{
        "title": "자주 쓰는 MariaDB 쿼리 정리 / MySQL 사용법",
        "excerpt":"MySQL DDL 쿼리 https://0songha0.github.io/plan-design-db/2025-01-08-1 MySQL DQL 쿼리 https://0songha0.github.io/plan-design-db/2025-01-08-2 MySQL DML 쿼리 데이터 INSERT문 INSERT INTO 테이블명 ( 컬럼명1, 컬럼명2 ) VALUES ( '값1', '값2' ); INSERT INTO DB명.테이블명 시 에러 SQL Error [1142] [42000]: (conn=1043447) INSERT command denied to user 'DB명'@'10.0.0.4' for table '테이블명' 개발 DB명과 운영 DB명이 다른 경우,...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2023-05-30-1",
        "teaser": null
      },{
        "title": "태블릿/모바일 웹 F12 개발자도구 사용 방법",
        "excerpt":"모바일 웹 F12 디버깅 방법 개발자 모드 활성화 설정 &gt; 태블릿 정보 or 휴대전화 정보 &gt; 소프트웨어 정보 &gt; 빌드번호를 연속 터치하여 개발자 모드를 활성화합니다. USB 디버깅 사용 설정 설정 &gt; 개발자 옵션 &gt; 화면 켜짐 상태 유지 활성화, USB 디버깅 허용을 해줍니다. PC와 태블릿/모바일 연결 PC에 USB 케이블로 연결하면...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-06-12-1",
        "teaser": null
      },{
        "title": "파일 저장 위치 장단점 / 효율적인 파일 관리 방법",
        "excerpt":"파일 저장 위치 장단점 프로젝트 내부 저장 웹서버를 통해 바로 접근할 수 있으나, 파일이 많아지면 빌드 시간이 오래걸리고 프로젝트가 무거워지게 됩니다. 서버 내부 저장 서버 이중화 시 파일을 동기화하는 처리가 필요합니다. 외부 스토리지 저장 (S3, NAS) 서버 이중화 시에도, 외부 시스템에서도 같은 파일에 접근하기 용이합니다. 클라우드 스토리지를 이용하면 CDN 서비스와...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2023-06-29-1",
        "teaser": null
      },{
        "title": "Javascript 비동기 요청 방식 종류 및 차이 / ajax, fetch 사용법",
        "excerpt":"비동기 요청 방식 종류 Ajax Javascript 라이브러리인 Jquery에서 제공하는 서버 요청 함수입니다. XMLHttpRequest 객체를 이용하여 비동기적으로 서버와 통신하여 새로고침 없이 페이지 일부만 갱신합니다. Ajax는 fetch API가 나오기 전까지 주로 사용되었습니다. Promise Javascript에서 비동기 처리를 다루는 객체입니다. 비동기 작업이 완료되었을 때 결과를 처리하거나 오류를 처리하는 데 사용됩니다. Fetch promise 기반으로 서버에...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-06-29-1",
        "teaser": null
      },{
        "title": "티스토리 블로그 Bad Request 오류 해결 방법",
        "excerpt":"티스토리 글 수정 시 오류 Bad Request Your browser sent a request that this server could not understand. Size of a request header field exceeds server limit. 해결 방법 크롬 브라우저 &gt; 설정 &gt; 개인 정보 보호 및 보안 &gt; 사이트 설정 &gt; 사이트 전체에 저장된 권한 및 데이터 보기...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-07-28-1",
        "teaser": null
      },{
        "title": "컴퓨터 PC에서 핸드폰 화면 보는 방법 / 삼성 핸드폰 미러링",
        "excerpt":"삼성 핸드폰 PC 미러링 방법 Windows에서 Microsoft Store 검색 &gt; Samsung Flow 검색 후 다운로드 &gt; 열기 &gt; 핸드폰에서 Samsung Flow 앱 실행 &gt; PC에 핸드폰 USB 연결 &gt; 컴퓨터 Samsung Flow 화면에서 디바이스 등록 &gt; 삼성 USB 드라이버 설치 &gt; 인증번호 확인 &gt; Smart View 시작 &gt; 핸드폰에서 미러링...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-08-02-1",
        "teaser": null
      },{
        "title": "프로그래머스 코딩 기초 트레이닝 Lv.0 124문제 파이썬 풀이",
        "excerpt":"파이썬 입문자인 저의 풀이와 본받을 코드를 모아서 복습하는 글입니다. 프로그래머스 코딩 기초 트레이닝 Lv.0 124문제 https://school.programmers.co.kr/learn/challenges/training?order=recent&amp;page=1 문자열 연산, 배열, 조건문, 반복문 등 기본적인 파이썬 문법을 익힐 수 있는 문제들입니다. 정답률 높은 순으로 풀면 성취감 느끼며 기본을 다질 수 있습니다. 출력 문제 풀이 문자열 출력하기 str = input() print(str) a와 b...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-08-17-1",
        "teaser": null
      },{
        "title": "프로그래머스 코딩테스트 입문 Lv.0 100문제 파이썬 풀이",
        "excerpt":"파이썬 입문자인 저의 풀이와 본받을 코드를 모아서 복습하는 글입니다. 프로그래머스 코딩테스트 입문 Lv.0 100문제 https://school.programmers.co.kr/learn/challenges/beginner?order=recent 입문 문제가 기초 트레이닝 문제보다 오히려 더 쉬운 것 같습니다. 정답률 높은 순으로 풀면 자신감이 붙어서 좋습니다. 한 문제에서 오래 막히는 경우, 질문으로 코드 남겨서 반례 요청 후 다른 문제 풀고 다시 와서 풀면 효율적입니다....","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-08-18-1",
        "teaser": null
      },{
        "title": "AWS S3 버킷 활용하여 AWS RDS DB .bak 파일 복원 및 백업 방법",
        "excerpt":"AWS RDS DB 복원 및 백업 방법 .bak 파일 업로드용 S3 버킷 생성 버킷명 입력 &gt; RDS DB의 리전(ap-northeast-2b : 서울)과 같은 리전 선택 &gt; 퍼블릭 액세스 차단 전부 풀고 &gt; 암호화 키 유형 : Amazon S3 관리형 키(SSE-S3) 선택 &gt; 버킷 키 비활성화 &gt; 객체 잠금 비활성화 &gt; 버킷...","categories": ["aws"],
        "tags": [],
        "url": "/aws/2023-10-24-1",
        "teaser": null
      },{
        "title": "이클립스 사용법 / 이클립스 단축키 / 이클립스 에러 해결",
        "excerpt":"이클립스 사용법 프로젝트 Open 방법 File &gt; Open Projects from File System… &gt; Directory… &gt; 프로젝트 폴더 선택 &gt; Finish Project Explorer에 같은 이름의 프로젝트가 없어야 Open 가능합니다. 프로젝트 import 방법 Project Explorer 우클릭 &gt; import &gt; import… &gt; General &gt; Existing Projects into Workspace &gt; Next &gt; Select root...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-10-26-1",
        "teaser": null
      },{
        "title": "eGovFramework 공통컴포넌트 테이블 사용",
        "excerpt":"eGovFramework 공통컴포넌트 테이블 공통코드, 파일, 메뉴, 권한, 롤, 회원(사용자), 최근 검색어, 로그, 게시글, 게시글 통계, 템플릿 등 공통 테이블을 제공합니다. 테이블 생성 스크립트 https://www.egovframe.go.kr/wiki/doku.php?id=egovframework:com:v3.8:init_table 공통 컴포넌트 테이블과 초기 데이터는 eGov에서 제공하는 스크립트로 DB에 생성할 수 있습니다. Row가 없는 테이블도 eGov 프로젝트 톰캣 실행 시 사용되니 삭제하면 안 됩니다. 메뉴 접근...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-10-26-1",
        "teaser": null
      },{
        "title": "이클립스 설정 방법",
        "excerpt":"이클립스 설정 방법 이클립스에 JDK 추가 Window 탭 &gt; Preferences &gt; Java &gt; Installed JREs &gt; Add… &gt; Standard VM &gt; Next &gt; JRE home: Directory…를 통해 설치한 JDK 폴더 (C:\\Program Files\\Java\\jdk-11.0.11) 선택 &gt; Finish 프로젝트에 JDK 설정 방법 프로젝트 우클릭 &gt; Properties &gt; Java Build Path &gt; Libraries &gt;...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-10-27-1",
        "teaser": null
      },{
        "title": "이클립스에서 톰캣 사용하는 방법 / 톰캣 에러 해결",
        "excerpt":"이클립스에서 톰캣 사용 방법 윈도우 톰캣 설치 https://tomcat.apache.org 프로젝트에 맞는 버전의 톰캣 선택 &gt; 64-bit Windows zip으로 다운로드 &gt; 압축 해제하면 설치 완료입니다. 이클립스에 톰캣 연동 방법 이클립스 하단 Servers 탭 내부 우클릭 &gt; New &gt; Server &gt; Apache &gt; Tomcat v(설치한 버전) Server 선택 &gt; Next &gt; Tomcat installation...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-10-28-1",
        "teaser": null
      },{
        "title": "이클립스 테마 변경 방법 / 이클립스 다크 테마 설정 방법",
        "excerpt":"전체 테마 설정 다크 테마 설치 방법 Help &gt; Eclipse Marketplace… &gt; Theme 검색 &gt; Darkest Dark Theme with DevStyle Install &gt; Confirm &gt; I accept the terms of the license agereement 선택 &gt; Finish &gt; Restart Now &gt; 이클립스 재실행 후 나오는 창에서 Next &gt; Darkest Dark Theme 선택...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-10-29-1",
        "teaser": null
      },{
        "title": "SourceTree 설치 / GUI 툴 소스트리에서 Git 사용법",
        "excerpt":"SourceTree 설치 https://www.sourcetreeapp.com 소스트리 설치 시 Bitbucket 선택 창에서 건너뛰기를 누르고, Mercurial 체크를 해제해야 합니다. Git에 Push 할 사용자명, 이메일주소 입력 후 SSH 키 선택 창에서 아니오를 선택합니다. 소스트리 사용법 프로젝트에 Git 저장소 생성 방법 상단 + 탭 &gt; Create &gt; 목적지 경로: 탐색하여 프로젝트 폴더 선택 &gt; 저장소명 입력...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-10-31-1",
        "teaser": null
      },{
        "title": "이클립스에서 Git 사용하는 방법",
        "excerpt":"IntelliJ와 달리, 이클립스에서는 Git 사용이 불편해서 사용법 정리 후 소스트리 툴을 사용하기로 했습니다. 변경사항이 발생한 파일 보기가 번거롭고, Fetch 한 소스 내용 보기도 어렵다는 단점이 있었습니다. 이클립스 Git 사용 방법 프로젝트 SVN/Git 연결 제거 프로젝트 우클릭 &gt; Team &gt; Disconnect Project Explorer에서 프로젝트명 우측에 아무런 정보도 뜨지 않으면 형상관리 연결이...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-11-01-1",
        "teaser": null
      },{
        "title": "eGovFramework 서버별 resources 분리 방법 / Maven war 빌드 방법",
        "excerpt":"eGovFramework 서버별 resources 분리 방법 resources 폴더 분리 예시 구분 resources 폴더명 프로파일명 개발서버용 resources-dev dev 운영서버 사용자용 resources-service service 운영서버 어드민용 resources-admin admin resources 폴더 경로 프로젝트폴더/src/main pom.xml 설정 &lt;build&gt; &lt;resources&gt; &lt;resource&gt; &lt;directory&gt;src/main/resources-${env}&lt;/directory&gt; &lt;/resource&gt; &lt;resource&gt; &lt;directory&gt;src/main/resources&lt;/directory&gt; &lt;/resource&gt; &lt;/resources&gt; &lt;/build&gt; &lt;profiles&gt; &lt;!-- 개발서버 반영용 --&gt; &lt;profile&gt; &lt;id&gt;dev&lt;/id&gt; &lt;activation&gt; &lt;activeByDefault&gt;true&lt;/activeByDefault&gt; &lt;/activation&gt;...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-11-08-1",
        "teaser": null
      },{
        "title": "윈도우 창 잡고 흔들면 모든 창 최소화되는 기능 끄기",
        "excerpt":"모든 창 최소화 기능 끄기   윈도우에 gpedit.msc 검색 &gt; 사용자 구성 &gt; 관리 탬플릿 &gt; 바탕 화면 &gt; ‘Aero 흔들기 창 최소화 마우스 제스처 사용 안 함’ 더블 클릭 &gt; 사용 체크 &gt; 적용 &gt; 확인   듀얼 모니터 모든 창이 최소화되어 불편했던 기능을 드디어 껐습니다.  ","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-11-08-1",
        "teaser": null
      },{
        "title": "Figma 설치 / 디자인, 기획 협업 툴 피그마 사용법",
        "excerpt":"피그마 설치 https://www.figma.com/downloads 피그마 사용법 디자인 모드 보기 우측 상단 삼각화살표 버튼 &gt; Present 클릭 &gt; 좌측 Flows 선택 &gt; 우측 피그마 화면 클릭 시 연결된 화면이나 기능이 있는 요소에 파란색 박스 활성화 &gt; 활성화 요소 클릭하여 화면 이동 프로토타입 모드 보기 우측 상단 삼각화살표 버튼 &gt; Preview 클릭 &gt;...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-11-09-1",
        "teaser": null
      },{
        "title": "SpringBoot 커스텀 에러페이지 설정 방법",
        "excerpt":"SpringBoot 기본 에러페이지 잘못된 URL 호출 시 위와 같은 404 에러페이지가 표출됩니다. 사용자가 보기에 미관상 좋지 않으므로, 커스텀 에러페이지로 변경하면 좋습니다. SpringBoot 커스텀 에러페이지 설정 커스텀 에러페이지 예시 application.properties 설정 server.error.path=/error 에러 발생 시 요청할 URL을 설정합니다. (기본값 /error 그대로 사용하면 설정하지 않아도 됩니다.) CustomErrorController 생성 package com.chunjae.archive_cms.common.error; import org.springframework.boot.web.servlet.error.ErrorController;...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-11-09-1",
        "teaser": null
      },{
        "title": "비수익형 티스토리 블로그 광고 차단 방법",
        "excerpt":"최근 티스토리 블로그에 자체 광고와 애드센스 광고가 중복적으로 나와서 굉장히 보기 안 좋게 되었습니다. 개발 블로그는 수익이 많이 발생하기 어렵기에, 기존 티스토리 블로그 수익을 포기하기로 했습니다. 수익이 발생하지 않는 비수익형 블로그가 되면 티스토리 자체 광고가 자동으로 차단됩니다. 티스토리 광고 연동 해제 티스토리 블로그 관리 &gt; 수익 메뉴의 모든 광고 연동을...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2023-11-10-1",
        "teaser": null
      },{
        "title": "Git 블로그 복제 및 커스텀 방법 / 깃허브 블로그 만드는 법",
        "excerpt":"Git 블로그 복제 방법 Public Git 블로그 Clone 마음에 드는 Git 블로그 주인이 허락한다면, Fork 또는 Clone하여 나만의 블로그를 생성할 수 있습니다. git clone \"복사한Git주소\" git 프로젝트 페이지에서 Code 버튼 클릭 시 Clone URL을 복사할 수 있습니다. cmd에서 원하는 경로로 이동 후 위 명령어를 실행하여 Git 블로그 프로젝트를 내려받습니다. 기존...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-11-14-1",
        "teaser": null
      },{
        "title": "Git 블로그 글 작성 방법 / 마크다운 문법",
        "excerpt":"Git 블로그 글 작성 방법 _posts 폴더에 YYYY-MM-DD-제목.md 파일 생성후 포스트 front matter를 아래와 같이 작성합니다. --- title: \"글제목\" excerpt: \"\" categories: - 카테고리제목 tags: - [] permalink: /카테고리URL/글URL toc: true toc_sticky: true date: YYYY-MM-DD last_modified_at: YYYY-MM-DD --- 이 아래로 마크다운 문법을 이용해 글을 작성하시면 됩니다. 마크다운 문법 제목 #...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-11-16-1",
        "teaser": null
      },{
        "title": "윈도우 공유폴더 연결 방법 / 공유폴더 연결 오류 해결",
        "excerpt":"윈도우에서 NAS 등 파일서버에 연결하고 싶을 때 이용하는 방법입니다. 파일 탐색기에서 ‘\\\\나스IP\\\\폴더명’으로도 접근 가능하지만 연결을 등록해두면 더 편합니다. 윈도우 공유폴더 연결 방법 파일 탐색기 &gt; 내 PC 우클릭 &gt; 네트워크 드라이브 연결 &gt; 드라이브 선택 후 ‘\\\\나스IP\\\\폴더명’ 입력 &gt; 마침 공유폴더 연결 오류 해결 로그인 자격 증명 계정이 달라서 발생하는...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-11-20-1",
        "teaser": null
      },{
        "title": "파이썬 설치 및 실행 방법 / 네이버블로그 이웃 자동 공감 기능 개발",
        "excerpt":"파이썬 셀레니움으로 이웃 좋아요 자동화가 가능하지 않을까 하는 호기심에 개발하였습니다. 현재 운영 중인 네이버블로그에서 직접 사용하려는 목적이 아닙니다. 네이버블로그는 이웃들과 서로 왕래하며 진심으로 소통하는 것이 가장 좋습니다. 파이썬 설치 파이썬 다운로드 및 설치 https://www.python.org/downloads 파이썬 설치 프로그램에서 ‘Add python.exe to PATH’를 체크하고 ‘Install Now’로 설치해야 환경변수를 따로 설정하지 않아도 됩니다....","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2023-11-25-1",
        "teaser": null
      },{
        "title": "리눅스 개발서버 톰캣 WAR 수동 배포 방법",
        "excerpt":"개발서버 WAR 수동 배포 방법 개발서버는 어드민, 사용자 서비스가 한 프로젝트에 있다면 하나의 톰캣에 단일 war로 올려도 좋습니다. 이 글은 톰캣 소유자가 root 계정이 아닌 개발서버에서 war 반영하는 방법입니다. git 사용하는 경우 dev 브랜치에서 작업 중 개발서버 반영용 war 빌드는 git stash로 소스 백업 후 해야 합니다. ROOT 계정으로 전환...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-11-27-1",
        "teaser": null
      },{
        "title": "리눅스 운영서버 톰캣 WAR 수동 배포 방법 / 소스 복구 방법",
        "excerpt":"운영서버는 root 계정이 아니면 /톰캣경로/webapps 폴더에 접근할 수 없어서 개발서버 배포와 절차가 다릅니다. 이미 운영 중인 프로젝트에 참여한 경우 서버 반영 방법이 다르면 기존 방법을 따르는 것이 가장 좋습니다. 기존 프로젝트 소스 삭제하고 다시 war 풀면 정상 동작하지 않아서 다시 복구해야 하는 경우도 있는데, 운영은 오래 중단되면 안되기 때문에 삭제하지...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-11-28-1",
        "teaser": null
      },{
        "title": "개발 툴 종류 및 장단점",
        "excerpt":"다양한 개발 툴을 사용해 보고 개인적으로 느낀 장단점을 정리한 글입니다. IntelliJ (인텔리제이) JetBrains에서 개발한 Java 통합 개발 환경입니다. IntelliJ 장점 기본적으로 다크 테마를 지원하여 따로 세팅하지 않아도 눈이 피로하지 않습니다. 소스트리 없이도 Git 사용에 불편한 점을 느끼지 못하였습니다. 실행이 매우 빠르고 UI 편의성이 높아서 사용이 편합니다. 스프링 프로젝트, 리액트/노드 프로젝트...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-11-30-1",
        "teaser": null
      },{
        "title": "개발 시 유용한 윈도우 무료 툴 종류 및 특징",
        "excerpt":"DBeaver (디비버) MySQL, MariaDB, Oracle, SQL Server, PostgreSQL, SQLite 등 대부분의 DB 연결이 가능합니다. Database Navigator에서 여러 DB 연결에 이름을 주고 관리할 수 있습니다. 각 테이블 Properties 탭에서 테이블 제약조건과 디스크립션, Data 탭에서 데이터 확인이 가능합니다. 각 DB 연결 단위로 SQL 편집기를 열고 쿼리 작성 및 실행 후 결과를 확인할...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-11-30-2",
        "teaser": null
      },{
        "title": "MTPuTTY 설치 / 여러 PuTTY 세션을 탭으로 관리하는 MTPuTTY 사용법",
        "excerpt":"MTPuTTY 설치 https://ttyplus.com/downloads 설치 버전 또는 무설치(Portable) 버전 중 하나를 선택하여 설치합니다. MTPuTTY 사용법 PuTTY 경로 지정 MTPuTTY 설치 후 나오는 PuTTTY location 창에서 기존에 설치한 PuTTY의 exe 파일 경로를 입력하고 OK 해줍니다. PyTTY exe 파일 경로 확인 작업표시줄에서 PuTTY 앱 아이콘 우클릭 &gt; PyTTY 클릭 &gt; 속성 &gt; 바로가기...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-12-01-1",
        "teaser": null
      },{
        "title": "윈도우 cmd에서 Git 사용법 / Git 명령어 정리 / Git 에러 해결",
        "excerpt":"Git Clone이나 간단한 커밋 시에는 cmd에서 명령어로 하는 것이 빠를 수 있습니다. 소스 비교나 체리픽은 소스트리, IntelliJ 같은 GUI 툴 사용이 훨씬 편합니다. 윈도우 cmd에서 Git 사용법 Git 원격 브랜치 소스 가져오기 Default 브랜치 복제 git clone \"https://Git주소\" github 저장소 &gt; code 탭 &gt; code 버튼 &gt; clone 모달 &gt;...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-12-01-2",
        "teaser": null
      },{
        "title": "Git 프로젝트 개발서버 및 운영서버 반영 절차 / Git 사용 순서",
        "excerpt":"이 글에서는 커밋을 Cherry-Pick으로 main 브랜치에 병합합니다. Cherry-Pick 할 커밋이 너무 많고, 브랜치 동기화 가능하면 통째로 Merge 하는 것도 방법입니다. merge 후에는 운영서버 반영용 코드들을 수동으로 살려줘야 할 수 있습니다. 운영서버용 브랜치에 체리픽하는 커밋은 개발서버용 브랜치에도 반영되어야 추후 Merge 시 소스가 꼬이지 않습니다. Git 개발서버 반영 절차 Fatch, Pull Fetch...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-12-05-1",
        "teaser": null
      },{
        "title": "리눅스 서버 톰캣 파일 단건 반영 방법",
        "excerpt":"단건 반영 war 배포와 마찬가지로, 운영 반영 시에는 기존 파일 백업 후 모든 was에 동일하게 반영해야 합니다. 프론트 파일 배포 html, css, js, jsp 파일은 교체 시 war 배포 및 톰캣 재실행 없이도 반영됩니다. 프론트 파일 위치 프로젝트 경로 프로젝트폴더/src/main/webapp 이하 톰캣 경로 프로젝트폴더 이하 jsp 파일은 webapp 이하의 WEB-INF...","categories": ["op"],
        "tags": [],
        "url": "/op/2023-12-06-1",
        "teaser": null
      },{
        "title": "eGovframework 세션 로그인 분석 / 통합 SSO 로그인 연동 기능 개발",
        "excerpt":"eGovframework 세션 로그인 분석 jsp에서 로그인 요청 유저가 입력한 아이디, 비밀번호가 담긴 Form을 파라미터로 ajax 호출하여 서버에 요청합니다. ‘아이디 저장’ 체크박스 값이 checked이면 쿠키에 아이디를 30일 간 저장합니다. 서버에서 세션 로그인 처리 SSO 로그인 API 호출 Controller에서 ajax 요청을 받고, LoginAPIUtil의 login 함수를 호출합니다. SSO 로그인 API URL에 get 방식으로...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-12-07-1",
        "teaser": null
      },{
        "title": "윈도우 다크모드 설정 / 크롬 다크모드 설정 및 해제 방법",
        "excerpt":"윈도우 다크모드 설정 Windows 설정 &gt; 개인 설정 &gt; 색 메뉴 &gt; 기본 앱 모드 선택 : 어둡게 체크 윈도우에서 관리하는 모든 웹 브라우저, 파일탐색기, 제어판 등에 다크모드가 적용됩니다. 크롬 다크모드 설정 크롬 우측 상단 점 3개 &gt; 설정 &gt; 모양 &gt; 모드 &gt; 어둡게 체크 크롬 상단바, 어두워져도 괜찮은...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2023-12-08-1",
        "teaser": null
      },{
        "title": "Java API 호출 유틸 개발 / HttpURLConnection 객체 사용법",
        "excerpt":"API 호출 유틸 개발 통합 SSO 로그인 API, 타 팀 API 등 URL 연결이 많은 프로젝트라서 공통 유틸을 만들어보았습니다. URLConnectionUtil.java import java.io.BufferedReader; import java.io.InputStream; import java.io.InputStreamReader; import java.net.HttpURLConnection; import java.net.URL; public class URLConnectionUtil { // GET 방식으로 URL 요청 후 결과 String 반환 public String requestGetURL(String urlStr, String paramType) throws...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-12-13-1",
        "teaser": null
      },{
        "title": "Java 특정 문자열 사이 추출 방법 / 정규표현식 사용법",
        "excerpt":"Java 특정 문자열 사이 추출 방법 추출하려는 원본 문자열 \"_returnData = 'w6bO2i%2fghyCIx%2bEKccYOYVa1KafPHZEEXbaY3PxPsUXZTJ1s~~~';\" 문자열 사이 추출 코드 import java.util.regex.Pattern; import java.util.regex.Matcher; Pattern pattern = Pattern.compile(\"_returnData = '(.*)';\"); Matcher matcher = pattern.matcher(원본문자열변수); String data = \"\"; while (matcher.find()) { data = matcher.group(1); } 정규표현식을 이용하여 “_returnData = ‘“와 “’;” 사이의 문자열을 추출하는...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-12-15-1",
        "teaser": null
      },{
        "title": "Java Gson 라이브러리 사용법 / JSON 파싱 및 변환 방법",
        "excerpt":"Gson 라이브러리 JSON 문자열을 파싱하여 Java Object로 변환할 수 있는 구글 오픈소스입니다. Gson 라이브러리 추가 &lt;dependency&gt; &lt;groupId&gt;com.google.code.gson&lt;/groupId&gt; &lt;artifactId&gt;gson&lt;/artifactId&gt; &lt;version&gt;2.8.9&lt;/version&gt; &lt;/dependency&gt; Maven 사용 시 pom.xml에 위와 같이 dependency를 추가합니다. JSON을 Java Object로 변환 코드 import com.google.gson.Gson; Gson gson = new Gson(); 클래스명 result = gson.fromJson(JSON문자열, 클래스명.class); JSON 문자열의 값을 get, set...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-12-18-1",
        "teaser": null
      },{
        "title": "암호화 알고리즘 종류 / Java 암호화 유틸 개발 / AES256, Base64 등 암복호화 방법",
        "excerpt":"단방향 암호화 복호화 불가하여 비밀번호 암호화에 적합합니다. SHA-256 사용자가 입력한 비밀번호를 암호화 후 SHA-256 해시 앞 16자리를 잘라서 유저 테이블 비밀번호 컬럼에 저장된 SHA-256 해시 앞 16자리와 비교하여 로그인하기도 합니다. SHA-512 SHA-256보다 자릿수가 훨씬 길고, 보안이 강화된 암호화 알고리즘입니다. MD5 128비트 고정 길이의 출력값을 가집니다. 양방향 암호화 복호화 가능합니다. 비밀키...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2023-12-27-1",
        "teaser": null
      },{
        "title": "Javascript 쿠키 유틸 / Cookie 공통 함수 / 쿠키 생성 및 확인",
        "excerpt":"Javascript 쿠키 유틸 CookieUtil.js /** * 쿠키를 생성한다. * @param name * @param value * @param exp */ function setCookie(name, value, exp) { const date = new Date(); date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000); document.cookie = name + '=' + value + ';expires=' + date.toUTCString()...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-01-09-1",
        "teaser": null
      },{
        "title": "Windows 시계 앱 PC 알람 설정 방법",
        "excerpt":"주간보고 작성처럼 매주 특정 시간에 해야 하는 업무를 알람 맞춰두면 좋습니다.     주간 알람 설정 방법  Windows 검색 &gt; 시계 &gt; 알람 메뉴 &gt; 새 알람 추가 &gt; 알람 시간 설정, 반복 요일 체크 &gt; 알람 활성화   주의사항  하단 전원 설정 변경에서 절전 모드 안함 설정을 해야 합니다.  ","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2024-02-05-1",
        "teaser": null
      },{
        "title": "MathJax js 라이브러리 bbox 출력 오류 해결 방법",
        "excerpt":"MathJax는 웹 브라우저에 수학 표기법을 표기하는 Javascript 라이브러리입니다. mathjax bbox 오류 해결 네모 박스가 \\bbox[5px, border:1pxsolidblack]이라는 텍스트로 출력되는 문제가 있었습니다. 에러 코드 Promise.allSettled([MathJax.typeset()]).then(function () { 이 부분에서 아래의 에러가 발생하였습니다. 에러 메시지 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'replaceChild') at e.replace (tex-mml-chtml.js:1:10078) at e.updateDocument (tex-mml-chtml.js:1:198719) at...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-02-05-2",
        "teaser": null
      },{
        "title": "자주 쓰는 Spring 정리 / Java 문법",
        "excerpt":"자주 쓰는 Spring Spring DB 연결 방법 https://0songha0.github.io/web-dev/2022-06-10-1 Spring annotation 정리 https://0songha0.github.io/web-dev/2023-02-08-1 요청 도메인 주소 반환 함수 public String getDomain(HttpServletRequest req) { req.getSession().setAttribute(\"_paramReturnUrl\", req.getParameter(\"_paramReturnUrl\")); // 현재 요청의 URL 가져오기 StringBuffer url = req.getRequestURL(); // 요청 도메인 추출 String domain = url.substring(0, url.indexOf(\"/\", 8)); // 현재 접속한 URL이 IP면 IP, 도메인이면...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-02-07-2",
        "teaser": null
      },{
        "title": "자주 쓰는 JSP 정리 / EL 문법 / JSTL 문법",
        "excerpt":"자주 쓰는 JSP HTML 파일을 JSP로 바꾸는 법 1. HTML 파일 확장자를 .jsp로 변경합니다. 2. &lt;html&gt; 태그 위에 아래의 코드 중 사용할 taglib를 추가합니다. header에 추가해도 header가 포함된 페이지들에 공통 적용되지 않아서, 각 jsp에 개별적으로 추가해 줘야 합니다. &lt;%@ taglib prefix=\"c\" uri=\"http://java.sun.com/jsp/jstl/core\" %&gt; &lt;%@ taglib prefix=\"fmt\" uri=\"http://java.sun.com/jsp/jstl/fmt\" %&gt; &lt;%@ taglib...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-02-08-1",
        "teaser": null
      },{
        "title": "자주 쓰는 HTML 정리 / HTML 문법",
        "excerpt":"자주 쓰는 HTML HTML 정규표현식 https://0songha0.github.io/web-dev/2022-08-01-1 button 클릭 시 form submit &lt;form action=\"/컨트롤러경로\" method=\"post\"&gt; &lt;input type=\"text\" name=\"서버에서받을변수명\" /&gt; &lt;button&gt;저장&lt;/button&gt; &lt;/form&gt; button의 기본 type은 submit이므로, 버튼 클릭 시 form이 전송됩니다. button type=”button”으로 변경 시 submit이 동작하지 않습니다. CSS, Javascript 파일 추가 &lt;head&gt; &lt;script src=\"Javascript파일경로/파일명.js\"&gt;&lt;/script&gt; &lt;link rel=\"stylesheet\" href=\"CSS파일경로/파일명.css\"&gt; &lt;/had&gt; 라이브러리 파일은 https://도메인/파일경로/파일명으로도...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-02-08-2",
        "teaser": null
      },{
        "title": "코드리뷰 장단점 / 개발자 코드리뷰가 필요한 이유",
        "excerpt":"코드리뷰 장점 자연스럽게 업무 및 소스 공유가 되며, 부재 시 대체 대응이 가능합니다. 소스의 문제점과 개선방향을 함께 논의하여 더 나은 결과를 도출할 수 있습니다. 단점 코드리뷰를 위한 시간이 별도로 필요합니다. 코드리뷰 없는 회사 장점 일정이 짧을 때, 비교적 편한 마음으로 자유롭게 개발할 수 있습니다. 더러운 소스에서도 살아남을 수 있는 적응력이...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2024-02-27-1",
        "teaser": null
      },{
        "title": "윈도우 Host 파일 수정 / 특정 도메인 요청을 localhost로 전송하는 방법",
        "excerpt":"개발서버 도메인으로 나가는 요청을 localhost로 전달할 수 있습니다. 호스트 파일은 로컬에서만 적용됩니다. 호스트 파일 수정 방법 메모장 검색 &gt; 관리자 권한으로 실행 &gt; 파일 &gt; 열기 &gt; C:\\Windows\\System32\\drivers\\etc &gt; 모든 파일 (.) 확장자 보기 &gt; hosts 파일 열기 &gt; 수정 및 저장 호스트 파일 수정 예시 # Copyright (c) 1993-2009...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2024-02-28-1",
        "teaser": null
      },{
        "title": "코딩테스트 언어 선택 / Python → Java 변경 이유 / 코딩테스트 팁",
        "excerpt":"코딩테스트 언어 선택 Python 선택 이유 Java, C에서 직접 구현해야 하는 코드를 파이썬에서는 기본 제공하는 경우가 많아 코드가 간결해집니다. 알고리즘 대회가 아닌, 기업 코딩테스트에서 파이썬이 느려서 탈락하는 경우는 거의 없다고 합니다. 코딩테스트에 유리한 언어가 파이썬이기 때문에, 좋은 강의가 대부분 파이썬으로 나와있습니다. 코딩테스트 공부 시간을 최소화하기 위해 파이썬으로 준비하기로 결정하였습니다. 파이썬은...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-03-01-1",
        "teaser": null
      },{
        "title": "Spring 에러 핸들러 처리 / 톰캣에 에러 로그 안 찍히는 경우",
        "excerpt":"resources 폴더의 log4j2.xml에서 Logger level을 DEBUG로 설정하였고, 컨트롤러에서 throws Exception 해주었는데도 톰캣에 에러 로그가 안 찍히는 경우, @ExceptionHandler 어노테이션을 사용한 에러 핸들러를 생성하면 모든 에러가 톰캣에 출력됩니다. GlobalExceptionHandler 생성 import org.springframework.web.bind.annotation.ControllerAdvice; import org.springframework.web.bind.annotation.ExceptionHandler; @ControllerAdvice public class GlobalExceptionHandler { @ExceptionHandler(Exception.class) public void handleException(Exception e) { // 톰캣에 에러 출력 e.printStackTrace(); }...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-03-05-1",
        "teaser": null
      },{
        "title": "리눅스 폴더 및 파일 압축 관련 명령어",
        "excerpt":"파일 압축 명령어 zip 파일 압축 zip -r 파일명.zip ./폴더또는파일명 명령어를 통해 폴더 및 파일을 zip 파일로 압축할 수 있습니다. tar 파일 압축 tar -cvf 파일명.tar ./폴더또는파일명 tar.gz 파일 압축 tar -czvf 파일명.tar.gz ./폴더또는파일명 파일 압축 해제 명령어 zip 파일 압축 해제 unzip 파일명.zip 또는 unzip 파일명.zip -d ./압축해제폴더명 경로를...","categories": ["op"],
        "tags": [],
        "url": "/op/2024-03-07-1",
        "teaser": null
      },{
        "title": "구축 프로젝트, 유지보수 프로젝트 장단점",
        "excerpt":"구축 프로젝트 장점 전체 아키텍처 및 DB 설계를 경험하며 프로젝트 이해도가 높아집니다. 새로운 기술을 프로젝트에 적용하고 학습하기 좋습니다. 공통 코드를 정리하고 확장성을 고려하며 개발할 수 있습니다. 코딩 가이드를 통해 기술 부채를 미리 최소화합니다. 이직 시 기술 면접관은 유지보수보다 구축 경험을 더 선호합니다. 단점 초기 기획이 명확하지 않아 계속 변동되면 설계부터...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2024-03-08-1",
        "teaser": null
      },{
        "title": "운영 WAS 서버 모니터링 방법 / WhaTap 사용 방법",
        "excerpt":"WhaTap 모니터링 WhaTap 서버 설치형은 웹 was 내 프로젝트 환경 정보를 엑셀에 작성하여 메일로 전달하면, WhaTap에서 웹 was 트래픽을 수집하는 모니터링 서버 구축 후 웹 was에 에이전트를 설치해 주십니다. 허용된 공인 IP에서 WhaTap URL으로 접속하면 사용자 트래픽 정보를 볼 수 있습니다. WhaTap SaaS형은 클라우드에서 제공하는 구독형 모니터링 서비스로, IT 인프라...","categories": ["op"],
        "tags": [],
        "url": "/op/2024-03-11-1",
        "teaser": null
      },{
        "title": "자주 쓰는 Jquery 정리 / Jquery 문법",
        "excerpt":"자주 쓰는 Jquery Jquery로 로딩마스크 구현 방법 https://0songha0.github.io/web-dev/2022-12-13-1 document ready 완료 후 실행 &lt;script&gt; $(document).ready(function(){ // 실행 코드 }); &lt;/script&gt; 축약된 형식 $(function() { // 실행 코드 }); 위/아래 슬라이드 숨김 효과 $('.클래스명').slideUp(\"fast\"); $('.클래스명').slideDown(\"slow\"); $('.클래스명').slideToggle({duration: 1000}); select botton 클릭 시 하단 ul을 보이고, 그 외 영역 클릭 시 display:none; 하는...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-03-13-1",
        "teaser": null
      },{
        "title": "프로그래머스 코딩테스트 고득점 Kit 47문제 Java 풀이",
        "excerpt":"프로그래머스 코딩테스트 고득점 Kit 47문제 https://school.programmers.co.kr/learn/challenges?tab=algorithm_practice_kit LV.1 ~ LV.3 43문제를 순서대로 익히고, 취업 시즌에 문법 복습 후 시간 제한을 두고 다시 풀어보면 좋습니다. 난이도 낮은 순서 정렬, 스택/큐, 완전탐색 &gt; 힙, 해시, 깊이/너비 우선 탐색(DFS/BFS), 탐욕법(Greedy) &gt; 동적계획법(DP), 이분탐색, 그래프 코테 준비 기간이 여유롭다면, 쉬운 유형부터 천천히 풀어나가는 것이 좋습니다....","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-03-15-1",
        "teaser": null
      },{
        "title": "바탕화면에 특정 URL 웹 페이지 바로가기 만들기",
        "excerpt":"웹 페이지 바로가기 만들기   크롬에서 바로가기로 만들고 싶은 웹 페이지 이동 &gt; 상단 주소창에서 Ctrl + A (전체선택) &gt; URL을 마우스 좌클릭으로 끌어서 바탕화면에 두기 &gt; 바로가기 더블클릭 시 해당 웹 페이지가 바로 열립니다.  ","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2024-03-16-1",
        "teaser": null
      },{
        "title": "사내 내부망에서 아웃바운드 보안 방화벽 포트 허용 신청 방법",
        "excerpt":"사내 정보보안팀이 있는 경우 현재 회사는 모든 IP, 포트에 대해 아웃바운드가 막혀있어 따로 허용하지 않으면 대부분 접근할 수 없습니다. AWS Codecommit Git은 방화벽 개방 없이도 접근이 가능하지만, AWS EC2 서버 등은 정보보안팀 담당자에게 요청해서 방화벽을 뚫어줘야 접근할 수 있습니다. 기존에는 메일로 요청했었으나, 정보보안팀 요청 게시판이 생겨 더 간편하게 요청할 수...","categories": ["network"],
        "tags": [],
        "url": "/network/2024-03-17-1",
        "teaser": null
      },{
        "title": "프로그램 메뉴 테이블 및 유저 권한 테이블 설계",
        "excerpt":"메뉴 및 유저 권한 테이블 설계 메뉴 테이블 예시 제약조건 컬럼명 데이터 타입 기본값 설명 PK menu_id INT 메뉴ID menu_name VARCHAR 메뉴명 parent_id INT 상위 메뉴ID menu_url VARCHAR 메뉴 링크 URL menu_icon_url VARCHAR 메뉴 아이콘 URL del_yn CHAR(1) 'N' 삭제 여부 메뉴 아래에 2 Depth 하위 메뉴가 존재할 수 있게...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2024-03-18-1",
        "teaser": null
      },{
        "title": "egovFramework 헤더, 푸더 등 레이아웃 Tiles 설정 방법",
        "excerpt":"레이아웃 Tiles 설정 방법 egov-com-servlet.xml 예시 &lt;bean id=\"tilesViewResolver\" class=\"org.springframework.web.servlet.view.UrlBasedViewResolver\"&gt; &lt;property name=\"viewClass\" value=\"org.springframework.web.servlet.view.tiles3.TilesView\" /&gt; &lt;property name=\"order\" value=\"1\" /&gt; &lt;/bean&gt; &lt;!-- Tiles Configurer --&gt; &lt;bean id=\"tilesConfigurer\" class=\"org.springframework.web.servlet.view.tiles3.TilesConfigurer\"&gt; &lt;property name=\"definitions\"&gt; &lt;list&gt; &lt;value&gt;/WEB-INF/config/egovframework/tiles/common-def.xml&lt;/value&gt; &lt;/list&gt; &lt;/property&gt; &lt;/bean&gt; common-def.xml 파일을 definitions 프로퍼티로 사용하는 tilesConfigurer를 정의합니다. common-def.xml 예시 &lt;tiles-definitions&gt; &lt;definition name=\"baseUser\" template=\"/WEB-INF/jsp/_tiles/user/layout.jsp\"&gt; &lt;put-attribute name=\"header\" value=\"/WEB-INF/jsp/_tiles/user/header.jsp\" /&gt; &lt;put-attribute...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-03-22-1",
        "teaser": null
      },{
        "title": "젠킨스 장점 / 리눅스 개발서버 젠킨스 설치 방법",
        "excerpt":"젠킨스 장점 빌드, 테스트, 배포 과정을 자동화하여 지속적 통합(CI)이 가능합니다. 반복적인 작업의 자동화로 시간을 절약하여 개발 생산성을 높일 수 있습니다. 개발자의 실수를 최소화하고, 신속하게 배포할 수 있습니다. Git에 커밋하지 않은 개발중 소스를 Stash/Unstash 하는 번거로움이 없어집니다. 스케줄링하여 특정 시간대에 빌드 및 배포를 실행할 수 있습니다. 빌드 상태, 테스트 결과 등을...","categories": ["op"],
        "tags": [],
        "url": "/op/2024-04-02-1",
        "teaser": null
      },{
        "title": "DB 마이그레이션 테이블을 통한 엑셀 일괄 업로드 방법",
        "excerpt":"엑셀 일괄 업로드 절차 테이블 CSV 파일에 엑셀 데이터 입력 후 인코딩을 UTF-8로 변경합니다. DBeaver 툴에서 마이그레이션 테이블에 CSV 파일을 가져옵니다. INSERT SELECT문으로 원본 테이블에 마이그레이션 테이블 데이터를 일괄 등록합니다. 테이블 설계 참고 원본 테이블 설계 제약조건 컬럼명 데이터 타입 기본값 설명 PK QSTN_STNDRD_ID varchar(20) 문항기준ID QSTN_DVSN_CDV varchar(50) 문항구분코드값 PUBSER_CDV...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2024-04-02-1",
        "teaser": null
      },{
        "title": "옵시디언 설치 / 옵시디언 파일 구글 드라이브 동기화 방법",
        "excerpt":"옵시디언 설치 https://obsidian.md/download 옵시디언 사용 이유 Git 블로그에 올릴 마크다운 파일을 작성하는 툴로 사용할 수 있습니다. Git 블로그에 올리지 않을 비공개 메모를 모아두기 좋습니다. 구글 드라이브를 통해 동기화할 수 있고, 검색 성능이 좋다는 장점이 있습니다. 옵시디언 윈도우 PC 동기화 구글 드라이브 설치 https://www.google.com/intl/ko_kr/drive/download 옵시디언 파일 동기화를 위해 데스크탑용 구글 드라이브...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2024-04-18-1",
        "teaser": null
      },{
        "title": "CSS 폰트 네트워크 지연 문제 해결 방법",
        "excerpt":"CSS 폰트 로딩 속도 문제 기존 폰트 삽입 코드 @import url('https://webfontworld.github.io/gmarket/GmarketSans.css'); 기존에는 특정 깃허브에서 @font-face CSS 텍스트를 import 하는 방식이었습니다. 그래서, 학교 등 네트워크가 느린 곳에서는 폰트 로딩에 2~3분이나 걸리는 이슈가 생겼습니다. 폰트 삽입 방식 변경 @font-face { font-family: 'GmarketSans'; font-weight: 500; font-style: normal; src: url('../font/GmarketSansMedium.woff') format('woff'); font-display: swap; }...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-04-18-1",
        "teaser": null
      },{
        "title": "코딩테스트 대비 프로그래머스 55문제 Java 풀이",
        "excerpt":"프로그래머스 코딩테스트 고득점 Kit 문제를 다 풀고서 풀면 좋은 문제들입니다. 배열 문제 풀이 LV.1 두 개 뽑아서 더하기 import java.util.HashSet; public class Solution { public static int[] solution(int[] numbers) { // 중복 값 제거를 위한 해쉬셋 생성 HashSet&lt;Integer&gt; set = new HashSet&lt;&gt;(); // 두 수를 선택하는 모든 경우의 수를 반복문으로...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-04-30-1",
        "teaser": null
      },{
        "title": "코딩테스트 필수 Java 문법 및 자료구조 정리",
        "excerpt":"Java 문법 및 자료구조 Java 변수 타입 프리미티브 타입 (기본형) 메모리에 값을 직접 저장해서 연산 속도가 빠릅니다. 예시 : int, long, float, double, char 등 레퍼런스 타입 (참조형) 메모리에 값이 들어있는 객체의 주소를 저장합니다. 컬렉션 프레임워크에는 래퍼 클래스 객체처럼 레퍼런스 타입 데이터가 저장됩니다. 예시 : Integer, Long, Float, Double, Character...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-05-01-1",
        "teaser": null
      },{
        "title": "CDN 사이트 먹통으로 인한 CSS, JS 라이브러리 내재화 방법",
        "excerpt":"CDN 사이트 먹통 발생 문제 라이브러리 스크립트 &lt;link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css\" /&gt; &lt;script src=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js\"&gt;&lt;/script&gt; CDN 사이트를 통해 라이브러리를 import 한 jsp 페이지들이 정상 동작하지 않는 오류가 발생하였습니다. CSS, JS 등 라이브러리 파일은 다운받아 프로젝트 내에 두고 import 하는 것이 좋습니다. URL 링크로 import 하면, CDN 사이트가 정상 동작하지 않게 되었을 때...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-05-02-1",
        "teaser": null
      },{
        "title": "egovFramework에서 Java 캐시 라이브러리 Ehcache 사용 방법",
        "excerpt":"API 요청 결과를 Ehcache와 같은 캐시 시스템에 저장하고 재활용하면, 요청이 많이 몰리는 시간에 조회 속도가 느려지는 성능 이슈를 해결할 수 있습니다. Ehcache 사용 시 주의사항 이중화된 운영서버 was 1에서 Ehcache로 저장한 캐시 데이터는 was 2에서 꺼낼 수 없습니다. Ehcache는 로컬 캐시로 동작하기 때문에, 각 WAS가 독립적인 캐시 영역을 가집니다. Terracotta,...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-05-08-1",
        "teaser": null
      },{
        "title": "CS 면접 및 코딩테스트를 위한 알고리즘 개념 정리",
        "excerpt":"알고리즘 도감 앱에서 알고리즘의 동작을 그림으로 쉽게 이해할 수 있습니다. 정렬 알고리즘 정의된 순서대로 데이터를 나열하는 방법입니다. 버블 정렬 끝에서부터 서로 인접한 두 원소를 비교하며 순서를 정렬하는 알고리즘입니다. 코드가 단순하지만, 시간복잡도가 O(n²)으로 매우 느립니다. 버블 정렬 예시 배열의 한쪽 끝에서 두 원소를 비교하고, 순서에 맞지 않으면 위치를 교환합니다. 다음 원소로...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-05-10-1",
        "teaser": null
      },{
        "title": "CS 면접 및 코딩테스트를 위한 알고리즘 개념 정리",
        "excerpt":"알고리즘 도감 앱을 함께 보면, 각 알고리즘 동작을 그림으로 쉽게 이해하고 복습하기 좋습니다. 정렬 알고리즘 정의된 순서대로 데이터를 나열하는 방법입니다. 버블 정렬 끝에서부터 서로 인접한 두 원소를 비교하며 순서를 정렬하는 알고리즘입니다. 코드가 단순하지만, 시간복잡도가 O(n²)으로 매우 느립니다. 버블 정렬 구현 예시 배열의 한쪽 끝에서 두 원소를 비교하고, 순서에 맞지 않으면...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-05-10-1",
        "teaser": null
      },{
        "title": "Java 접근제어자 정의 및 종류",
        "excerpt":"접근제어자란? Java에서 클래스, 변수, 함수에 대한 접근을 제어하는 데 사용됩니다. 외부로부터 불필요한 접근을 제한하고 코드를 캡슐화하여 재사용성을 높일 수 있습니다. Java 접근제어자 종류 private 같은 클래스 내에서만 접근할 수 있어 정보 은닉과 캡슐화를 지원합니다. private 변수는 public getter, setter 함수를 통해 접근할 수 있습니다. default (package-private) 같은 패키지 내의 클래스에서만...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-05-15-1",
        "teaser": null
      },{
        "title": "프로그래머스 코딩 기초 트레이닝 Lv.0 124문제 Java 풀이",
        "excerpt":"프로그래머스 코딩 기초 트레이닝 Lv.0 124문제 https://school.programmers.co.kr/learn/challenges/training?order=recent&amp;page=1 문자열 연산, 배열, 조건문, 반복문 등 기본적인 Java 문법을 익힐 수 있는 문제들입니다. 정답률 높은 순으로 풀면 성취감 느끼며 기본을 다질 수 있습니다. 출력 문제 풀이 문자열 출력하기 import java.util.Scanner; public class Solution { public static void main(String[] args) { Scanner sc =...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-05-21-1",
        "teaser": null
      },{
        "title": "프로그래머스 코딩테스트 입문 Lv.0 100문제 Java 풀이",
        "excerpt":"프로그래머스 코딩테스트 입문 Lv.0 100문제 https://school.programmers.co.kr/learn/challenges/beginner?order=recent 입문 문제가 기초 트레이닝 문제보다 오히려 더 쉬운 것 같습니다. 정답률 높은 순으로 풀면 자신감이 붙어서 좋습니다. 한 문제에서 오래 막히는 경우, 질문으로 코드 남겨서 반례 요청 후 다른 문제 풀고 다시 와서 풀면 효율적입니다. 난이도 Lv. 0 100문제 풀이 옹알이 (1) class Solution...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-05-21-2",
        "teaser": null
      },{
        "title": "네이버클라우드 운영서버 VPN 접속 방법",
        "excerpt":"NCP SSL VPN 접속 방법 네이버클라우드 운영서버는 VPN Agent 설치 및 연결 후 접속이 가능합니다. VPN Agent 설치 https://guide-gov.ncloud-docs.com/docs/sslvpn-download 위 링크에서 Windows용 SSL VPN Agent를 다운로드하고 설치합니다. VPN 추가 VPN 프로그램의 VPN 추가 팝업에서 아래와 같이 입력하고 추가합니다. 도메인 https://sslvpn-kr-vpc-01.gov-ncloud.com (수도권) 아이디 SSLVPN 사용자 Username 비밀번호 SSLVPN 사용자 Password VPN...","categories": ["op"],
        "tags": [],
        "url": "/op/2024-05-28-1",
        "teaser": null
      },{
        "title": "윈도우 Java JDK 설치 방법",
        "excerpt":"JDK 설치 방법 설치할 JDK 버전 선택 https://www.oracle.com/java/technologies/downloads/archive 오라클 로그인 후, 위 경로 우측에서 설치할 JDK 버전을 선택합니다. JDK 1.8 버전을 설치하려면 Java SE 8 (8u211 and later) 을 선택해야 합니다. 윈도우용 JDK 다운로드 및 설치 Java SE Development Kit 표 하단 우측의 실행파일을 다운로드합니다. JDK 1.8버전은 jdk-8u211-windows-x64.exe 을 실행해서...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2024-05-29-1",
        "teaser": null
      },{
        "title": "IntelliJ에서 이클립스 Maven 프로젝트 사용 방법",
        "excerpt":"이클립스 프로젝트 Import 프로젝트 복사 기존 이클립스 프로젝트에 영향이 가지 않게, 이클립스 프로젝트를 통째로 복사하고 이름을 변경합니다. IntelliJ에서 이클립스 프로젝트 열기 좌측 상단 File &gt; New &gt; Project from Existing Sources… &gt; 복사한 이클립스 폴더의 workscase에서 프로젝트 폴더 선택 &gt; OK &gt; import project from external model : Eclipse 선택...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-05-29-1",
        "teaser": null
      },{
        "title": "JSP에 Google Analytics (GA 코드) 삽입 방법",
        "excerpt":"GA 코드 삽입 JSP GA 코드 위치 예시 &lt;!DOCTYPE html&gt; &lt;html lang=\"ko\"&gt; &lt;head&gt; &lt;meta charset=\"UTF-8\"&gt; &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; &lt;title&gt;프로젝트명&lt;/title&gt; &lt;link rel=\"stylesheet\" href=\"/CSS경로/CSS명.css\"&gt; &lt;!-- Google Analytics --&gt; &lt;script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X\"&gt;&lt;/script&gt; &lt;script&gt; window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-XXXXXXXXX-X'); &lt;/script&gt; &lt;!-- End Google Analytics --&gt; &lt;script...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-05-31-1",
        "teaser": null
      },{
        "title": "내부망에서 리눅스 MariaDB 설치 방법 / 기존 DB 마이그레이션 방법",
        "excerpt":"인터넷 연결이 안되어서 yum 명령어를 사용할 수 없는 리눅스 서버에 바이너리 파일로 MariaDB 설치하는 방법입니다. 정보보안팀 방화벽으로 막혀있는 사내 개발서버에 개발DB를 설치하고, 기존 RDS DB 이관을 진행하였습니다. 리눅스 MariaDB 설치 MariaDB 설치파일 다운 https://mariadb.org/download MariaDB Server 탭 &gt; 프로젝트에 맞는 MariaDB Server Version 선택 &gt; Operating System : Linux 선택...","categories": ["op"],
        "tags": [],
        "url": "/op/2024-06-11-1",
        "teaser": null
      },{
        "title": "프로그래머스 SQL 고득점 Kit 106문제 MySQL 풀이 (작성중)",
        "excerpt":"프로그래머스 SQL 고득점 Kit 106문제 https://school.programmers.co.kr/learn/challenges?tab=sql_practice_kit 요즘 SQL 코딩테스트 문제도 종종 나와서 SQL 고득점 Kit을 MySQL로 풀어보았습니다. SQL 문제는 SELECT * FROM 테이블명을 주석으로 숨겨두고, 구현한 로직을 /* */로 감싸서 전체 데이터를 확인하며 검수하면 좋습니다. SELECT 33문제 풀이 조건에 맞는 도서 리스트 출력하기 SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, \"%Y-%m-%d\") AS PUBLISHED_DATE FROM...","categories": ["python-java"],
        "tags": [],
        "url": "/python-java/2024-06-13-1",
        "teaser": null
      },{
        "title": "자주 보이는 프로젝트 기술스택 개념 정리",
        "excerpt":"여러 기업 채용공고에 자주 보이는 기술스택 개념을 익히기 위해 정리한 글입니다. DevOps 기술 Docker 컨테이너화된 애플리케이션을 독립적으로 실행하기 위한 오픈 소스 플랫폼입니다. 도커는 이미지라는 템플릿을 사용하여 컨테이너를 생성하고, 이를 저장하고 공유할 수 있는 레지스트리를 제공합니다. 도커 허브(Docker Hub)는 가장 잘 알려진 도커 레지스트리 중 하나입니다. Kubernetes 컨테이너화된 애플리케이션의 자동 배포,...","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2024-06-14-1",
        "teaser": null
      },{
        "title": "자주 사용하는 AWS 용어 개념 정리",
        "excerpt":"AWS 용어 정리 VPC 사용자가 AWS 요소들을 배치할 수 있는 가상 네트워크입니다. 운영서버 VPC 설계 public Subnet에 배스천 서버, NAT GW, ALB를 배치하여 인터넷을 통해 접근할 수 있도록 합니다. private Subnet에는 운영 EC2 서버와 RDS를 배치하여 보안을 강화합니다. 배스천 서버 개발자는 배스천 서버를 통해야만 EC2 서버들에 SSH 접속할 수 있습니다....","categories": ["aws"],
        "tags": [],
        "url": "/aws/2024-06-20-1",
        "teaser": null
      },{
        "title": "이클립스 플러그인 설치 방법 / 이클립스 플러그인 종류",
        "excerpt":"이클립스 플러그인 설치 이클립스 플러그인 자동 설치 방법 Help &gt; Install And Software &gt; 플러그인 링크 입력 &gt; 설치할 플러그인 체크 &gt; Next &gt; Next &gt; 라이센스 동의 &gt; Finish 이클립스 플러그인 수동 설치 방법 설치하려는 플러그인 jar 파일 다운 &gt; 이클립스 폴더 하위 plugins 폴더에 jar 파일 이동 &gt;...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2024-07-03-1",
        "teaser": null
      },{
        "title": "egovFramework 관리자 화면 종류 및 데이터 조작 방법",
        "excerpt":"관리자 계정 추가 방법 관리자 계정 목록 화면 /uss/umt/EgovUserManage.do comtnemplyrinfo 테이블의 관리자 계정 목록을 확인하고, 등록 및 수정 화면으로 이동 가능한 화면입니다. 관리자 권한 추가 SELECT * FROM comtnemplyrinfo ORDER BY ESNTL_ID DESC 위 쿼리로 신규 추가한 관리자 계정의 ESNTL_ID 컬럼 값을 확인하고, INSERT INTO comtnemplyrscrtyestbs ( SCRTY_DTRMN_TRGET_ID, MBER_TY_CODE, AUTHOR_CODE...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2024-09-09-1",
        "teaser": null
      },{
        "title": "윈도우 잠금화면 먹통 문제 해결 방법",
        "excerpt":"윈도우 잠금화면 먹통 문제 해결   Windows + L 시 윈도우 잠금화면 기능이 작동하지 않는 경우,  Fn 키를 누르면서 Windows 키를 누른 뒤 다시 시도하면 정상 작동합니다.   윈도우 로고키와의 조합키 작동이 다시 활성화되기 때문입니다.  ","categories": ["tool"],
        "tags": [],
        "url": "/tool/2024-12-05-1",
        "teaser": null
      },{
        "title": "네이버 클라우드 서버 콘솔 (NCP Console) 사용법",
        "excerpt":"NCP 콘솔 사용법 NCP 서버 정보 확인 NCP Console 좌측 Services 메뉴 &gt; Server &gt; 네이버 클라우드 서버 목록 OS, CPU, Memory, 디스크 용량, 서브넷, IP 등 전반적인 서버 정보 확인이 가능합니다. ALB 로드밸런서 정보 확인 NCP Console 좌측 Services 메뉴 &gt; Load Balancer &gt; Load Balancer &gt; Public 네트워크의...","categories": ["op"],
        "tags": [],
        "url": "/op/2024-12-18-1",
        "teaser": null
      },{
        "title": "제이미터 부하테스트 방법 / 제이미터 사용법",
        "excerpt":"제이미터 설치 https://jmeter.apache.org/download_jmeter.cgi Binaries의 zip 파일 다운로드 후 압축을 풀고, bin 폴더 내의 jmeter.bat 파일을 실행하여 설치합니다. 제이미터 부하테스트 방법 Thread Group 추가 좌측 Test Plan 우클릭 &gt; Add &gt; Threads (Users) &gt; Thread Group &gt; 속성 설정 &gt; Ctrl + S (저장) Thread Group 속성 Number of Threads (users)...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2024-12-23-1",
        "teaser": null
      },{
        "title": "MySQL DDL 쿼리 정리 / 테이블 생성 및 수정 방법",
        "excerpt":"MySQL DDL 쿼리 테이블 생성 CREATE TABLE `테이블명` ( `컬럼명1` 컬럼타입 NOT NULL COMMENT '컬럼1 설명', `컬럼명2` 컬럼타입 NOT NULL COMMENT '컬럼2 설명', `컬럼명3` 컬럼타입 NOT NULL COMMENT '컬럼3 설명', PRIMARY KEY (`컬럼명1`,`컬럼명2`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='테이블 설명'; CHARSET=utf8mb4 설정 시 COLLATE을 명시하지 않으면 기본 Collation은 utf8mb4_general_ci으로 적용됩니다....","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2025-01-08-1",
        "teaser": null
      },{
        "title": "MySQL DQL 쿼리 정리 / 테이블 데이터 조회 쿼리 문법",
        "excerpt":"MySQL DQL 쿼리 INNER JOIN (=JOIN) SELECT * FROM 테이블1 A INNER JOIN 테이블2 B ON A.키 = B.폴인키 두 테이블에서 조인 조건을 만족하는 행만 결합하여 반환합니다. 조인 조건을 만족하지 않는 행은 결과에서 제외해서 NULL 값으로 채우지 않으므로, 성능이 개선됩니다. 테이블1에 2건, 테이블2에 5건 있으면 최소 0건, 최대 5건의 결과가...","categories": ["plan-design-db"],
        "tags": [],
        "url": "/plan-design-db/2025-01-08-2",
        "teaser": null
      },{
        "title": "프로그래밍 명명 규칙 정리",
        "excerpt":"일반적인 프로그래밍 명명 규칙을 정리하였습니다. 프로젝트에 따라 다른 규칙이 적용될 수 있고, 일관성이 가장 중요합니다. 파스칼 표기법 (Pascal Case) Java, TypeScript, C# 등에서 클래스명이나 타입명을 파스칼 케이스로 작성합니다. 예시) PascalCase 낙타 표기법 (Camel Case) Java, Javascript 등에서 변수명이나 함수명을 카멜 케이스로 작성합니다. HTML에서 id도 카멜 케이스로 작성하여 Javascript와 일관성을 유지하면...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-01-08-1",
        "teaser": null
      },{
        "title": "디딤365 DidimNow 콘솔 사용법",
        "excerpt":"DidimNow 사용법 디딤 문의 방법 DidimNow 로그인 &gt; 고객지원 &gt; AS 요청 &gt; 글쓰기 운영서버 장애 원인 확인 요청, WAS 서버 또는 DB 커넥션 풀 설정 확인 및 변경 요청, VM 서버 ACG 인바운드 방화벽 정책 하용 요청 등이 가능합니다. DB 커넥션 설정 값 maxTotal WAS 서버 커넥션 풀 최대...","categories": ["op"],
        "tags": [],
        "url": "/op/2025-01-16-1",
        "teaser": null
      },{
        "title": "시큐어코딩 점검툴 사용법 / 보안 취약점 보완 조치 방법",
        "excerpt":"시큐어코딩 점검은 신규 서비스 안정화 기간 중 실시하고, 매년 정기적으로 점검을 실시합니다. 시큐어코딩 진단 방법 CODE-RAY XG PRO 사용법 제공 받은 exe 파일을 설치하여 실행 후 운영 브랜치를 바라보는 프로젝트폴더\\src\\main 경로로 지정합니다. 프로그램 기본 세팅 확인 후 우측 검사 시작 버튼을 누르면 30분 정도 소요됩니다. 시큐어코딩 점검 계획서에 첨부할 사진으로...","categories": ["op"],
        "tags": [],
        "url": "/op/2025-01-23-1",
        "teaser": null
      },{
        "title": "네이버 클라우드 OCR 사용법",
        "excerpt":"JAVA 네이버 클라우드 OCR 사용법 네이버 클라우드 OCR 정보 추가 Globals.NaverOCR.Url = https://console.ncloud.com/ocr/domain Globals.NaverOCR.SecretKey = RWVaQUtWcWpOQlZnamZNRml5bG9H~시크릿키~ Globals.NaverOCR.InvokeUrl = https://5gip3zw***.apigw.ntruss.com/custom/v1/34037/6848b40e402f1330f37ae98b6538faa00a95b091eaa50f116515df8ccdf~~~~/general globals.properties 파일에 네이버 클라우드 OCR 정보를 추가합니다. 시크릿키는 네이버 클라우드 계정으로 발급받아야 합니다. OCR API 유틸 예시 public class 유틸명 { protected static final Logger logger = LoggerFactory.getLogger(ApiService.class); static final String...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-02-07-1",
        "teaser": null
      },{
        "title": "웹 취약점 점검 결과 이행 조치 방법",
        "excerpt":"사내 정보보안팀에서 제공한 웹 취약점 점검 결과보고서를 통해 취약점 조치를 진행합니다. 웹 취약점 점검도구 Burp-Suite 프록시 툴 OWASP-ZAP 웹 애플리케이션 취약점 스캔 및 자동화 공격도구 웹 취약점 점검 항목 크로스 사이트 스크립팅 - XSS 취약점 발생 예시 공지사항 등록 시, 에디터에 아래의 크로스 사이트 스크립트 공격 구문 입력 후 등록이...","categories": ["op"],
        "tags": [],
        "url": "/op/2025-02-17-1",
        "teaser": null
      },{
        "title": "이클립스 스프링 배치 프로젝트 생성 및 스케줄링 실행 방법",
        "excerpt":"이클립스 STS 사용법 STS는 이클립스에서 스프링 부트 프로젝트를 쉽게 관리하고 실행할 수 있게 도와주는 플러그인입니다. 독립형 STS 이클립스를 설치해도 되고, 기존 이클립스에 STS 플러그인을 설치해도 됩니다. 독립형 STS 이클립스 설치 방법 https://spring.io/tools Spring Tools for Eclipse - WINDOWS X86_64 선택하여 다운로드 후 압축 해제합니다. SpringToolSuite4.exe 파일을 실행하면 STS 이클립스가 실행됩니다....","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-03-10-1",
        "teaser": null
      },{
        "title": "에디트플러스 사용법 / 에디트플러스 Java 실행 방법",
        "excerpt":"에디트플러스는 30일 무료 평가판 사용 후 라이선스 구매가 필요한 유료 툴입니다. 간단하고 가벼운 코드 편집기이며, VSCode로 대체가 가능합니다. 에디트플러스 사용법 에디트플러스 Java 컴파일 방법 상단 도구 &gt; 기본 설정 &gt; 도구 &gt; 사용자 도구 &gt; 추가 &gt; C드라이브에 설치된 Javac.exe 추가 &gt; 단축키 실행 도구 추가 시, Ctrl + 1,...","categories": ["tool"],
        "tags": [],
        "url": "/tool/2025-04-20-1",
        "teaser": null
      },{
        "title": "IntelliJ SpringBoot + Vue 프로젝트, 소켓 + 카프카 프로젝트 세팅 방법",
        "excerpt":"AIDT 실시간 퀴즈 프로젝트를 인수인계 받아 세팅하는 과정을 정리하였습니다. IntelliJ SpringBoot + Vue 프로젝트 세팅 Java 17 설치 및 설정 https://0songha0.github.io/tool/2024-05-29-1 위 글을 참고하여 JAVA 설치 및 환경변수 설정을 완료하면 됩니다. 현재 프로젝트를 잠시 열어서 Java 버전 확인하고 맞게 설치하는 것이 좋습니다. IDE가 아닌 터미널에서 SpringBoot Gradle/Maven 빌드 또는 Kafka...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-04-21-1",
        "teaser": null
      },{
        "title": "카프카 (apache kafka) 기초 개념 / 카프카 관련 용어 정리",
        "excerpt":"카프카 프로젝트 분석을 위해서 학습한 내용을 정리한 글입니다. 카프카 개념 카프카란? 카프카는 중앙 메시지 허브처럼 동작하는 분산 이벤트 스트리밍 플랫폼입니다. 실시간 데이터 파이프라인, 스트리밍 애플리케이션 구축에 적합합니다. 여러 애플리케이션이 카프카를 통해 메시지 발행(Publish) 하고, 구독(Subscribe) 할 수 있습니다. 링크드인에 데이터를 생성하는 소스 애플리케이션과 데이터를 적재하는 타겟 애플리케이션이 늘어나면서 아키텍처가 복잡해짐에...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-04-25-1",
        "teaser": null
      },{
        "title": "로컬 리눅스 아파치 카프카 설치 및 실행 방법",
        "excerpt":"로컬 테스트를 위한 아파치 카프카 2.5 설치 방법입니다. 윈도우에서는 .sh 파일을 직접 실행할 수 없어서 리눅스 가상 환경이 필요합니다. IntelliJ에서 도커로 카프카 이미지 설정 후 실행하는게 더 간편합니다. 리눅스 아파치 카프카 설치 및 실행 카프카 바이너리 파일 다운 https://kafka.apache.org/downloads 위 링크에서 Binary downloads: kafka_2.12-2.5.0.tgz 파일 다운로드 후 압축을 해제하여 설치합니다....","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-04-29-1",
        "teaser": null
      },{
        "title": "아파치 카프카 설정 방법 / 브로커, 토픽, 프로듀서, 컨슈머, 스트림즈 옵션 정리",
        "excerpt":"카프카 브로커 설정 카프카폴더/config/server.properties 파일에 브로커 실행 시 사용되는 설정들을 정의합니다. 브로커 ID 설정 broker.id=0 같은 클러스터 내에서 현재 실행할 브로커 고유 ID를 설정합니다. 브로커 리스너 설정 -- 브로커가 요청을 수신할 주소 설정 (내부 바인딩) listeners=PLAINTEXT://localhost:9092 -- 클라이언트가 접속할 브로커 주소 설정 (외부 연결용) advertised.listeners=PLAINTEXT://localhost:9092 클라이언트는 advertised.listeners에 설정된 브로커 주소:포트를...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-04-29-2",
        "teaser": null
      },{
        "title": "카프카 구축 시 참고사항 / 설치형 카프카, SaaS형 카프카 차이 및 장단점",
        "excerpt":"카프카 구축 시 참고사항 클라우드 서비스 모델 종류 https://0songha0.github.io/op/2025-04-30-1 온프레미스, IaaS, PaaS, SaaS 개념을 정리한 글입니다. 운영 카프카 권장 하드웨어 사양 RAM 32GB (브로커 프로세스용 힙 메모리 6GB, 나머지는 데이터 입출력을 위한 OS 페이지 캐시 영역으로 활용) CPU 24 core (SSL 암호화 및 압축 기능 사용 시 더 높은 사양...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-04-30-1",
        "teaser": null
      },{
        "title": "클라우드 서비스 모델 종류 / 온프레미스, IaaS, PaaS, SaaS 개념 정리",
        "excerpt":"클라우드 서비스 모델 종류 기존 온프레미스 애플리케이션, 데이터, 런타임, 미들웨어, 운영체제, 가상화, 서버, 스토리지, 네트워크 모두 직접 구축 및 관리합니다. 예시) 기업 자체 데이터센터, 직접 운영하는 서버 IaaS (Infrastructure as a Service) 애플리케이션, 데이터, 런타임, 미들웨어, 운영체제만 직접 구축 및 관리합니다. 인프라 (가상화, 서버, 스토리지, 네트워크) 는 클라우드 서비스 제공...","categories": ["op"],
        "tags": [],
        "url": "/op/2025-04-30-1",
        "teaser": null
      },{
        "title": "카프카 쉘 스크립트 CLI 종류 및 사용법",
        "excerpt":"카프카 CLI 종류 Kafka CLI 도구는 카프카 설치 시 bin 폴더에 포함된 쉘 스크립트 (.sh 또는 .bat) 실행 파일입니다. 카프카 클러스터 운영 및 관리 기능들을 CLI (Command Line Interface) 형태로 제공합니다. kafka-server-start.sh 카프카 브로커 실행 kafka-server-stop.sh 카프카 브로커 종료 zookeeper-server-start.sh 주키퍼 서버 실행 zookeeper-server-stop.sh 주키퍼 서버 종료 kafka-topics.sh 토픽 생성,...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-05-02-1",
        "teaser": null
      },{
        "title": "Java 카프카 프로듀서, 컨슈머 애플리케이션 개발 방법",
        "excerpt":"Java 프로젝트 생성 (공통) 카프카 프로듀서, 컨슈머 애플리케이션은 Java 프로젝트로 개발할 수 있습니다. Javascript, go, Python 등으로도 가능하지만, 공식 지원되는 라이브러리 언어는 Java입니다. IntelliJ Java 프로젝트 생성 방법 File &gt; New &gt; Project… &gt; 아래와 같이 입력 후 Create Name 프로젝트명 입력 Language Java 1.8 이상 선택 Build system Gradle...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-05-07-1",
        "teaser": null
      },{
        "title": "카프카 스트림즈 개념 정리 / Java 카프카 스트림즈 애플리케이션 개발 방법",
        "excerpt":"카프카 스트림즈 개념 정리 카프카 스트림즈를 이용하면 토픽 스트림 데이터 처리 후, 토픽 또는 외부 시스템에 저장할 수 있습니다. 처리할 토픽 파티션이 3개면 스트림즈 애플리케이션 내부에 3개의 태스크가 자동으로 할당됩니다. 파티션 수만큼 생성된 태스크들이 병렬로 데이터를 처리하므로 성능이 좋습니다. 같은 application.id로 스트림즈 애플리케이션들을 실행하면, 프로세스-스레드가 분리되어 일부 프로세스에 장애가 발생해도...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-05-12-1",
        "teaser": null
      },{
        "title": "카프카 커넥트 개념 정리 / Java 카프카 커넥트 개발 방법",
        "excerpt":"카프카 커넥트 개념 정리 카프카 커넥트를 이용하면 외부 시스템과 카프카 토픽 간 반복적인 데이터 수집 및 전송 파이프라인을 자동화할 수 있습니다. 멀티 스레드로 실행되어 병렬 처리를 지원합니다. 데이터 수집량, 처리량, 오류율 등은 JMX를 통해 모니터링 할 수 있습니다. 커넥트 내부 커넥터는 태스크들을 설정 및 관리하고, 태스크는 데이터 처리를 합니다. MySQL,...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/2025-05-12-1",
        "teaser": null
      },{
        "title": "Git 블로그 카테고리 목록 페이징 기능 구현",
        "excerpt":"★ 추후 다시 작성 예정입니다 현재 Git 블로그는 GitHub Pages를 통해 자동 빌드 및 배포가 되고 있습니다. *.github.io 리포지토리에 push 시 GitHub가 Jekyll로 빌드해서 정적 웹사이트로 배포합니다. GitHub Pages는 글 카테고리 목록 페이징 및 커스텀 플러그인을 지원하지 않습니다. GitHub Actions로 jekyll-paginate-v2 플러그인을 사용하면 카테고리별 페이징이 가능합니다. 수동 페이징 구현은 반복...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-05-21-1",
        "teaser": null
      },{
        "title": "Vue 개념 및 구조 / Vue.js 설치 및 실행 방법 / Vue 디버깅 방법",
        "excerpt":"Vue.js 컴포넌트 단위로 UI를 구성하는 프론트엔드 프레임워크입니다. 기존 Javascript와 달리, 컴포넌트를 재사용해 중복 코드를 줄일 수 있습니다. DOM을 직접 가져와서 데이터를 수동 할당 및 업데이트 해야 하는 Javascript와 달리, Vue는 data에 선언한 값을 템플릿 구문에 바인딩 해두면 DOM에 자동 반영하고 렌더링 합니다. Vue는 하나의 페이지에서 Javascript로 동작하는 SPA (싱글 페이지...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-05-22-1",
        "teaser": null
      },{
        "title": "Vue 3 템플릿 문법 정리 (인터폴레이션, 디렉티브)",
        "excerpt":"인터폴레이션 (Interpolation) 템플릿에서 데이터를 HTML이 아닌 일반 텍스트로 간단히 출력할 때 사용합니다. Vue 데이터 바인딩 문법 중 하나이며, 데이터가 변경되면 템플릿이 다시 렌더링됩니다. {{ data변수명 }} 아래와 같이, 간단한 JS 표현식도 사용 가능합니다. &lt;p&gt;{{ count + 1 }}&lt;/p&gt; &lt;p&gt;{{ isTrue ? '참' : '거짓' }}&lt;/p&gt; &lt;p&gt;{{ data변수명.split('').reverse().join('') }}&lt;/p&gt; 디렉티브 (Directive)...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-05-26-1",
        "teaser": null
      },{
        "title": "Vue 3 Composition API 종류 및 사용법",
        "excerpt":"setup() 컴포넌트 인스턴스가 생성되기 전 호출되는 함수이며, Composition API의 진입점입니다. setup 함수 사용 예시 &lt;template&gt; &lt;p&gt; {{ counter }} &lt;/p&gt; &lt;button @click=\"increment\"&gt;click!&lt;/button&gt; &lt;/template&gt; &lt;script&gt; import { ref } from 'vue'; export default { setup(props, context) { const counter = ref(0); // 초기값 0 세팅 const increment = () =&gt; {...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-05-28-1",
        "teaser": null
      },{
        "title": "Bootstrap 개념 / Vue 프로젝트에서 부트스트랩 설치 및 사용 방법",
        "excerpt":"부트스트랩이란? 사전에 정의된 CSS 등을 사용하여 예쁜 HTML을 만들 수 있는 UI 프레임워크입니다. 반응형 웹 페이지 제작을 쉽게 도와줘서 한 페이지에서 PC 및 모바일 서비스가 가능합니다. Vue 프레임워크 사용 시 Vue에 특화된 BootstrapVue 또는 Vuetify 라이브러리도 활용 가능합니다. 부트스트랩 설치 CDN 방식 설치 방법 &lt;!-- Bootstrap CSS --&gt; &lt;link rel=\"stylesheet\"...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-05-29-1",
        "teaser": null
      },{
        "title": "Vue 컴포넌트 정의 방법 및 사용법",
        "excerpt":"Vue 컴포넌트 정의 방법 문자열 템플릿 방식 // HTML 내부 script에 컴포넌트 정의 시 const App = { template: ` // HTML 코드 작성 ` } // js 파일로 컴포넌트 정의 시 export default { template: ` // HTML 코드 작성 ` } HTML에서 Vue 컴포넌트를 정의하고, script에서 벡틱(`) 등으로...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-05-30-1",
        "teaser": null
      },{
        "title": "모니터 동적 밝기 조절 기능 비활성화 방법",
        "excerpt":"CABC란?  화면에 표시되는 콘텐츠 밝기/색상에 따라 자동으로 모니터 밝기를 조절하는 기능입니다.  다크모드를 적용한 크롬 화면, IntelliJ 화면 등이 어두워지니까 불편하여 비활성화 하였습니다.   삼성 모니터 CABC 기능 해제 방법  모니터 메뉴 &gt; 시스템 &gt; 동적 밝기 조정 : 해제  ","categories": ["it-tip"],
        "tags": [],
        "url": "/it-tip/2025-06-11-1",
        "teaser": null
      },{
        "title": "Vue Router URL 컴포넌트 매핑 방법",
        "excerpt":"Vue 라우터, 라우트 차이 Vue 라우터 URL 경로에 따라 화면에 렌더링할 컴포넌트를 매핑하는 라우팅 라이브러리 객체입니다. 앱에 전역 등록되어 다른 페이지 이동, URL 추적, 히스토리 관리를 수행합니다. Vue 라우트 현재 URL 경로, 동적 파라미터, 쿼리, 컴포넌트 정보 등을 담는 객체입니다. Vue 프로젝트 라우터 적용 방법 Vue 라우터 라이브러리 설치 npm...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-12-1",
        "teaser": null
      },{
        "title": "Vue HTTP API 통신 방법 / json-server, axios 사용하여 게시판 구현",
        "excerpt":"테스트용 JSON API 서버 설치 API 호출 테스트를 위한 가상 API 서버를 구축합니다. json-server 라이브러리 설치 npm install -D json-server@0.17.4 -D 옵션은 개발용 의존성으로 설치하며, devDependencies에 추가합니다. -G 옵션은 전역으로 설치되어 모든 프로젝트에서 CLI 명령어로 사용할 수 있습니다. JSON Server 실행 npx json-server --watch db.json --port 5000 프로젝트 루트 경로에...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-16-1",
        "teaser": null
      },{
        "title": "Vue 환경변수 사용 방법 / 서버벌 env 분리 설정",
        "excerpt":"Vue 환경변수 설정 서버별 env 파일 분리 .env 모든 모드에서 공통으로 사용되는 env 파일입니다. 특정 모드 env 파일이 적용되면, 기본 env 파일 값을 덮어쓰며 병합됩니다. .env.local 로컬에서 사용되는 env 파일입니다. *.local 파일은 git에서 제외됩니다. .env.[mode] 실행 모드에 따라 적용되는 env 파일입니다. mode 예시 : development, staging, production 프로젝트 루트 경로에...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-17-1",
        "teaser": null
      },{
        "title": "Vue 내장 컴포넌트 Transition, Teleport 사용법",
        "excerpt":"Transition 컴포넌트 DOM 또는 컴포넌트가 추가/제거될 때 애니메이션을 적용하는 트랜지션 컴포넌트입니다. v-if, v-show, 동적 컴포넌트 등 조건부 렌더링되는 단일 자식 요소에 효과가 적용됩니다. Transition 컴포넌트 클래스 종류 v-enter-from 요소가 나타나기 시작할 때 적용되는 클래스 v-enter-active 요소가 나타나는 동안 적용되는 트랜지션 (애니메이션) 클래스 v-enter-to 요소가 나타난 후 적용되는 클래스 v-leave-from 요소가...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-19-1",
        "teaser": null
      },{
        "title": "Vue 상태관리 라이브러리 Pinia 사용밥",
        "excerpt":"Pinia 용어 정리 Pinia란? Vue 2에서는 Vuex, Vue3에서는 Pinia가 공식 상태 관리 라이브러리입니다. 앱 전역에서 사용되는 상태 데이터를 중앙저장소 Pinia 스토어에서 관리할 수 있습니다. state 앱 전역에서 공유되는 반응형 상태 데이터입니다. getters state로 계산한 값을 반환하는 전역 computed 속성입니다. 읽기 전용이며, 캐싱 기능을 갑고 있습니다. actions state를 변경하거나 비동기 작업을...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-20-1",
        "teaser": null
      },{
        "title": "영단어 기본 구조 정리 / 접두사, 어근, 접미사 요약",
        "excerpt":"영단어 기본 구조 접두사 단어 앞에 붙어 방향, 부정, 강조 등 의미 추가 어근 단어의 핵심 의미를 담는 부분 접미사 단어 뒤에 붙어 품사를 바꾸거나, 의미 변형 접두사 요약 최중요 접두사 pro 앞에 (forth) pre 미리 (already) 전에 (before) re 뒤로 (back) 다시 (again) in¹ (im) 안에 (in) ex (es,...","categories": ["english"],
        "tags": [],
        "url": "/english/2025-06-22-1",
        "teaser": null
      },{
        "title": "영단어 최중요 어근 공부",
        "excerpt":"cap¹ (cip, ceive, cept) cap 잡다(hold) 생각을 취하다(take) capable 할 수 있는, 유능한 (cap : 잡다) (able : 할 수 있는) capability 능력, 역량 capacity 용량, 수용력, 능력 capture 포획하다, 사로잡다 생포, 포획, 억류 captive 사로잡힌, 억류된 포로, 인질 captivity 감금, 억류 captivate (~의 마음을) 사로잡다 anticipate 예측하다, 예상하다 (anti...","categories": ["english"],
        "tags": [],
        "url": "/english/2025-06-23-1",
        "teaser": null
      },{
        "title": "Vue 플러그인 사용법 / 전역 컴포넌트, 리소스, 커스텀 디렉티브 등록 방법",
        "excerpt":"Vue 플러그인이란? Vue 애플리케이션에 전역 기능 및 객체 등을 추가하는 확장 도구입니다. Vue Router, Vuex, Pinia 등도 Vue 플러그인입니다. Vue 커스텀 플러그인 생성 방법 Vue 플러그인 JS 파일은 /src/plugins 폴더 안에 작성하는 것이 관례입니다. 플러그인 객체 정의 방법 const 플러그인객체명 = { install(app, options) { // app : Vue 애플리케이션...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-24-1",
        "teaser": null
      },{
        "title": "Vue 컴포저블 함수 구현 및 사용 방법",
        "excerpt":"컴포저블 함수 (Composable) 반응형 상태 관리 로직을 캡슐화하여, 여러 컴포넌트에서 재사용할 수 있는 함수형 모듈입니다. axios로 서버 API 호출하는 로직도 컴포저블 함수로 만들 수 있습니다. 컴포저블 함수 정의 방법 import { ref } from 'vue'; // 상태 변수는 모듈 범위에 정의하거나, 상태 관리 스토어 Pinia 사용 필요 // 함수 범위에...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-25-1",
        "teaser": null
      },{
        "title": "타입스크립트 개념 정리 / 타입스크립트 설치 및 컴파일 옵션 설정 방법",
        "excerpt":"TypeScript란? Javascript를 안전하게 사용할 수 있도록 타입 관련 기능들을 추가한 확장 언어입니다. 타입스크립트 코드는 컴파일 시 타입 검사를 성공하면 Javascript로 변환됩니다. 컴파일 된 Javascript에는 타입 관련 코드들이 포함되지 않아 성능에 영향을 주지 않습니다. 코드 실행 전 타입 오류를 미리 발견하므로 일반 Javascript보다 안정성이 높습니다. 언어별 타입 시스템 차이 정적 타입...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-06-30-1",
        "teaser": null
      },{
        "title": "타입스크립트 타입 종류 및 타입 정의 방법",
        "excerpt":"TypeScript 기본 타입 종류 기본 원시 타입 (Primitive Types) // 문자만 저장 허용 let 변수명: string = \"문자\"; // 숫자만 저장 허용 (정수, 실수 모두 포함) let 변수명: number = 숫자; // 아주 큰 정수 저장 허용 let 변수명: bigint = 123456789012345678901234567890n; // 참/거짓만 저장 허용 let 변수명: boolean =...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-07-01-1",
        "teaser": null
      },{
        "title": "타입스크립트 타입 제어 기법 정리 / 타입 추론, 타입 단언, 타입 좁히기 등",
        "excerpt":"타입 추론 변수 타입이 정의되지 않은 경우, 타입스크립트가 자동으로 변수 타입을 추론합니다. 타입스크립트는 변수의 초기값을 기준으로 타입을 추론합니다. 초기값이 없는 변수는 암묵적 any 타입이므로, 어떤 타입 값이든 할당할 수 있습니다. 타입 넓히기를 통한 타입 추론 // a : number 타입 let a = 10; // a : 10 (number 리터럴...","categories": ["web-dev"],
        "tags": [],
        "url": "/web-dev/2025-07-01-1",
        "teaser": null
      }]
