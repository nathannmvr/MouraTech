import React from 'react';
import logo from '../img/logo.png';

function LoginPage() {
  return (
    <>
    <div class = 'min-h-screen flex flex-col justify-center items-center bg-slate-100 flex'>
      <div>
        <img src={logo} alt="Logo"/>
      </div>
      <h1 class = 'text-3xl my-6 font-bold'>Entre com sua conta</h1>
      <div class = 'text-xl border-2 border-slate-200 rounded-md'>
        <div>
          <input type="text" placeholder="E-mail" class = 'border-b-2 border-slate-200' size = '40'/>
        </div>
        <div>
          <input type="text" placeholder="Senha" size = '40'/>
        </div>
      </div>
      <h2 class='indent-80 font-bold text-blue-600 my-4'><a href="">Esqueceu sua senha?</a></h2>
      <button class = 'flex flex-initial w-1/3  bg-blue-800 text-white justify-center font-bold py-2 rounded'>Entrar</button>
    </div>
    </>
  );
}

export default LoginPage;
