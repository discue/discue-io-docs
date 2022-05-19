---
title: discue scheduling and queueing API v0.1.0
language_tabs:
  - shell: curl
  - javascript: JavaScript
  - python: Python
  - go: Go
toc_footers: []
includes: []
api:
  method: delete
  path: /queues/{queue_id}/messages/{message_id}
  name: Delete a message by id

---

# Delete a message by id

<p class="text-lg">
<span class="font-medium">DELETE</span> /queues/{queue_id}/messages/{message_id}
</p>

Deletes a message by id. To identify the target message a `queue_id` and a `message_id` must be passed as a path parameter. 
If no queue or message with the given ids can be found, the endpoint returns status `404`.

<Badge type="danger" text="Warning" vertical="middle"/> As a result of calling this endpoint
<strong>the target message will be deleted forever</strong>. This process cannot be reverted.

::: tip Authentication
**The target organization for this request will be determined by the supplied access token.** 

As a prerequisite you need to **[create an account](https://www.discue.io/registration/create-account)** and follow
the onboarding process to also **create an organizatio**n and **an API key**.

See also: [Authentication](/getting-started/#prerequisites).
:::

## Examples
<CodeGroup><CodeGroupItem title="shell">

```shell
curl -X DELETE http://api.discue.io/v1/queues/{queue_id}/messages/{message_id} \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: API_KEY'
```

</CodeGroupItem>

<CodeGroupItem title="javascript">

```javascript
const headers = {
  'Accept':'application/json',
  'X-API-KEY':'API_KEY'
}

const response = await fetch('http://api.discue.io/v1/queues/{queue_id}/messages/{message_id}', {
  method: 'DELETE',  headers
})

const body = await response.json()
```

</CodeGroupItem>

<CodeGroupItem title="python">

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-API-KEY': 'API_KEY'
}

r = requests.delete('http://api.discue.io/v1/queues/{queue_id}/messages/{message_id}', headers = headers)
```

</CodeGroupItem>

<CodeGroupItem title="go">

```go
package main

import (
  "bytes"
  "net/http"
)

func main() {

  headers := map[string][]string{
      "Accept": []string{"application/json"},
      "X-API-KEY": []string{"API_KEY"},
  }

  data := bytes.NewBuffer([]byte{jsonReq})
  req, err := http.NewRequest("DELETE", "http://api.discue.io/v1/queues/{queue_id}/messages/{message_id}", data)
  req.Header = headers

  client := &http.Client{}
  resp, err := client.Do(req)
}
```

</CodeGroupItem>

</CodeGroup>

## Parameters 
|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue_id|path|string(uuid)|✔|Id of the target queue|
|message_id|path|string(uuid)|✔|Id of the target message|
|pretty|query|boolean| ❌ |Return the response pretty printed|

## Responses 

::: tip 400 Response
:::

```json
{
  "title": "Bad Request",
  "status": 400
}
```

::: tip 401 Response
:::

```json
{
  "title": "Unauthorized",
  "status": 401
}
```

::: tip 402 Response
:::

```json
{
  "title": "Payment Required",
  "status": 402
}
```

::: tip 403 Response
:::

```json
{
  "title": "Forbidden",
  "status": 403
}
```

::: tip 404 Response
:::

```json
{
  "title": "Not Found",
  "status": 404
}
```

::: tip 405 Response
:::

```json
{
  "title": "Method Not Allowed",
  "status": 405
}
```

::: tip 406 Response
:::

```json
{
  "title": "Not Acceptable",
  "status": 406
}
```

::: tip 409 Response
:::

```json
{
  "title": "Conflict",
  "status": 409
}
```

::: tip 415 Response
:::

```json
{
  "title": "Unsupported Media Type",
  "status": 415
}
```

::: tip 422 Response
:::

```json
{
  "title": "Unprocessable Entity",
  "status": 422
}
```

::: tip 423 Response
:::

```json
{
  "title": "Locked",
  "status": 423
}
```

::: tip 429 Response
:::

```json
{
  "title": "Too Many Requests",
  "status": 429
}
```

::: tip 500 Response
:::

```json
{
  "title": "Internal Server Error",
  "status": 500
}
```

::: tip 501 Response
:::

```json
{
  "title": "Not Implemented",
  "status": 501
}
```

::: tip 503 Response
:::

```json
{
  "title": "Service Unavailable",
  "status": 503
}
```

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Ok|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|402|[Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)|Payment Required|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|Inline|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|Not Acceptable|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|Inline|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity|Inline|
|423|[Locked](https://tools.ietf.org/html/rfc2518#section-10.4)|Locked|Inline|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|Inline|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Unavailable|Inline|

---

