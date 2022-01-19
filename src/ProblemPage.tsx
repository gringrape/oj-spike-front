import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import { useState } from 'react';

export default function ProblemPage() {
  const [code, setCode] = useState('');

  const handleChange = (newValue: string) => {
    console.log('change', newValue);
    setCode(newValue);
  };

  const handleClick = () => {
    console.log(code);
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
