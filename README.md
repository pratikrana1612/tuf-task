You can visit deployed project on 
[Demo](https://task.trinitykg.com/)



## Run Locally

Clone the project

```bash
  git clone https://github.com/pratikrana1612/tuf-task.git
```
## Backend
Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
`PORT`
`DB_DATABASE`
`DB_USER`
`DB_PASS`
`DB_HOST`

Start the server

```bash
  node app.js
```
## Frontend
Go to the project directory

```bash
  cd Frontend
```

Install dependencies

```bash
  npm install
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
`VITE_API_URL`
Start the server

```bash
  npm run dev
```


## API Reference

#### Post Question

```http
  POST /api/learn
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `question`| `string` | **Required**.|
| `answer`  | `string` | **Required**.|

#### Get/PUT/DELETE item

```http
   PUT /api/learn/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|
| `question`| `string` | **Required**.|
| `answer`  | `string` | **Required**.|






