
## 1. Entité `User`


| **Attribut** | **Type**   | 
|--------------|------------|
| `id`         | integer    | 
| `name`       | string     | 
| `password`   | string     |
| `balance`    | Décimal    |

## 2. Entité `Game`
Cette entité représente une partie de poker jouée par un utilisateur.

| **Attribut** | **Type**   | 
|--------------|------------|
| `id`         | integer    | 
| `userId`     | integer    | 
| `bet`        | Décimal    | 
| `result`     | string     | 
| `createdAt`  | Date       | 

## 3. Relation entre `User` et `Game`


| **Entité 1**  | **Entité 2**  | **Cardinalité** |
|---------------|---------------|-----------------|
| `User`        | `Game`        | 1:N             |

## Diagramme du MLD


+----------------------+
|       User           |
+----------------------+
| id (PK)              |
| name                 |
| password             |
| balance              |
+----------------------+
        | 1
        |
        |
        v
+----------------------+
|       Game           |
+----------------------+
| id (PK)              |
| userId (FK)          |
| bet                  |
| result               |
| createdAt           |
+----------------------+
