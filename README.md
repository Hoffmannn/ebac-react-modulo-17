# ebac-react-modulo-16
 
### `npm install`

Instala as dependências do projeto

### `npm start`

Executa o projeto no endereço [http://localhost:3000](http://localhost:3000)  
 

### `json-server --watch db.json --port 3030`

Executa o servidor utilizado pela aplicação
 

# ebac-ds ( design system aplicado no projeto )

## `npm run storybook`  

Executa StoryBook para visualização de componentes
 
### Componentes

- #### Box
  Uma caixa para agregar qualquer tipo de conteúdo.
  ##### Props
  - margin,
  - marginHorizontal,
  - marginVertical,
  - marginTop,
  - marginBottom,
  - marginLeft,
  - marginRight,
  - padding,
  - paddingLeft,
  - paddingRight,
  - paddingBottom,
  - paddingTop,
  - alignItems,
  - display,
  - justifyContent,
  - flexDiretcion,
  - gap,
  - backgroundColor,
  - fixed: `boolean`
- #### Button
  Um botão personalizavel com estilo inicial.
  ##### Props
   - onClick: `function`, 
   - mh (margin horizontal), 
   - mv (margin vertical), 
   - ml (margin left), 
   - mr (margin right), 
   - mt (margin top), 
   - mb (margin bottom),
   - p (padding), 
   - isDisabled: `boolean`,
- #### Card
  Componente com borda. Implementa props de `Box`.
- #### Container
  Agrega sua aplicação em um container estilizável. Implementa props de `Box`.
- #### Divider  
  Adiciona uma borda horizontal.

