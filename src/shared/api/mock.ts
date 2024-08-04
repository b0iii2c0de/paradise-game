const mock = {
  "openapi": "3.0.1",
  "info": {
    "title": "AlphaCentavra.WebApp.Backend",
    "version": "1.0"
  },
  "paths": {
    "/app/init": {
      "post": {
        "tags": [
          "App"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AppInitRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/AppInitRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/AppInitRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/AuthResultModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthResultModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthResultModel"
                }
              }
            }
          }
        }
      }
    },
    "/app/time": {
      "get": {
        "tags": [
          "App"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string",
                  "format": "date-span"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string",
                  "format": "date-span"
                }
              },
              "text/json": {
                "schema": {
                  "type": "string",
                  "format": "date-span"
                }
              }
            }
          }
        }
      }
    },
    "/twitter-tasks/{taskId}/intent-link": {
      "get": {
        "tags": [
          "TwitterTasks"
        ],
        "parameters": [
          {
            "name": "taskId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              },
              "text/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "/users/assign-twitter-user": {
      "post": {
        "tags": [
          "TwitterUsers"
        ],
        "parameters": [
          {
            "name": "Id",
            "in": "query",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "TwitterId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/user-friends": {
      "get": {
        "tags": [
          "UserFriends"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyFriendsModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyFriendsModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyFriendsModel"
                }
              }
            }
          }
        }
      }
    },
    "/tap": {
      "post": {
        "tags": [
          "UserGame"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AddTapModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/AddTapModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/AddTapModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              }
            }
          }
        }
      }
    },
    "/point-boost": {
      "post": {
        "tags": [
          "UserGame"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              }
            }
          }
        }
      }
    },
    "/zone-boost": {
      "post": {
        "tags": [
          "UserGame"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              }
            }
          }
        }
      }
    },
    "/progress": {
      "get": {
        "tags": [
          "UserGame"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPointModel"
                }
              }
            }
          }
        }
      }
    },
    "/user-missions": {
      "get": {
        "tags": [
          "UserMissions"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyMissionsModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyMissionsModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyMissionsModel"
                }
              }
            }
          }
        }
      }
    },
    "/user-missions/{missionId}": {
      "get": {
        "tags": [
          "UserMissions"
        ],
        "parameters": [
          {
            "name": "missionId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyMissionDetailsModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyMissionDetailsModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMyMissionDetailsModel"
                }
              }
            }
          }
        }
      }
    },
    "/user-missions/run": {
      "post": {
        "tags": [
          "UserMissions"
        ],
        "parameters": [
          {
            "name": "missionId",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "uuid"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "boolean"
                }
              },
              "application/json": {
                "schema": {
                  "type": "boolean"
                }
              },
              "text/json": {
                "schema": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AddTapModel": {
        "type": "object",
        "properties": {
          "tapCounter": {
            "type": "integer",
            "format": "int32"
          },
          "tapCreated": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "AppInitRequest": {
        "type": "object",
        "properties": {
          "data": {
            "type": "string",
            "nullable": true
          },
          "query": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "AuthResultModel": {
        "type": "object",
        "properties": {
          "token": {
            "type": "string",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "additionalProperties": false
      },
      "Friend": {
        "type": "object",
        "properties": {
          "avatar": {
            "type": "string",
            "nullable": true
          },
          "league": {
            "$ref": "#/components/schemas/Leagues"
          },
          "leagueText": {
            "type": "string",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "balance": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "GetMyFriendsModel": {
        "type": "object",
        "properties": {
          "inviteLink": {
            "type": "string",
            "nullable": true
          },
          "invitedFriendCount": {
            "type": "integer",
            "format": "int32"
          },
          "friends": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Friend"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "GetMyMissionDetailsModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "link": {
            "type": "string",
            "nullable": true
          },
          "isComplitted": {
            "type": "boolean"
          },
          "reward": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "GetMyMissionsModel": {
        "type": "object",
        "properties": {
          "available": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Mission"
            },
            "nullable": true
          },
          "completed": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Mission"
            },
            "nullable": true
          },
          "completedCount": {
            "type": "integer",
            "format": "int32"
          },
          "reward": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "GetPointModel": {
        "type": "object",
        "properties": {
          "value": {
            "type": "number",
            "format": "double"
          },
          "scalePoint": {
            "type": "integer",
            "format": "int32"
          },
          "position": {
            "type": "number",
            "format": "double"
          },
          "scaleZone": {
            "type": "integer",
            "format": "int32"
          },
          "limit": {
            "type": "number",
            "format": "double"
          },
          "lastClick": {
            "type": "string",
            "format": "date-time"
          },
          "updateDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "Leagues": {
        "enum": [
          "leagueBase",
          "league1",
          "league2",
          "league3",
          "league4",
          "league5",
          "league6",
          "league7",
          "league8"
        ],
        "type": "string"
      },
      "Mission": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "imageLink": {
            "type": "string",
            "nullable": true
          },
          "answer": {
            "type": "string",
            "nullable": true
          },
          "type": {
            "$ref": "#/components/schemas/MissionTaskType"
          },
          "twitterTaskType": {
            "$ref": "#/components/schemas/TwitterTaskType"
          },
          "timeoutDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "reward": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "MissionTaskType": {
        "enum": [
          "none",
          "twitter",
          "telegram",
          "discord",
          "question",
          "link"
        ],
        "type": "string"
      },
      "TwitterTaskType": {
        "enum": [
          "subscribe",
          "like",
          "retweet",
          "createTweet"
        ],
        "type": "string"
      }
    }
  } 
}
