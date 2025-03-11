module.exports = {
    apps: [
        {
            name: "astro-app",
            script: "sh",
            args: "-c 'npm run build && npm run start'",
            watch: ["src", "public"],
            autorestart: true,
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};
