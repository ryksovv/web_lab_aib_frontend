# [РГУПС](https://rgups.ru)

## curl rgups.ru -I -v -L -k --user-agent "Yandex"

-I: Выполнить запрос HEAD (получить только заголовки HTTP).

-v: Вывод дополнительной информации о процессе запроса.

-L: Следовать автоматически за редиректами (3xx коды ответов).

-k: Игнорировать проверку SSL/TLS сертификата.

--user-agent "Yandex": отправляет запрос якобы от браузера "Яндекс".

```shell
* Connected to rgups.ru (80.72.224.90) port 443 - IP адрес (в скобках) и port

* using HTTP/1.x

Блок запроса:

> HEAD / HTTP/1.1 - HEAD-запрос к корневому каталогу сайта с использованием HTTP/1.1.
> Host: rgups.ru -  Заголовок Host устанавливается на "rgups.ru".
> User-Agent: Yandex -  Заголовок User-Agent устанавливается на "Yandex".
> Accept: */* - Принять любой тип содержимого.
>

Блок ответа:

< HTTP/1.1 200 OK - Успешный ответ, код статуса 200 (ОК).
< Server: nginx/1.19.1 - Сервер использует программное обеспечение nginx версии 1.19.1.
< Date: Sun, 24 Sep 2023 11:39:06 GMT - Дата и время ответа.
< Content-Type: text/html; charset=utf-8 - Тип и кодировка содержимого — HTML с UTF-8.
< Connection: keep-alive - Соединение "keep-alive" (постоянное соединение)
< X-Powered-By: ProcessWire CMS - Сайт работает на CMS ProcessWire.
< Set-Cookie: wire=9221aafb239cd180d23e9e1b72a4e0f8; path=/; HttpOnly; SameSite=Lax -  Установка куки сессии.
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - Недействительное время истечения срока действия кеша.
< Cache-Control: no-store, no-cache, must-revalidate - Запрет кеширования на стороне клиента.
< Pragma: no-cache -  Запрет кеширования на стороне клиента (устаревший заголовок).
```


# [GitHub](https://github.com/)

## curl github.com -I -v -L -k --user-agent "Yandex"

```shell
* Connected to github.com (140.82.121.3) port 443

* using HTTP/1.x

Блок запроса:

> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: Yandex
> Accept: */*

Блок ответа:

< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Sun, 24 Sep 2023 11:48:47 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With -  Заголовок Vary указывает, что ответ может зависеть от указанных заголовков запроса.
< content-language: en-US - Язык содержимого – английский (США).
< ETag: W/"0136e5b554cfd74cfa68215d96a83d56" - ETag помогает браузеру определить, обновлён ли контент, по сравнению с закешированной версией.
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload - Заголовок Strict-Transport-Security обеспечивает безопасность транспорта, заставляя браузер использовать HTTPS для сайта и поддоменов в течение определённого времени.
< X-Frame-Options: deny - заголовок X-Frame-Options указывает, что содержимое не может быть встроено в использующий элементы (например, в <iframe>).
< X-Content-Type-Options: nosniff -  Запрет на "подмену" типа содержимого (браузер не должен выполнять "sniffing").
< X-XSS-Protection: 0 - Отключение встроенной защиты от атак XSS в браузере.
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - Политика использования заголовка Referrer. Управляет передачей информации о источнике для данного сайта.
< Content-Security-Policy: ... - Заголовок Content-Security-Policy указывает политику контента, ограничивая источники различных типов контента.
< Set-Cookie: ...; Path=/; HttpOnly; Secure; SameSite=Lax 
< Accept-Ranges: bytes - Браузер может запрашивать части файла (по байтам) вместо запрашивания всего файла.
< X-GitHub-Request-Id: 9D6B:112F0:BB21405:BE0AE9A:65102221 - Идентификатор запроса, присвоенный сервером GitHub, который может быть использован для отслеживания или отладки цепочки запросов.

```

# [РЖД](https://rzd.ru)

## curl rzd.ru -I -v -L -k --user-agent "Yandex"

```shell
* Connected to www.rzd.ru (212.164.138.123) port 443

* using HTTP/1.x

Блок запроса:

> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>

Блок ответа:

< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 206681 - Длина полученного контента.
< Connection: keep-alive
< Date: Sun, 24 Sep 2023 12:01:30 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-776d97f9d-p87lc - Эта строка представляет собой метаданные, указывающие на имя пода (Pod-Name) в Kubernetes.
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx2 - Эта строка является заголовком HTTP-сообщения и указывает, через какой сервер-посредник (в данном случае - nginx2) было отправлено сообщение клиенту или другому серверу.
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=1787d40202fe489471ba1a5518991a24dd1686f4d044e177d75ef2f6a1f36708e44d1cd6ca88751021d780a5646b8a28; Max-Age=86400; Path=/; secure; HttpOnly
< X-XSS-Protection: 1; mode=block
```
# [Яндекс](https://yandex.ru)

## curl yandex.ru -I -v -L -k --user-agent "Yandex"

```shell
Connected to dzen.ru (62.217.160.2) port 443
* schannel: disabled automatic use of client certificate
* using HTTP/1.x

Блок запроса:

> HEAD /?yredirect=true HTTP/1.1
> Host: dzen.ru
> User-Agent: Yandex
> Accept: */*
>

Блок ответа:

< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Security-Policy-Report-Only: 
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=Xn/Q1mQ4Pez3BvP2k5ijUMQg68/uYEIfGUIFZkdsW5kaH2q4shzwlNfkv8RK3DggXw==; domain=.dzen.ru; path=/; expires=Wed, 21 Sep 2033 12:10:52 GMT; secure
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Requestid: 1747533317.150.1695557452357.42490
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1695557452321809-421418894692298359900121-production-app-host-sas-zen-468

```
# [PYTHON](https://python.org)

