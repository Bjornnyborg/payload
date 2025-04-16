const mongodbReplacement = {
    // Replacement between `// database-adapter-config-start` and `// database-adapter-config-end`
    configReplacement: (envName = 'DATABASE_URI')=>[
            '  db: mongooseAdapter({',
            `    url: process.env.${envName} || '',`,
            '  }),'
        ],
    importReplacement: "import { mongooseAdapter } from '@payloadcms/db-mongodb'",
    packageName: '@payloadcms/db-mongodb'
};
const postgresReplacement = {
    configReplacement: (envName = 'DATABASE_URI')=>[
            '  db: postgresAdapter({',
            '    pool: {',
            `      connectionString: process.env.${envName} || '',`,
            '    },',
            '  }),'
        ],
    importReplacement: "import { postgresAdapter } from '@payloadcms/db-postgres'",
    packageName: '@payloadcms/db-postgres'
};
const vercelPostgresReplacement = {
    configReplacement: (envName = 'POSTGRES_URL')=>[
            '  db: vercelPostgresAdapter({',
            '    pool: {',
            `      connectionString: process.env.${envName} || '',`,
            '    },',
            '  }),'
        ],
    importReplacement: "import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'",
    packageName: '@payloadcms/db-vercel-postgres'
};
const sqliteReplacement = {
    configReplacement: (envName = 'DATABASE_URI')=>[
            '  db: sqliteAdapter({',
            '    client: {',
            `      url: process.env.${envName} || '',`,
            '    },',
            '  }),'
        ],
    importReplacement: "import { sqliteAdapter } from '@payloadcms/db-sqlite'",
    packageName: '@payloadcms/db-sqlite'
};
export const dbReplacements = {
    mongodb: mongodbReplacement,
    postgres: postgresReplacement,
    sqlite: sqliteReplacement,
    'vercel-postgres': vercelPostgresReplacement
};
const vercelBlobStorageReplacement = {
    // Replacement of `// storage-adapter-placeholder`
    configReplacement: [
        '    vercelBlobStorage({',
        '      collections: {',
        '        media: true,',
        '      },',
        "      token: process.env.BLOB_READ_WRITE_TOKEN || '',",
        '    }),'
    ],
    importReplacement: "import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'",
    packageName: '@payloadcms/storage-vercel-blob'
};
const payloadCloudReplacement = {
    configReplacement: [
        '    payloadCloudPlugin(),'
    ],
    importReplacement: "import { payloadCloudPlugin } from '@payloadcms/payload-cloud'",
    packageName: '@payloadcms/payload-cloud'
};
// Removes placeholders
const diskReplacement = {
    configReplacement: [],
    importReplacement: ''
};
export const storageReplacements = {
    localDisk: diskReplacement,
    payloadCloud: payloadCloudReplacement,
    vercelBlobStorage: vercelBlobStorageReplacement
};
export const configReplacements = {
    sharp: {
        // Replacement of `sharp, // Now optional`
        configReplacement: {
            match: 'sharp,',
            replacement: '  // sharp,'
        },
        importReplacement: "import sharp from 'sharp'",
        packageName: 'sharp'
    }
};

//# sourceMappingURL=replacements.js.map