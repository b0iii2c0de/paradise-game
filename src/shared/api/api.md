эндпоинт и модель из alpha-centauri-api.json:

/app/init (POST):

Инициализирует приложение
Запрос: AppInitRequest (данные и query)
Ответ: AuthResultModel (токен и ID пользователя)
/app/time (GET):

Возвращает текущее время сервера
Ответ: строка в формате date-span
/twitter-tasks/{taskId}/intent-link (GET):

Получает ссылку для Twitter-задачи
Параметр: taskId (UUID)
Ответ: строка (ссылка)
/users/assign-twitter-user (POST):

Привязывает Twitter-аккаунт к пользователю
Параметры: Id и TwitterId
/user-friends (GET):

Получает список друзей пользователя
Ответ: GetMyFriendsModel
/tap (POST):

Регистрирует тап пользователя
Запрос: AddTapModel
Ответ: GetPointModel
/point-boost (POST):

Активирует буст очков
Ответ: GetPointModel
/zone-boost (POST):

Активирует буст зоны
Ответ: GetPointModel
/progress (GET):

Получает прогресс пользователя
Ответ: GetPointModel
/user-missions (GET):

Получает список миссий пользователя
Ответ: GetMyMissionsModel
/user-missions/{missionId} (GET):

Получает детали конкретной миссии
Параметр: missionId (UUID)
Ответ: GetMyMissionDetailsModel
/user-missions/run (POST):

Запускает выполнение миссии
Параметр: missionId (UUID)
Ответ: boolean (успех/неудача)
Эти эндпоинты охватывают функциональность инициализации, управления пользователями, друзьями, игровой механики (тапы, бусты) и системы миссий.