## curl python.org -I -v -L -k --user-agent "Yandex"
```shell

* Connected to www.python.org (151.101.244.223) port 443
* using HTTP/1.x

Блок запроса:

> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: Yandex
> Accept: */*
>

Блок ответа:

< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50127
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Sun, 24 Sep 2023 12:20:07 GMT
< Age: 2765
< X-Served-By: cache-iad-kiad7000025-IAD, cache-hel1410028-HEL - эта строка говорит о том, что запрос был обработан через два сервера кеширования – один в Северной Америке, другой в Европе.
< X-Cache: HIT, HIT - заголовок, указывающий на то, что данный ресурс был успешно взят из кеша (кешированный) на двух уровнях.
< X-Cache-Hits: 53, 11 - заголовок, показывающий количество обращений к кешу на обоих уровнях. В данном случае, ресурс был запрошен из кеша 53 раза на первом уровне и 11 раз — на втором уровне.
< X-Timer: S1695558007.472579,VS0,VE0
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
# [GIT SCM](https://git-scm.com)

## curl git-scm.com -I -v -L -k --user-agent "Yandex"
```shell
* Connected to git-scm.com (188.114.99.229) port 443
Блок запроса:

> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: Yandex
> Accept: */*
>

Блок ответа:

< HTTP/1.1 200 OK
< Date: Sun, 24 Sep 2023 12:27:30 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - Данная строка является HTTP заголовком и означает, что браузер не должен автоматически открывать загруженные файлы, а должен просто сохранять их на диск.
< X-Permitted-Cross-Domain-Policies: none - это заголовок, позволяющий ограничить обработку политики Adobe Flash Player для кроссдоменных запросов. В данном случае, он сообщает, что сервер не разрешает обработку кроссдоменных политик на этом сайте.
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 5b655b2f-128f-4205-940e-13860b4aaf19 - с помощью этого заголовка идентификатор запроса (обычно генерируется в виде уникального UUID) связывается с каждым запросом. Это помогает при отладке, логировании и отслеживании ошибок на сервере.
< X-Runtime: 0.008824
< Via: 1.1 vegur
< CF-Cache-Status: HIT -  это заголовок, связанный с сервисом Cloudflare (CDN и облачный защитник сайтов). Этот заголовок говорит о статусе закэшированного ресурса: значение "HIT" означает, что запрашиваемый ресурс был получен из кэша Cloudflare, а не напрямую с исходного сервера, что может сократить время обработки запроса и снизить нагрузку на исходный сервер.
< Age: 13576
< Server: cloudflare - Сервер, обрабатывающий запрос.
< CF-RAY: 80bb0598a959376d-HEL - это идентификатор запроса, присвоенный Cloudflare, позволяющий определить и отслеживать конкретный запрос между вашим устройством и сервером. 
```

# [Jet Brains](https://jetbrains.com)

## curl www.jetbrains.com -I -v -L -k --user-agent "Yandex"
```shell
* Connected to www.jetbrains.com (108.157.229.64) port 443

Блок запроса:

> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: Yandex
> Accept: */*
>

Блок ответа:

< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47213
< Connection: keep-alive
< Date: Sun, 24 Sep 2023 12:35:30 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Sun, 24 Sep 2023 12:35:30 GMT
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 917c6054ae6e10a98fc566c655129e8a.cloudfront.net (CloudFront)
< Alt-Svc: h3=":443"; ma=86400 - Заголовок Alt-Svc указывает на доступные альтернативные сервисы для данного ресурса. В данном случае, сервер информирует клиента о поддержке протокола HTTP/3 (h3) на порте 443, и время жизни альтернативного сервиса составляет 86 400 секунд (24 часа).
< Age: 112
< Set-Cookie: cf_country-region=RU-KDA; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: ARN56-P2 -  Это нестандартный заголовок, связанный с AWS (Amazon Web Services). X-Amz-Cf-Pop указывает на всплывающее окно глобального ускорителя Amazon CloudFront, через которое клиент обращается к серверу. Значение ARN56-P2 идентифицирует конкретное всплывающее окно.
< X-Amz-Cf-Id: coj3v8txddbbO-VAC7HCfALB45cM4xw6jIlAzlOR_Yx_GREVPJgTdw== - Еще один нестандартный заголовок, связанный с AWS. X-Amz-Cf-Id представляет собой идентификатор запроса, который используется для отслеживания и логирования запроса ассоциирующих его с конкретным всплывающим окном глобального ускорителя Amazon CloudFront.
```
# [VSC](https://code.visualstudio.com)

## curl code.visualstudio.com -I -v -L -k --user-agent "Yandex"

```shell
* Connected to code.visualstudio.com (13.107.246.53) port 443

Блок запроса:

> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: Yandex
> Accept: */*
>

Блок ответа:

< HTTP/1.1 200 OK
< Content-Length: 50213
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
< ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self'
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 0hi8QZQAAAACzwCmCqADWRLepw6MSuf5jU1RPRURHRTEzMjAAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< X-Cache: CONFIG_NOCACHE
< Date: Sun, 24 Sep 2023 12:45:58 GMT
```