import * as React from 'react';
import { BaseTemplate } from './component/BaseTemplate/BaseTemplate';
import { Header } from './component/Header/Header';
import { Page } from './component/Pages/Page1';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div id="base-template-example">
        <BaseTemplate children={[<div></div>]} className="base-template">
            <Page title="Page"/>
          </BaseTemplate>
      </div>
    </div>
  );
}
