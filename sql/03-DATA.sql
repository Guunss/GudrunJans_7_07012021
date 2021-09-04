INSERT INTO users
(id,
email,
password,
moderator,
pseudo,
createdAt,
updatedAt)
VALUES
(1, 'admin@test', '$2b$10$oWp9s3TGaHVkjvhvBGFpLOkuGQDIu/VRYvMaBcDlsaOUbspLftRm.' , true, 'admin', now(), now());
