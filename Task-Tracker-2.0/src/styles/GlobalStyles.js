import { createGlobalStyle }  from 'styled-components';


export const GlobalStyles = createGlobalStyle`

body {
  font-family: 'Shadows Into Light Two', cursive;
  background: ${({ theme }) => theme.body};
  transition: all .5s linear;
  color: ${({ theme }) => theme.text};
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: ${({ theme }) => theme.border};
  padding: 30px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.btn {
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  background: ${({ theme }) => theme.btnback};
  color: ${({ theme }) => theme.text};
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

.task {
  background: ${({ theme }) => theme.primary};
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: ${({ theme }) => theme.borderLeft};
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

footer {
  margin-top: 30px;
  text-align: center;
}`



export const lightTheme = {
    body: '#fff',
    text: '#000',
    primary: '#eee2dc',
    borderLeft :'5px solid #AC3B61',
    border : '1px solid #123C69',
    btnback : '#AC3B61'
  };
  
  export const darkTheme = {
    body: '#000',
    text: '#fff',
    primary: '#AC3B61',
    borderLeft :'5px solid #eee2dc',
    border : '1px solid #eee2dc',
    btnback : '#14a76c'
  };
