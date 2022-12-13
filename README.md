# Aplicativo mobile do tabnews

Este aplicativo não é oficial, apenas um projeto hobby para brincar com a api do https://tabnews.com.br

---

### Passos para iniciar o projeto

Clone o projeto

```bash
  git clone https://github.com/DiegoRamosGomes/tabnews-app
```

Entre no diretório do projeto

```bash
  cd tabnews-app
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  npx expo start
```

Abrir no celular

```
  Escaneie o qrcode gerado com o app do Expo Go
  Caso for iOS pode escanear direto pela camera do celular)
```


Rodar o Flipper 

Faça o download do Flipper em -> https://fbflipper.com/

Instale o Android Studio e configure-o -> https://developer.android.com/studio?hl=pt

Instale o EAS (Expo Application Services) -> https://docs.expo.dev/build/setup/#1-install-the-latest-eas-cli

```
  npm install -g eas-cli
```

Logue em sua conta do Expo

```
  eas login
```

Verifique se está logado

```
  eas whoami
```

Execute o script

```
  yarn eas-android
```
- nota: Esse processo demora um pouco para buildar, então é melhor pegar um café...

Após finalizado vai aparecer em seu prompt a mensagem para instalação no emulador, dê um "Y" para "yes".

Após instalação no dispositivo, execute:

```
  yarn start
```
Feito isso, o seu Flipper deve reconhecer o aplicativo instalado.