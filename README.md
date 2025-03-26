# Coffee demo app

Простое приложение на Nuxt. Имеет два маршрута /login и /account. Настроены сессии и аутентификация. 

## Настройка

Подготовка yarn

```bash
# включить corepack
corepack enable
# установить последнею версию yarn
corepack install --global yarn@stable
```

Установить зависимостей

```bash
yarn install
```

## Сервер разработки

Запуск сервера разработки на `http://localhost:3000`:

```bash
yarn dev
```

Запуск локальной production сборки:

```bash
yarn preview
```

## Production

Создать production сборку

```bash
# yarn
yarn build
```


## Развертывание
- необходим хостинг node.js
- создать production сборку
- скопировать содержимое `/.output` на хостинг
- добавить переменную окружения `NUXT_SESSION_PASSWORD=a-random-password-with-at-least-32-characters`
- запустить сервер `node .output/server/index.mjs`