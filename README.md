# FreteForm Component

Este componente fornece um formulário para consultar informações de frete com base em um CEP usando a API ViaCEP.

## Instalação

1. Adicione o componente ao seu projeto VTEX IO:
 
``` vtex add vtex.my-frete-form@0.x ```



2. No diretório do seu tema ou da sua loja, instale o componente:

```vtex install vtex.my-frete-form ```


3. Para usar o componente em sua loja, importe e utilize o componente FreteFormno local desejado


```ruby

import React from 'react';
import FreteForm from 'vtex.my-frete-form/FreteForm';

```

### Configuração do Bloco (block.json)


1. Adicione um arquivo block.jsonna raiz do seu componente para configurar as propriedades do bloco.

``` {
  "name": "vtex.my-frete-form",
  "title": "Frete Form",
  "description": "Componente para consultar informações de frete usando a API ViaCEP.",
  "version": "0.1.0",
  "main": "index.js",
  "scripts": {
    "vtex:build": "seu-script-de-build-aqui"
  },
  "dependencies": {
    "react": "3.x",
    "react-dom": "3.x",
    "vtex.styleguide": "9.x"
    // Adicione outras dependências necessárias
  },
  "peerDependencies": {
    "vtex.render-runtime": "9.x"
  },
  "builders": {
    "docs": "vtex.docs@1.x",
    "docs:dev": "vtex.docs@1.x"
  },
  "readme": {
    "src": "README.md"
  },
  "files": [
    "dist",
    "scripts",
    "README.md",
    "assets"
  ]
}```