### эндпойнт и модель из paradise-api.json:

/auth/login (POST):

Эндпойнт для авторизации пользователя
Принимает LoginDto с полем initData (строка)
Возвращает LoginResponseDto с полем newUser (булево)
/auth/refresh (POST):

Эндпойнт для обновления токена доступа
Не требует входных данных
Возвращает новый токен доступа
/users/address (PUT):

Эндпойнт для установки XRP адреса пользователя
Принимает AddressDto с полем address (строка)
Устанавливает указанный XRP адрес для пользователя
Модели:

LoginDto:

Содержит поле initData (строка) для данных инициализации
LoginResponseDto:

Содержит поле newUser (булево), указывающее, новый ли это пользователь
BadRequestDto:

Модель для ошибок с полями message (объект), error (строка) и statusCode (число)
AddressDto:

Содержит поле address (строка) для XRP адреса
Эти эндпойнты и модели обеспечивают базовую функциональность для авторизации, обновления токена и управления адресом пользователя в системе Paradise.