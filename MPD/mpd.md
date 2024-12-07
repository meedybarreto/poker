CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT, -- Identifiant unique
    name VARCHAR(100) NOT NULL,         -- Nom de l'utilisateur
    password VARCHAR(255) NOT NULL,    -- Mot de passe sécurisé
    balance DECIMAL(10, 2) NOT NULL    -- Solde de crypto virtuelle
);


CREATE TABLE Game (
    id INT PRIMARY KEY AUTO_INCREMENT, -- Identifiant unique de la partie
    userId INT NOT NULL,                -- Référence vers User
    bet DECIMAL(10, 2) NOT NULL,       -- Mise de la partie
    result VARCHAR(50) NOT NULL,       -- Résultat (gain, perte, nul)
    createdAt DATETIME NOT NULL,       -- Date et heure de la partie
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
);
