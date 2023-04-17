/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `ALTER TABLE users
    ADD UPDATED_AT TIMESTAMP DEFAULT NOW() NOT NULL`
    )
};

exports.down = pgm => {
    pgm.sql(
        `ALTER TABLE users DROP COLUMN username`
    )
};
