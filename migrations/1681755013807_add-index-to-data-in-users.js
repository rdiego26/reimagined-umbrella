/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `CREATE INDEX IF NOT EXISTS 
    idx_users_data ON users USING GIN(data)`
    )
};

exports.down = pgm => {
    pgm.sql(
        `DROP INDEX IF EXISTS idx_users_data`
    )
};
