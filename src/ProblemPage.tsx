import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

import { useEffect, useState } from 'react';
import StompJs, { Stomp } from '@stomp/stompjs';

const client = Stomp.client('ws://localhost:8080/gs-guide-websocket');

export default function ProblemPage() {
  const [code, setCode] = useState('');

  useEffect(() => {
    client.onConnect = (frame: IFrame) => {
      console.log('connect!');
      client.subscribe('/topic/greetings', (greeting) => {
        console.log('구독 응답 완료');
        console.log('subscribed!', greeting);
      });
    };
    client.onStompError = (frame) => {
      console.log('error');
    };
    client.activate();
  }, []);

  const handleChange = (newValue: string) => {
    console.log('change', newValue);
    setCode(newValue);
  };

  const handleClick = () => {
    console.log(code);
    client.send('/app/source', {}, JSON.stringify({ source: code }));
  };

  return (
    <>
      <h1>문제 : 덧셈</h1>
      <p>두 숫자를 입력받아 결과를 출력하는 함수를 작성하세요.</p>
      <AceEditor
        placeholder="코드를 입력해 주세요"
        mode="java"
        theme="github"
        onChange={handleChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={code}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        submit
      </button>
    </>
  );
}
