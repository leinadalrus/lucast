import React from 'react';
import express from 'express';

import { createRoot, Root } from 'react-dom/client';

class AppModule<T> {
  constructor() {
    this.rootItem = createRoot(document.getElementById('root')!);
    this.rootItem.render(this.elementItem);
  }

  private expressApp = express();
  private rootItem: Root;
  private elementItem = React.createElement(
    'html',
    {className: 'rootElement'},
    ''
  );
}