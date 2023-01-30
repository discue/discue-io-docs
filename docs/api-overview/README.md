# API Overview

Our API let's you interact with your queues, listeners, and messages. This page will give you an overview of our API while [API Reference](api-reference/) will give you a detailed impression of the available endpoints and schemas.

The API is exposed as an HTTP/1 and HTTP/2 service over TLS. All endpoints live under the URL `https://api.discue.io`.

## Organizations
Organizations group a set of resources and access to these resources. You can create multiple organizations for different departments, users groups, or, e.g., stages. 

Each organization's name must be unique and follow the [Reverse domain name](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) notation.

## Authentication
To access the API you must provide a valid API token. The API must be provided as the `X-API-KEY` header of **each** request.

<CodeGroup><CodeGroupItem title="javascript">

```javascript
const headers = {
  'X-API-KEY':'API_KEY'
}
```

</CodeGroupItem>

<CodeGroupItem title="python">

```python
headers = {
  'X-API-KEY': 'API_KEY'
}
```

</CodeGroupItem>

<CodeGroupItem title="go">

```go
package main
func main() {
  headers := map[string][]string{
      "X-API-KEY": []string{"API_KEY"},
  }
}
```

</CodeGroupItem>
</CodeGroup>

If the authentication is unsuccessful, the status code `401` is returned.

```json
{
  "title": "Unauthorized",
  "status": 401
}
```

> After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with `403 Forbidden`.

## Versioning
By default, all requests to `https://api.discue.io` receive the `v1` version of the REST API. We try to avoid breaking backwards-compatibility as much as possible and will stick with `v1` as long as possible.

See [Tolerant Reading](#tolerant-reading) for a best practice on how to deal with evolving APIs.

## Content Type
All requests must provide and accept JSON data. **Other data formats are not supported**. All responses, errors included, return JSON bodies as well.

<CodeGroup><CodeGroupItem title="javascript">

```javascript
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-API-KEY':'API_KEY'
}
```

</CodeGroupItem>

<CodeGroupItem title="python">

```python
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-API-KEY': 'API_KEY'
}
```

</CodeGroupItem>

<CodeGroupItem title="go">

```go
package main
func main() {
  headers := map[string][]string{
      "Content-Type": []string{"application/json"},
      "Accept": []string{"application/json"},
      "X-API-KEY": []string{"API_KEY"},
  }
}
```

</CodeGroupItem>
</CodeGroup>

## HTTP Verbs
Our API is resource-based and the resources can be manipulated with HTTP verbs. We support the following HTTP methods.

|  Verb  |                                                                                                                                              Description                                                                                                                                               |
| :----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  GET   |                                                                                                                                     Used for retrieving resources.                                                                                                                                     |
|  POST  |                                                                                                                                      Used for creating resources.                                                                                                                                      |
|  PUT   |                                                                                Used for replacing resources or collections. For PUT requests with no body attribute, be sure to set the Content-Length header to zero.                                                                                 |
| DELETE |                                                                                                                                      Used for deleting resources.                                                                                                                                      |

## Error Codes

## Pagination
> :information_source: Pagination is not yet available.

Requests that return multiple items will be paginated to 10 items by default. You can specify further pages with the ?page parameter. For some resources, you can also set a custom page size up to 100 with the ?per_page parameter. Note that for technical reasons not all endpoints respect the ?per_page parameter.


```bash
curl 'https://api.discue.io/users?page=2&per_page=100'
```

## Rate Limiting
> :information_source: Rate limiting is not yet available.

We limit the number of calls you can make over a certain period of time. Rate limits vary and are specified by the following header in all responses:

|      Header Name      |                                 Description                                  |
| :-------------------: | :--------------------------------------------------------------------------: |
|   X-RateLimit-Limit   |     The maximum number of requests you're permitted to make per minute.      |
| X-RateLimit-Remaining |      The number of requests remaining in the current rate limit window.      |
|   X-RateLimit-Reset   | The time at which the current rate limit window resets in UTC epoch seconds. |

If you exceed the rate limit, an error response returns with the status `429 Too Many Requests`.



```bash
Status: 429 Too Many Requests
```



