// 3 - componente
import * as React from 'react';

export interface IAppProps {
}

const FirstComponent = (props: IAppProps) => {
  return (
    <div>
      <h1>Meu Primeiro componente</h1>
    </div>
  );
}

export  default FirstComponent;
