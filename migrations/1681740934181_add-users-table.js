/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `CREATE TABLE IF NOT EXISTS users(
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        username TEXT NOT NULL UNIQUE,
        data JSONB,
        created_at TIMESTAMP NOT NULL DEFAULT NOW() 
        );`
    )

};

exports.down = pgm => {
    pgm.sql(
        `DROP TABLE IF EXISTS users;`
    )
};
