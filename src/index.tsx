import * as React from 'react';
import { render } from 'react-dom';
import { init, FieldExtensionSDK } from '@contentful/app-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';
import { SectionHeading } from '@contentful/forma-36-react-components';

interface AppProps {
  sdk: FieldExtensionSDK;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const parameter: any = props.sdk.parameters.instance;
  return (
    <div className="container">
      <SectionHeading element="h1" style={{fontSize: "1rem", paddingBottom: "0rem"}}>{parameter.message}</SectionHeading>
    </div>
  );
};

init((sdk: FieldExtensionSDK) => {
  sdk.window.startAutoResizer();
  render(<App sdk={sdk as FieldExtensionSDK} />, document.getElementById('root'));
});

/**
 * By default, iframe of the app is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }