# Slap Word Back

## API Reference
#### GET

```http
GET /status
```
getting the status of the service

```http
GET /getWord
```

| Parameter  | Type     | Description                  |
|:-----------|:---------|:-----------------------------|
| `language` | `string` | **Required**. Word language  |
| `length`   | `string` | **Required**. Word length    |

getting a random word of a given length

```http
GET /signIn
```

| Parameter  | Type     | Description                   |
|:-----------|:---------|:------------------------------|
| `login`    | `string` | **Required**. User login      |
| `password` | `string` | **Required**. User password   |

gets user data

```http
GET /checkWord
```

| Parameter  | Type     | Description                 |
|:-----------|:---------|:----------------------------|
| `language` | `string` | **Required**. Word language |
| `word`     | `string` | **Required**. Search word   |

checking the word for existence in the database

```http
GET /getTopScore
```
getting a list of users with the highest score

```http
GET /getWordOfTheDay
```

| Parameter  | Type     | Description                 |
|:-----------|:---------|:----------------------------|
| `language` | `string` | **Required**. Word language |

getting the word of the day

#### POST

```http
POST /signUp
```

| Parameter  | Type     | Description                 |
|:-----------|:---------|:----------------------------|
| `login`    | `string` | **Required**. User login    |
| `password` | `string` | **Required**. User password |

registers a user in the system

```http
POST /updateScore
```

| Parameter  | Type     | Description                 |
|:-----------|:---------|:----------------------------|
| `login`    | `string` | **Required**. User login    |
| `password` | `string` | **Required**. User password |
| `score`    | `number` | **Required**. User score    |

updates the user's score