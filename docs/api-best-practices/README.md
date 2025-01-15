# API Best Practices

Our API let's you interact with your queues, listeners, and messages. This page will give you an overview of our API while [API Reference](api-reference/) will give you a detailed impression of the available endpoints and schemas.

The API is exposed as an HTTP/1 and HTTP/2 service over TLS. All endpoints live under the URL `https://api.discue.io`.

## Tolerant Reading
We recommend all clients to implement the [Tolerant Reader](https://martinfowler.com/bliki/TolerantReader.html) pattern as described by [Martin Fowler](https://martinfowler.com/). The advantage of this pattern is that it allows us to incrementally improve the API while your implementation is only coupled as minimal as possible.

The JavaScript function `JSON.parse` allows such an implementation of the tolerant reader pattern. The function will merely create a nested hash from the JSON string without application only validation. The same applies to the `Response.json` method as you can see below.

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

// Response.json does not care about missing fields, because it does not know about them
const body = await response.json()
```

</CodeGroupItem>
</CodeGroup>

If you are using Java with [Bean Validation](https://docs.oracle.com/javaee/7/tutorial/bean-validation001.htm) and have annotated your domain classes with validation constraints, than you are not following the tolerant reader pattern. In the example below, the implementation would expect our internal ids to have a certain format. The expectation would fail and your application would break, after we had changed the format of our internal ids.

<CodeGroup>
<CodeGroupItem title="java">

```java
public class Queue {
    
    @Pattern("[0-9]{32}")
    @NotBlank(message = "Id is required")
    private String id;
    
    @NotBlank(message = "Name is required")
    private String name;  
}
```

</CodeGroupItem>
</CodeGroup>

✔ Read only data you need, ignore everything else. 

## Follow Hypermedia Links
> :information_source: Hypermedia links are only present if the response status code equals `200`.

Hypermedia controls are the final level of the REST API maturity model. These controls - in the form of HTTP URLS - allow a REST service to present URLs to the client that are in the relation to the current resource. 

All success messages of our REST API endpoints, return hypermedia links. For example, whenever you create or get a **queue**, the response will contain the URL to the new resource and URLs to all subresources like **listeners** and **messages**.

Below you can see the default response of the [GET](/api-reference/#get-queues-queue-id) method of the [queue](/api-reference/#get-queues-queue-id) endpoint.

```json
{
  "queue": {
    "id": "180994c-b6b2-4d0e-b7ad-414716e83386",
    "name": "myapp.io/delete-user-queue",
    "listeners": [
      {
        "id": "36a650fc-9594-47d3-9c36-26b89b464858",
        "name": "myapp.io/delete-user-listener-64fae19"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.example.com/queues/180994c-b6b2-4d0e-b7ad-414716e83386"
    },
    "myapp.io/delete-user-listener-64fae19": {
      "href": "https://api.example.com/queues/180994c-b6b2-4d0e-b7ad-414716e83386/listeners/0644659f-b47b-4668-86dd-a496cb7fbc76"
    }
  }
}
```

The schema for the hypermedia responses and links is as described below.

```json
{
    "_links": {
        "self": {
            "href": "<< URL to current resource >>"
        },
        "<< name of subresource 1 >>": {
            "href": "<< URL to subresource 1 >>"
        },
        "<< name of subresource n >>": {
            "href": "<< URL to subresource n >>"
        }
    }
}
```

Depending on the number of subresources, there will be an equivalent number of additional links. The `self` link will aways be present.

✔ Use hypermedia links of our success responses instead of hardcoded URL to access our API. That way you will always use the latest backwards compatible endpoint.

## Use Timeouts

## Use Pagination
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



