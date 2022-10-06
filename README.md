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