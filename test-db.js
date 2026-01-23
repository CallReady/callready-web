"use strict";

const { q } = require("./db");

(async () => {
  try {
    const res = await q("select now()");
    console.log("Database connected. Time:", res.rows[0]);
  } catch (e) {
    console.error("Database error:", e);
  } finally {
    process.exit();
  }
})();