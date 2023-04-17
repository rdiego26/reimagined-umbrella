/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `ALTER TABLE users
    ADD location TEXT`
    )
};

exports.down = pgm => {
    pgm.sql(
        `ALTER TABLE users DROP COLUMN location`
    )
};
