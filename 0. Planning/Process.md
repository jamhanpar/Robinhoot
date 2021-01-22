## Instruction Order
1. Complete MVP
2. Complete Schema
3. Complete Normalizing State Shapes
4. Complete Backend Routes
5. Complete Frontend Routes & Components
6. Create Routes
7. Frontend Auth
8. Project Setup
    - updated gemfiles with the following gems:
        - better_errors
        - binding_of_caller
        - pry_rails
        - annotate
        - bcrypt
        - jquery-rails
    - updated application.js manifest to include:
        - //= require jquery
        - //= require rails-ujs
    - updated .gitignore to include:
        - node_modules/
        - bundle.js
        - bundle.js.map
    - created package.json file and installed the following using npm install:
        - webpack
        - webpack-cli
        - react
        - react-dom
        - react-router-dom
        - redux
        - react-redux
        - @babel/core
        - @babel/preset-react
        - @babel/preset-env
        - babel-loader
    - updated the webpack.config.js
        - entry point to: ./frontend/Robinhoot.jsx
        - output path to: app/assets/javascripts
        - configure module.rules to use Babel transpilation for:
            - JSX
            - ES6
        - include devtool: 'source-map'
9. React/Redux Setup
    - Entry file: Robinhoot.jsx
    - /frontend/components/root.jsx
    - /frontend/store/store.js
10. Backend Routes for Frontend Auth
    - 
11. Frontend Auth
    - /frontend/utils/session_api_utils.js