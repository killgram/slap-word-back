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

```http
GET /support
```

get support data

```http
GET /getAboutApp
```

get about app data

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

```http
POST /wrongWord
```

| Parameter | Type     | Description                    |
|:----------|:---------|:-------------------------------|
| `word`    | `string` | **Required**. User suggestions |

send a custom suggestion for the wrong word

#### ROOT GET

```http
GET /getRootXKey
```

| Parameter  | Type     | Description                 |
|:-----------|:---------|:----------------------------|
| `login`    | `string` | **Required**. Root login    |
| `password` | `string` | **Required**. Root password |

get root xKey

```http
GET /getWrongWord
```

| Parameter  | Type     | Description              |
|:-----------|:---------|:-------------------------|
| `xKey`     | `string` | **Required**. Root xKey  |

get a list of invalid words

```http
GET /getCurrentWrongWord
```

| Parameter | Type     | Description             |
|:----------|:---------|:------------------------|
| `xKey`    | `string` | **Required**. Root xKey |
| `word`    | `string` | **Required**. Word      |

returns the number of matches of the wrong word