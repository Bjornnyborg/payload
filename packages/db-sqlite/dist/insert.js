export const insert = async function({ db, onConflictDoUpdate, tableName, values }) {
    const table = this.tables[tableName];
    const result = onConflictDoUpdate ? await db.insert(table).values(values).onConflictDoUpdate(onConflictDoUpdate).returning() : await db.insert(table).values(values).returning();
    // See https://github.com/payloadcms/payload/pull/11831#discussion_r2010431908
    return result;
};

//# sourceMappingURL=insert.js.map