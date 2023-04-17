/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `ALTER TABLE users
    ADD updated_at TIMESTAMP DEFAULT NOW() NOT NULL`
    )
};

exports.down = pgm => {
    pgm.sql(
        `ALTER TABLE users DROP COLUMN updated_at`
    )
};
