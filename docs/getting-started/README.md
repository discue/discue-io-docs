# Getting Started

## Prerequisites
In order to getting started you need a valid and enabled account. To create an account please visit our [account creation](https://www.discue.io/registration/create-account) page. The onboarding pages will guide you through the onboarding process to create an [organization](/api-overview/#organizations) and an API key. 

## Create a queue
After you have created your API Key you can start with the setup. 
Our [REST API](/api-overview/) provides endpoints for creation and maintenance of [queues](/api-reference/#queues), [listeners](/api-reference/#listeners), and [messages](/api-reference/#messages).

Let's start with the creation of **queue** via the [queues](/api-reference/#queues) endpoint. To create a **queue** you only need to pass its name to the API.

<CodeGroup><CodeGroupItem title="javascript">

```javascript
const body = {
  "name": "myapp.io/deletion-request-queue"
}

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-API-KEY':'API_KEY'
}

const response = await fetch('http://api.example.com/v1/queues', {
  method: 'PUT',  body,  headers
})

const body = await response.json()
```

</CodeGroupItem>

<CodeGroupItem title="python">

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-API-KEY': 'API_KEY'
}

r = requests.put('http://api.example.com/v1/queues', headers = headers)
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
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-API-KEY": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://api.example.com/v1/queues", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
}
```

</CodeGroupItem>
</CodeGroup>

✔ If the request was handled successfully, the response will have status code `200` and the following response body. The value of `queue.id` is the **internal identifier of the queue**. This value must be used to create **listeners** and put **messages** on the **queue**. Please store the id somewhere, so we can use it for upcoming requests.

```json
{
  "queue": {
    "id": "180994c-b6b2-4d0e-b7ad-414716e83386",
    "name": "myapp.io/deletion-request-queue",
    "listeners": [ ]
  },
  "_links": {
    "self": {
      "href": "https://api.example.com/queues/180994c-b6b2-4d0e-b7ad-414716e83386"
    }
  }
}
```

ℹ A `queue's` name is its external identifier. Therefore, the name must be unique. If the name already exists, the endpoint will set status code `422` and return the following error:

```json
{
  "title": "Unprocessable Entity",
  "status": 422
}
```

Other response types and status codes are documented in the [API reference](/api-reference/#put-queues).

## Create a listener
As mentioned above, **a listener will be invoked whenever a message was put on the target queue**. No messages are lost. If a listener becomes unavailable, or does not respond, **the delivery will be retried** by our broadcast function.

The [PUT](/api-reference/#put-queues-queue-id-listeners) endpoint of the [listeners](/api-reference/#listeners) resource takes one JSON object with three mandatory values:
- name: `the external identifier of the listener`
- notify_url: `the endpoint that will be invoked whenever a message arrived on a queue `
- liveness_url: `the endpoint we will use to determine the liveness of the listener`

The path to the [listeners](/api-reference/#listeners) resource includes the `queue_id` variable. This variable - the internal id of the **queue** - must be resolved before executing the request. You'll find this id in the success response of the previous request.

<CodeGroup><CodeGroupItem title="javascript">

```javascript
const body = {
  "name": "myapp.io/deletion-request-listener",
  "notify_url": "https://myapp.io/deletion/listener",
  "liveness_url": "https://myapp.io/live"
}

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-API-KEY':'API_KEY'
}

const response = await fetch('http://api.example.com/v1/queues/{queue_id}/listeners', {
  method: 'PUT',  body,  headers
})

const body = await response.json()
```

</CodeGroupItem>

<CodeGroupItem title="python">

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-API-KEY': 'API_KEY'
}

r = requests.put('http://api.example.com/v1/queues/{queue_id}/listeners', headers = headers)
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
      "Content-Type": []string{"application/json"},
      "Accept": []string{"application/json"},
      "X-API-KEY": []string{"API_KEY"},
  }

  data := bytes.NewBuffer([]byte{jsonReq})
  req, err := http.NewRequest("PUT", "http://api.example.com/v1/queues/{queue_id}/listeners", data)
  req.Header = headers

  client := &http.Client{}
  resp, err := client.Do(req)
}
```

</CodeGroupItem>

</CodeGroup>

✔ If the request was handled successfully, the response will have status code `200` and the following response body. The value of `listener.id` is the **internal identifier of the listener**. The id must be used for update and deletion requests.

```json
{
  "listener": {
    "id": "36a650fc-9594-47d3-9c36-26b89b464858",
    "name": "myapp.io/deletion-request-listener"
  },
  "_links": {
    "self": {
      "href": "https://api.example.com/queues/180994c-b6b2-4d0e-b7ad-414716e83386/listeners/0644659f-b47b-4668-86dd-a496cb7fbc76"
    }
  }
}
```

Other response types and status codes are documented in the [API reference](/api-reference/#put-queues-queue-id-listeners).

## Create and submit a message

The [PUT](/api-reference/#put-queues-queue-id-messages) endpoint of the [messages](/api-reference/#messages) resource takes one JSON object with three mandatory values:
- data: `the message string`


The path to the [messages](/api-reference/#messages) resource includes the `queue_id` variable. This variable - the internal id of the **queue** - must be resolved before executing the request. You'll find this id in the success response of the our first request.

<CodeGroup><CodeGroupItem title="javascript">

```javascript
const body = {
  "data": "{ \"userId\": \"481512342\" }"
}

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-API-KEY':'API_KEY'
}

const response = await fetch('http://api.example.com/v1/queues/{queue_id}/messages', {
  method: 'PUT',  body,  headers
})

const body = await response.json()
```

</CodeGroupItem>

<CodeGroupItem title="python">

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-API-KEY': 'API_KEY'
}

r = requests.put('http://api.example.com/v1/queues/{queue_id}/messages', headers = headers)
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
      "Content-Type": []string{"application/json"},
      "Accept": []string{"application/json"},
      "X-API-KEY": []string{"API_KEY"},
  }

  data := bytes.NewBuffer([]byte{jsonReq})
  req, err := http.NewRequest("PUT", "http://api.example.com/v1/queues/{queue_id}/messages", data)
  req.Header = headers

  client := &http.Client{}
  resp, err := client.Do(req)
}
```

</CodeGroupItem>

</CodeGroup>

✔ If the request was handled successfully, the response will have status code `200` and the following response body. The value of `message.id` is the **internal identifier of the message**. The id must be used for update and deletion requests.

```json
{
  "message": {
    "id": "8476f9ea-e457-4fed-8fbd-347a96237a96",
    "name": "myapp.io/delete-user-message-24abcd9"
  },
  "_links": {
    "self": {
      "href": "https://api.example.com/queues/180994c-b6b2-4d0e-b7ad-414716e83386/messages/8476f9ea-e457-4fed-8fbd-347a96237a96"
    }
  }
}
```

Other response types and status codes are documented in the [API reference](/api-reference/#put-queues-queue-id-messages).

## Register your local machine as a listener
> :information_source: Allthough it is convenient, it is a security risk to expose your local machine to the internet.

To allow us to call your **Listeners**, it must be available over the public internet. For the sake of this tutorial we will expose our local machine to the internet. 

Assuming you already have `node` and `npm` installed, let's install [localtunnel](https://www.npmjs.com/package/localtunnel), which will .

The project will