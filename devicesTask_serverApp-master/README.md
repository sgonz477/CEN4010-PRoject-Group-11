Installation:
------------

```bash
$ npm install
```


Run:
------------

```bash
$ npm start
```


API:
------------

Base url: `http://localhost:3000`


```bash
GET /books
```


```bash
GET /books/:id
```


```bash
DELETE /books/:id
```


```bash
POST /book
```
> |  Request Body                                                           | content-type          |
> |:------------------------------------------------------------------------|:----------------------|
> | `{"system_name": "DESKTOP-ONE","type": "WINDOWS","hdd_capacity": "92"}` | `application/json`    |


```bash
PUT /books/:id
```
> |  Request Body                                                            | content-type          |
> |:-------------------------------------------------------------------------|:----------------------|
> | `{"system_name": "DESKTOP-OFFICE","type": "MAC","hdd_capacity": "500"}`  | `application/json`    |
